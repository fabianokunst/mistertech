import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Catálogo: cada produto é uma pasta em src/content/produtos/<slug>/
 * com um index.md (texto + ficha técnica) e as fotos em fotos/.
 */
const produtos = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/produtos' }),
  schema: ({ image }) =>
    z.object({
      /** Define a URL do produto: /<slug>/ (igual ao site antigo). */
      slug: z.string(),
      /** ID do produto no WordPress antigo: vai no evento product_click da Emarsys, para manter o histórico. */
      idWordpress: z.number().optional(),
      nome: z.string(),
      nomeCompleto: z.string(),
      categoria: z.enum(['cabos', 'carregadores', 'kit-de-viagem', 'perifericos']),
      ordem: z.number(),
      /** Aparece em "Destaques" na página inicial. */
      destaque: z.boolean().default(false),
      /** Uma frase: usada nos cards e na meta description. */
      resumo: z.string(),
      /** Até 4 características curtas mostradas como etiquetas. */
      destaques: z.array(z.string()).max(4).default([]),
      selos: z.array(z.enum(['anatel', 'mfi'])).default([]),
      codigo: z.string().optional(),
      referencia: z.string().optional(),
      imagens: z.array(z.object({ src: image(), alt: z.string() })).min(1),
      caracteristicas: z.record(z.string(), z.string()).default({}),
      especificacoes: z.array(z.string()).default([]),
      tecnicas: z.record(z.string(), z.string()).default({}),
      modoDeUso: z.array(z.string()).default([]),
      compatibilidade: z.string().optional(),
      inclusos: z.array(z.string()).default([]),
      dimensoes: z.record(z.string(), z.string()).default({}),
      /** Links diretos para o produto em cada loja (opcional; o padrão é a busca "mistertech"). */
      lojas: z
        .object({
          iplace: z.url().optional(),
          taqi: z.url().optional(),
          'iplace-corp': z.url().optional(),
          'taqi-empresas': z.url().optional(),
        })
        .default({}),
    }),
});

export const collections = { produtos };
