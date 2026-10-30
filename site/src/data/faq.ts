import { site } from './site';

/**
 * Perguntas frequentes, agrupadas por assunto.
 * As respostas são HTML simples (renderizadas com set:html) e também
 * alimentam o JSON-LD FAQPage da página de suporte.
 */
export interface Pergunta {
  pergunta: string;
  resposta: string;
}

export interface GrupoFaq {
  id: string;
  titulo: string;
  perguntas: Pergunta[];
}

const email = `<a href="mailto:${site.email}">${site.email}</a>`;

export const faq: GrupoFaq[] = [
  {
    id: 'compras',
    titulo: 'Compras',
    perguntas: [
      {
        pergunta: 'Consigo comprar os produtos Mistertech em loja física?',
        resposta:
          '<p>Sim. Os produtos Mistertech estão nas lojas iPlace e taQi e em revendedores autorizados. Para encontrar a loja mais próxima, use o link “Nossas lojas” no site de cada parceiro.</p>',
      },
      {
        pergunta: 'Por que sou direcionado para outro site na hora da compra?',
        resposta:
          '<p>O site da Mistertech é um catálogo: aqui você conhece os produtos e, na hora de comprar, é levado ao site de um parceiro oficial — iPlace, taQi, iPlace Corporativo ou taQi Empresas.</p>',
      },
      {
        pergunta: 'Posso fazer o pedido online e retirar na loja?',
        resposta:
          '<p>Sim. Escolha a opção de retirada na hora da compra no site do parceiro. Confira se ela está disponível para o produto escolhido.</p>',
      },
      {
        pergunta: 'Esses sites são confiáveis?',
        resposta:
          '<p>Sim. Todos os sites parceiros são autorizados a vender os produtos Mistertech e usam certificado digital SSL.</p>',
      },
      {
        pergunta: 'Como acompanho o meu pedido?',
        resposta:
          '<p>Entre na sua conta no site parceiro onde fez a compra e acesse “Meus pedidos”.</p>',
      },
    ],
  },
  {
    id: 'entrega',
    titulo: 'Entrega e recebimento',
    perguntas: [
      {
        pergunta: 'O que devo fazer no momento do recebimento?',
        resposta: `<p>Confira os itens do pedido e as quantidades. Se houver qualquer divergência, recuse a entrega e fale com a nossa central de atendimento pelo e-mail ${email}.</p>`,
      },
      {
        pergunta: 'Em quais casos posso recusar o recebimento?',
        resposta: `<p>Você pode recusar o produto se acontecer qualquer uma destas situações:</p><ol><li>Embalagem aberta ou danificada;</li><li>Produto danificado;</li><li>Produto diferente do pedido;</li><li>Falta de acessórios.</li></ol><p>Se mesmo assim receber o produto, fale com a gente em até 72 horas pelo e-mail ${email}.</p>`,
      },
      {
        pergunta: 'E se não houver ninguém para receber o pedido?',
        resposta: `<p>A transportadora faz até três tentativas de entrega no endereço informado, e é preciso ter uma pessoa maior de 18 anos para receber e assinar o comprovante. Depois de três tentativas sem sucesso, o pedido volta para o centro de distribuição.</p><p>Para uma nova tentativa, é preciso confirmar o endereço; o prazo de reenvio é o mesmo informado na compra, contado a partir dessa confirmação. Dados incorretos ou incompletos podem atrasar a entrega — para atualizar o cadastro, escreva para ${email}.</p>`,
      },
      {
        pergunta: 'O pedido consta como entregue, mas não recebi. E agora?',
        resposta: `<p>Antes de tudo:</p><ol><li>Veja se outra pessoa no seu endereço recebeu a encomenda.</li><li>Confira a portaria, a recepção ou outro ponto de recebimento do endereço.</li><li>Aguarde algumas horas: às vezes o status de entrega é atualizado antes da entrega.</li></ol><p>Se ainda assim não encontrar, fale com a central de atendimento do site parceiro ou escreva para ${email}.</p>`,
      },
    ],
  },
  {
    id: 'trocas',
    titulo: 'Trocas, devoluções e garantia',
    perguntas: [
      {
        pergunta: 'Qual é o prazo de garantia dos produtos?',
        resposta: `<p>Todos os produtos Mistertech têm <strong>${site.garantia.total} meses de garantia</strong> contra defeitos de fabricação (${site.garantia.legal} meses de garantia legal + ${site.garantia.estendida} meses de garantia estendida), contados a partir da emissão da nota fiscal. Não é preciso fazer cadastro.</p>`,
      },
      {
        pergunta: 'Como solicito a troca de um produto na garantia?',
        resposta: `<p>Leve o produto à loja onde ele foi comprado ou escreva para ${email}. Tenha em mãos o produto e a nota fiscal (ou cupom fiscal). Podemos pedir:</p><ol><li>Dados do titular da compra (como nome, CPF e RG);</li><li>Endereço, telefone e e-mail do titular;</li><li>Número do pedido ou da nota fiscal;</li><li>O motivo da troca.</li></ol><p>A Mistertech tem até 30 dias corridos, a partir do recebimento do produto, para resolver a solicitação.</p>`,
      },
      {
        pergunta: 'O produto chegou com defeito. O que faço?',
        resposta: `<p>Comunique a troca à central de atendimento em até 7 dias corridos a partir do recebimento, pelo e-mail ${email}. Depois desse prazo, o atendimento segue os termos de garantia do produto.</p><p>Para a devolução, o produto deve estar na embalagem original, com nota fiscal, manual e todos os acessórios. Todos os produtos passam por análise e são devolvidos ao cliente se não houver defeito, se houver sinais de desgaste ou se as orientações do manual de garantia não tiverem sido seguidas.</p>`,
      },
      {
        pergunta: 'Já se passaram mais de 7 dias e o produto apresentou defeito. E agora?',
        resposta: `<p>Escreva para ${email}. A nossa equipe vai orientar o atendimento dentro do período de garantia.</p>`,
      },
      {
        pergunta: 'Como devolvo um produto por arrependimento?',
        resposta:
          '<p>Você pode desistir da compra em até 7 dias corridos a partir do recebimento. O produto deve voltar na embalagem original, sem sinais de uso, com o lacre intacto e acompanhado de nota fiscal, manual e todos os acessórios.</p>',
      },
    ],
  },
  {
    id: 'produtos',
    titulo: 'Produtos',
    perguntas: [
      {
        pergunta: 'Todos os produtos são homologados pela Anatel?',
        resposta:
          '<p>Sim, todos os produtos são homologados. Confira o selo na embalagem ou no próprio produto.</p>',
      },
    ],
  },
];
