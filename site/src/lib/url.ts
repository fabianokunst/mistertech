/**
 * Monta um caminho interno respeitando o `base` do Astro
 * ("/" em produção, "/mistertech" no GitHub Pages).
 *
 *   url('/contato/')  ->  '/contato/'  ou  '/mistertech/contato/'
 */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** URL absoluta (para canonical, Open Graph e dados estruturados). */
export function absoluteUrl(path: string, site: URL | undefined): string {
  const origin = site ?? new URL('https://mistertech.com.br');
  return new URL(url(path), origin).href;
}
