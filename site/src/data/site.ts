/** Dados institucionais usados em todo o site. */
export const site = {
  nome: 'Mistertech',
  slogan: 'É seguro para você e bom para o mundo.',
  descricao:
    'Carregadores, cabos, kits de viagem e periféricos Mistertech: produtos homologados, com design pensado para o dia a dia e 12 meses de garantia.',
  email: 'contato@mistertech.com.br',
  horario: [
    { dias: 'Segunda a sexta', horas: '8h às 18h' },
    { dias: 'Sábado', horas: '9h às 18h' },
  ],
  grupo: { nome: 'Grupo Herval', cnpj: '89.237.911/0001-40' },
  social: {
    instagram: 'https://www.instagram.com/mistertechbr/',
    facebook: 'https://www.facebook.com/mistertechoficial/',
  },
  garantia: { total: 12, legal: 3, estendida: 9 },

  /**
   * Endereço que recebe o formulário de contato (POST com FormData): public/api/contato.php,
   * que envia o e-mail pela Hostinger. Onde não há PHP (GitHub Pages, `npm run dev`) ou se
   * ficar vazio, o formulário abre o aplicativo de e-mail do visitante com a mensagem pronta.
   */
  formularioContato: '/api/contato.php',

  /**
   * SAP Emarsys (Scarab). Só carrega depois que o visitante aceita os cookies e só no
   * domínio de produção: o GitHub Pages (testes) não manda visitas para a conta real.
   */
  emarsys: { merchantId: '1E3705BDD586344B', dominio: 'mistertech.com.br' },

  /** Política de privacidade (/politica-de-privacidade/). */
  privacidade: {
    /**
     * Aumente quando a política ou as ferramentas que usam cookies mudarem:
     * o aviso de cookies volta a aparecer para todo mundo.
     */
    versao: 1,
    atualizadaEm: '2026-10-30',
    /** Encarregado pelo tratamento de dados (DPO) do Grupo Herval. Obrigatório pela LGPD (art. 41). */
    encarregado: { nome: '', email: '' },
  },
} as const;

export const navegacao = [
  { href: '/acessorios/', label: 'Acessórios' },
  { href: '/onde-comprar/', label: 'Onde comprar' },
  { href: '/suporte-e-trocas/', label: 'Suporte e trocas' },
  { href: '/contato/', label: 'Contato' },
] as const;
