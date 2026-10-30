import { getCollection, type CollectionEntry } from 'astro:content';
import { lojas, type Loja } from '../data/lojas';

export type Produto = CollectionEntry<'produtos'>;

/** Todos os produtos, na ordem definida no campo `ordem`. */
export async function getProdutos(): Promise<Produto[]> {
  const produtos = await getCollection('produtos');
  return produtos.sort((a, b) => a.data.ordem - b.data.ordem);
}

/** Lojas do produto: link direto quando cadastrado, senão a busca "mistertech". */
export function lojasDoProduto(produto: Produto): (Loja & { href: string })[] {
  return lojas.map((loja) => ({ ...loja, href: produto.data.lojas[loja.id] ?? loja.url }));
}

/** Produtos para "Veja também": mesma categoria primeiro, depois destaques. */
export function relacionados(produto: Produto, todos: Produto[], quantidade = 4): Produto[] {
  const outros = todos.filter((p) => p.id !== produto.id);
  const mesmaCategoria = outros.filter((p) => p.data.categoria === produto.data.categoria);
  const resto = outros
    .filter((p) => p.data.categoria !== produto.data.categoria)
    .sort((a, b) => Number(b.data.destaque) - Number(a.data.destaque));
  return [...mesmaCategoria, ...resto].slice(0, quantidade);
}

/** Texto usado pela busca do catálogo. */
export function textoDeBusca(produto: Produto, categoria: string): string {
  const { nome, nomeCompleto, resumo, destaques, referencia, codigo } = produto.data;
  return [nome, nomeCompleto, resumo, categoria, ...destaques, referencia, codigo]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}
