import type { ImageMetadata } from 'astro';
import iplace from '../assets/parceiros/iplace.png';
import iplaceCorp from '../assets/parceiros/iplace-corp.png';
import taqi from '../assets/parceiros/taqi.png';
import taqiEmpresas from '../assets/parceiros/taqi-empresas.png';

export interface Loja {
  id: 'iplace' | 'taqi' | 'iplace-corp' | 'taqi-empresas';
  nome: string;
  publico: 'Para você' | 'Para empresas';
  descricao: string;
  /** Busca por "mistertech" no site do parceiro (link padrão). */
  url: string;
  logo: ImageMetadata;
}

export const lojas: Loja[] = [
  {
    id: 'iplace',
    nome: 'iPlace',
    publico: 'Para você',
    descricao: 'Revenda Apple Premium, com lojas físicas e loja online.',
    url: 'https://www.iplace.com.br/searchresults?Ntt=mistertech&Rdm=463&searchType=simple&type=search',
    logo: iplace,
  },
  {
    id: 'taqi',
    nome: 'taQi',
    publico: 'Para você',
    descricao: 'Lojas físicas e loja online com a linha Mistertech.',
    url: 'https://www.taqi.com.br/searchresults?Ntt=mistertech&Nty=1&No=0&Nrpp=12&Rdm=504&searchType=simple&type=search',
    logo: taqi,
  },
  {
    id: 'iplace-corp',
    nome: 'iPlace Corporativo',
    publico: 'Para empresas',
    descricao: 'Canal da iPlace para compras de empresas.',
    url: 'https://www.iplacecorp.com.br/',
    logo: iplaceCorp,
  },
  {
    id: 'taqi-empresas',
    nome: 'taQi Empresas',
    publico: 'Para empresas',
    descricao: 'Canal da taQi para compras de empresas.',
    url: 'https://www.taqiempresas.com.br/',
    logo: taqiEmpresas,
  },
];
