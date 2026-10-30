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
   * Endereço que recebe o formulário de contato (POST com FormData).
   * Vazio: o formulário abre o aplicativo de e-mail do visitante com a mensagem pronta.
   */
  formularioContato: '',

  /** SAP Emarsys (Scarab). Só carrega depois que o visitante aceita os cookies. */
  emarsys: { merchantId: '1E3705BDD586344B' },
} as const;

export const navegacao = [
  { href: '/acessorios/', label: 'Acessórios' },
  { href: '/onde-comprar/', label: 'Onde comprar' },
  { href: '/suporte-e-trocas/', label: 'Suporte e trocas' },
  { href: '/contato/', label: 'Contato' },
] as const;
