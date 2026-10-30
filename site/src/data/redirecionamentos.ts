/**
 * URLs do site antigo (WordPress) que mudaram de endereço.
 * Cada uma vira uma página de redirecionamento (funciona em qualquer servidor
 * e respeita o `base`). Na Hostinger, o public/.htaccess responde 301 antes.
 * Ao mudar esta lista, atualize também o public/.htaccess.
 */
export const redirecionamentos: Record<string, string> = {
  essential: '/acessorios/',
  shop: '/acessorios/',
  'sem-categoria': '/acessorios/',
  'policita-de-trocas': '/politica-de-trocas/',
  'garantia-estendida': '/politica-de-trocas/#garantia',
  'quiosques-mistertech': '/onde-comprar/',
};
