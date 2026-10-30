<?php
/**
 * Formulário de contato — substitui o formulário do Elementor do site antigo.
 *
 * Como lá, a página /contato/ envia o POST para o servidor, que valida os campos
 * e manda o e-mail pelo mail() do PHP da Hostinger, com Reply-To no e-mail do visitante.
 *
 * Resposta em JSON:
 *   200 { ok: true,  mensagem }
 *   422 { ok: false, mensagem, erros: { campo: texto } }
 *   403 / 405 / 429 / 500 { ok: false, mensagem }
 */

declare(strict_types=1);

/** Caixa que recebe as mensagens (Microsoft 365). */
const DESTINO = 'contato@mistertech.com.br';
/** Remetente do aviso. Não precisa existir; responder vai para o visitante (Reply-To). */
const REMETENTE = 'site@mistertech.com.br';
const NOME_REMETENTE = 'Site Mistertech';

/** Envios aceitos por IP dentro da janela (o site antigo também não tinha reCAPTCHA). */
const LIMITE_ENVIOS = 5;
const JANELA_SEGUNDOS = 600;

const LIMITES = ['nome' => 120, 'email' => 160, 'assunto' => 120, 'mensagem' => 4000];

date_default_timezone_set('America/Sao_Paulo');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');

function responder(int $status, array $dados): never
{
    http_response_code($status);
    echo json_encode($dados, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

/** Texto de uma linha: sem quebras (evita injeção de cabeçalho) e sem espaços nas pontas. */
function linha(string $texto): string
{
    return trim(preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $texto) ?? '');
}

function cabecalho(string $texto): string
{
    return mb_encode_mimeheader($texto, 'UTF-8', 'B', "\r\n");
}

/** Conta o envio do IP e diz se ele passou do limite. */
function excedeuLimite(string $ip): bool
{
    $pasta = sys_get_temp_dir() . '/mistertech-contato';
    if (!is_dir($pasta) && !@mkdir($pasta, 0700, true)) {
        return false;
    }
    $arquivo = $pasta . '/' . hash('sha256', $ip);
    $agora = time();
    $envios = is_file($arquivo) ? (json_decode((string) file_get_contents($arquivo), true) ?: []) : [];
    $envios = array_values(array_filter($envios, fn($t) => is_int($t) && $t > $agora - JANELA_SEGUNDOS));
    if (count($envios) >= LIMITE_ENVIOS) {
        return true;
    }
    $envios[] = $agora;
    @file_put_contents($arquivo, json_encode($envios), LOCK_EX);
    return false;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    responder(405, ['ok' => false, 'mensagem' => 'Use o formulário da página de contato.']);
}

// Só aceita envios vindos do próprio site.
$origem = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origem !== '' && parse_url($origem, PHP_URL_HOST) !== parse_url('//' . ($_SERVER['HTTP_HOST'] ?? ''), PHP_URL_HOST)) {
    responder(403, ['ok' => false, 'mensagem' => 'Envio não permitido.']);
}

// Armadilha para robôs: o campo fica escondido para pessoas.
if (trim((string) ($_POST['empresa'] ?? '')) !== '') {
    responder(200, ['ok' => true, 'mensagem' => 'Mensagem enviada!']);
}

$campos = [
    'nome' => linha((string) ($_POST['nome'] ?? '')),
    'email' => linha((string) ($_POST['email'] ?? '')),
    'assunto' => linha((string) ($_POST['assunto'] ?? '')),
    'mensagem' => trim(str_replace(["\r\n", "\r"], "\n", (string) ($_POST['mensagem'] ?? ''))),
];
['nome' => $nome, 'email' => $email, 'assunto' => $assunto, 'mensagem' => $mensagem] = $campos;

$erros = [];
if ($nome === '') {
    $erros['nome'] = 'Informe o seu nome.';
}
if ($email === '') {
    $erros['email'] = 'Informe o seu e-mail.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $erros['email'] = 'Este e-mail não parece válido.';
}
if ($mensagem === '') {
    $erros['mensagem'] = 'Escreva a sua mensagem.';
}
foreach (LIMITES as $campo => $max) {
    if (!isset($erros[$campo]) && mb_strlen($campos[$campo]) > $max) {
        $erros[$campo] = "Use no máximo {$max} caracteres.";
    }
}
if ($erros) {
    responder(422, ['ok' => false, 'mensagem' => 'Confira os campos destacados.', 'erros' => $erros]);
}

$ip = $_SERVER['REMOTE_ADDR'] ?? '';
if (excedeuLimite($ip)) {
    responder(429, ['ok' => false, 'mensagem' => 'Recebemos várias mensagens seguidas. Aguarde alguns minutos e tente de novo.']);
}

$assunto = $assunto !== '' ? $assunto : 'Contato pelo site';
$corpo = implode("\n", [
    'Nova mensagem pelo formulário de contato do site.',
    '',
    "Nome: {$nome}",
    "E-mail: {$email}",
    "Assunto: {$assunto}",
    '',
    'Mensagem:',
    $mensagem,
    '',
    '---',
    'Data: ' . date('d/m/Y H:i') . ' (horário de Brasília)',
    'Página: ' . linha((string) ($_SERVER['HTTP_REFERER'] ?? '')),
    'Navegador: ' . linha((string) ($_SERVER['HTTP_USER_AGENT'] ?? '')),
    "IP: {$ip}",
]);

$enviado = mail(
    DESTINO,
    cabecalho("[Site] {$assunto} — {$nome}"),
    chunk_split(base64_encode(str_replace("\n", "\r\n", $corpo))),
    [
        'From' => cabecalho(NOME_REMETENTE) . ' <' . REMETENTE . '>',
        'Reply-To' => $email,
        'MIME-Version' => '1.0',
        'Content-Type' => 'text/plain; charset=UTF-8',
        'Content-Transfer-Encoding' => 'base64',
        'X-Mailer' => 'mistertech.com.br/contato',
    ]
);

if (!$enviado) {
    error_log('[contato] mail() falhou ao enviar para ' . DESTINO);
    responder(500, ['ok' => false, 'mensagem' => 'Não foi possível enviar agora. Tente de novo ou escreva para ' . DESTINO . '.']);
}

responder(200, ['ok' => true, 'mensagem' => 'Mensagem enviada! Responderemos no seu e-mail o quanto antes.']);
