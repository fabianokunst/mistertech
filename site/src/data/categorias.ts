import type { IconName } from '../components/ui/icons';

export interface Categoria {
  slug: 'cabos' | 'carregadores' | 'kit-de-viagem' | 'perifericos';
  nome: string;
  descricao: string;
  titulo: string; // <title> da página
  icone: IconName;
  /** Produto cuja primeira foto representa a categoria. */
  capa: string;
}

export const categorias: Categoria[] = [
  {
    slug: 'cabos',
    nome: 'Cabos',
    descricao:
      'Cabos de 1,5 m com revestimento trançado para carregar e transferir dados. Versões Lightning com certificação MFi da Apple.',
    titulo: 'Cabos USB-C e Lightning',
    icone: 'cable',
    capa: 'cabo-usb-c-para-lightning',
  },
  {
    slug: 'carregadores',
    nome: 'Carregadores',
    descricao:
      'Carregamento rápido em casa e no carro, com Power Delivery e Quick Charge. Todos homologados pela Anatel.',
    titulo: 'Carregadores de parede e veicular',
    icone: 'plug-zap',
    capa: 'carregador-mistertech',
  },
  {
    slug: 'kit-de-viagem',
    nome: 'Kits de viagem',
    descricao:
      'Carregador de 30 W e cabo em um estojo rígido: tudo o que você precisa para carregar o celular fora de casa.',
    titulo: 'Kits de viagem',
    icone: 'luggage',
    capa: 'kit-de-viagem-lightning',
  },
  {
    slug: 'perifericos',
    nome: 'Periféricos',
    descricao:
      'Mouse e teclado com fio, confortáveis e silenciosos para trabalhar, estudar e jogar.',
    titulo: 'Mouse e teclado',
    icone: 'mouse',
    capa: 'mouse-com-fio-mistertech',
  },
];

export function getCategoria(slug: string): Categoria {
  const categoria = categorias.find((c) => c.slug === slug);
  if (!categoria) throw new Error(`Categoria desconhecida: ${slug}`);
  return categoria;
}
