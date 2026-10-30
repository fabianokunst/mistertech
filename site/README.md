# Site Mistertech

Site institucional e catálogo da Mistertech, feito em [Astro](https://astro.build) e gerado como HTML estático.

- **Produção:** https://mistertech.com.br (Hostinger, base `/`)
- **Testes:** https://fabianokunst.github.io/mistertech/ (GitHub Pages, publicado a cada push em `site/**`)
- **Design system:** `/design-system/` no próprio site (fora do sitemap)

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera dist/
npm run check     # checagem de tipos
```

## Estrutura

```
src/
  content/produtos/<slug>/   um produto por pasta: index.md + fotos/
  data/                      textos e listas: site, categorias, lojas, FAQ, redirecionamentos
  styles/tokens.css          design tokens (cores, tipografia, espaço, movimento)
  styles/global.css          reset, elementos base e utilitários de layout
  components/ui/             Button, Badge, Icon, Field, Notice, FaqItem, Feature...
  components/product/        ProductCard, ProductGallery, Catalog, WhereToBuy...
  components/layout/         Header, Footer, Seo, CookieConsent, PageHeader
  pages/                     uma página por arquivo; [slug].astro gera produtos e categorias
public/.htaccess             redirecionamentos 301 e cache na Hostinger
```

## Editar o catálogo

**Adicionar um produto:** crie `src/content/produtos/<slug>/index.md` (copie um existente) e coloque as fotos em `fotos/`. O `slug` define a URL (`/<slug>/`). Campos principais:

| Campo | Para que serve |
|---|---|
| `categoria` | `cabos`, `carregadores`, `kit-de-viagem` ou `perifericos` |
| `ordem` | posição no catálogo |
| `destaque: true` | aparece em "Destaques" na home |
| `resumo` | uma frase: cards e meta description |
| `destaques` | até 4 etiquetas curtas (use aspas se tiver vírgula: `'1,5 m'`) |
| `selos` | `anatel` e/ou `mfi` |
| `imagens` | a primeira é a capa; escreva um `alt` que descreva a foto |
| `caracteristicas`, `tecnicas`, `dimensoes` | viram a ficha técnica |
| `lojas` | links diretos do produto em cada parceiro (opcional) |

O texto abaixo do `---` é a descrição em Markdown. O build valida os campos e avisa se faltar algo.

**Perguntas frequentes:** `src/data/faq.ts`. **Lojas parceiras:** `src/data/lojas.ts`. **E-mail, horário, garantia:** `src/data/site.ts`.

## Design system

- Componentes usam só tokens **semânticos** (`--color-text`, `--color-accent`...). Dentro de `.theme-dark` (seções pretas) ou `.theme-accent` (seções amarelas) os mesmos componentes se adaptam sozinhos.
- Amarelo `--yellow-500` (#FDC300) é para fundos, botões e ícones. Para **texto** amarelo sobre fundo claro use `--color-text-accent`, por causa do contraste.
- Tipografia: **Geometria** nos títulos (fonte licenciada, em `src/assets/fonts/geometria/`; se faltar, o site usa **Outfit**) e **Lato** nos textos.
- Ícones: [Lucide](https://lucide.dev). Para adicionar um, importe em `src/components/ui/icons.ts`.
- Links internos sempre com `url('/caminho/')` (`src/lib/url.ts`), para funcionar com o `base` do GitHub Pages.

## Integrações

- **SAP Emarsys:** só carrega depois que o visitante aceita os cookies, e só quando o site é compilado para `mistertech.com.br` (no GitHub Pages não carrega, para não misturar visitas de teste com as reais). Eventos `menu_click`, `product_click` (com o ID do produto no WordPress antigo, campo `idWordpress`) e `contato_formulario` mantêm os nomes do site antigo; o do formulário leva só o assunto, sem nome, e-mail ou mensagem.
- **Cookies e privacidade (LGPD):** `components/layout/CookieConsent.astro` e `/politica-de-privacidade/`. A escolha fica no `localStorage` (`mt-consentimento`) com data e versão; vale 12 meses ou até a versão mudar. Sem consentimento válido, os dados `scarab*` da Emarsys são apagados do navegador. Ao mudar a política, atualize `site.privacidade` em `src/data/site.ts` (`atualizadaEm` e, se mudar o uso de cookies, `versao`). **Antes de publicar:** preencha `site.privacidade.encarregado` (o build avisa enquanto estiver vazio).
- **Formulário de contato:** como no site antigo (Elementor), o envio vai para o servidor: `public/api/contato.php` valida os campos e manda o e-mail para `contato@mistertech.com.br` pelo `mail()` da Hostinger, com Reply-To no e-mail do visitante. Tem armadilha para robôs e limite de 5 envios por IP a cada 10 minutos. Destinatário e remetente ficam no topo do arquivo. Onde não há PHP (GitHub Pages, `npm run dev`), o formulário abre o e-mail do visitante com a mensagem pronta. Para testar o envio localmente: `npm run build` e a configuração `site-php` de `.claude/launch.json` (`php -S` em `dist/`, mandando para um SMTP de teste em `127.0.0.1:2525`).
- **URLs antigas:** `src/data/redirecionamentos.ts` (páginas de redirecionamento) e `public/.htaccess` (301 na Hostinger). Mantenha os dois em sincronia.
