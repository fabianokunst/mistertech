const escapar = (t: string) =>
  t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Impede quebras de linha no meio de termos técnicos ("USB-C", "30 W",
 * "1,5 m"). Retorna HTML seguro para usar com set:html.
 */
export function semQuebras(texto: string): string {
  return escapar(texto).replace(
    /(USB-[AC]|\d+(?:[.,]\d+)?\s(?:W|m|A|V|g|cm|Mbps|DPI)\b)/g,
    '<span class="nowrap">$1</span>',
  );
}
