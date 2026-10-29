# Levantamento — mistertech.com.br

Data: 29/10/2026 · Fonte: site público, sitemap (Yoast) e APIs públicas do WordPress/WooCommerce.

Mistertech é uma marca de acessórios do Grupo Herval (CNPJ 89.237.911/0001-40). O site é **institucional + catálogo**: não vende. As compras são direcionadas para iPlace, iPlace Corporativo, taQi e taQi Empresas.

---

## 1. Páginas

| # | Página | URL | No menu? | Conteúdo |
|---|--------|-----|----------|----------|
| 1 | Home | `/` | — | Banner (1 slide, versões desktop e mobile, leva para `/essential/`) + bloco "Vantagens de ser Mistertech" com 4 itens e ícones |
| 2 | Acessórios ("essencial") | `/essential/` | Sim | Texto de introdução, campo de busca e grade com os 10 produtos |
| 3 | Contato | `/contato/` | Sim | E-mail contato@mistertech.com.br, horário (seg–sex 8h–18h, sáb 9h–18h) e formulário (nome, e-mail, mensagem) |
| 4 | Suporte e trocas | `/suporte-e-trocas/` | Sim | FAQ com 15 perguntas (accordion) + links para troca e garantia estendida |
| 5 | Onde comprar | `/onde-comprar/` | **Não** | 4 logos com links: iPlace, iPlace Corp, taQi, taQi Empresas (busca "mistertech") |
| 6 | Política de trocas | `/policita-de-trocas/` | Não | Texto curto: levar à loja ou escrever para o e-mail de contato |
| 7 | Garantia estendida | `/garantia-estendida/` | Não | Aviso: garantia de 12 meses automática a partir da nota fiscal, sem cadastro |

**Páginas geradas pelo WooCommerce:**
- `/shop/` (loja)
- Categorias: `/cabos/`, `/carregadores/`, `/kit-de-viagem/`, `/perifericos/`, `/sem-categoria/`
- 10 páginas de produto (lista abaixo)

**Cabeçalho:** logo, slogan "É seguro para você e bom para o mundo." e menu (Acessórios, Contato, Suporte e trocas).
**Rodapé:** Facebook, Instagram e a linha "Mistertech é uma marca do Grupo Herval (CNPJ …)".

### FAQ (Suporte e trocas)
1. Consigo adquirir os produtos Mistertech em loja física?
2. Por que sou direcionado para outro site na hora da compra?
3. O que ocorre se não tiver ninguém no local para receber meu pedido?
4. O que devo fazer se meu pedido consta como entregue, mas não recebi?
5. Como solicitar a troca de um produto dentro do período de garantia?
6. O que faço se passaram mais 7 dias úteis e meu produto apresentou defeito?
7. Eu posso fazer meu pedido online e em seguida retirar meu(s) item(s) na loja?
8. Como faço para devolver um produto por arrependimento/desistência?
9. Como verifico o andamento do meu pedido?
10. Qual o prazo de garantia dos produtos?
11. O que devo fazer no ato do recebimento?
12. O que faço se meu aparelho chega com defeito?
13. O que posso considerar um defeito passível de devolução?
14. Todos os produtos são homologados pela ANATEL?
15. Esses sites são confiáveis?

---

## 2. Produtos (10)

Todos estão com preço R$ 0, "não compráveis" e sem SKU: o WooCommerce funciona só como catálogo. Os códigos internos (Cód./Ref.) estão escritos no texto da descrição, por exemplo: Carregador 222097 / MTA30W2P, Mouse 222651 / MT4MFIO, Teclado 222652 / MT4TFIO.

| Produto | URL | Categoria | Fotos |
|---------|-----|-----------|-------|
| Cabo USB-A para Lightning (1,5 m, branco, MFi) | `/cabo-usb-a-para-lightning/` | Cabos | 4 |
| Cabo USB-A para USB-C (1,5 m, preto) | `/cabo-usb-a-para-usb-c/` | Cabos | 4 |
| Cabo USB-C para Lightning (1,5 m, branco, MFi) | `/cabo-usb-c-para-lightning/` | Cabos | 5 |
| Cabo USB-C para USB-C (1,5 m, preto) | `/cabo-usb-c-para-usb-c/` | Cabos, Carregadores, Kit de viagem ⚠️ | 4 |
| Carregador Mistertech (parede 30W, USB-C PD + USB-A QC) | `/carregador-mistertech/` | Carregadores | 4 |
| Carregador Veicular (2 saídas, PD + QC) | `/carregador-veicular/` | Carregadores | 4 |
| Kit de Viagem Lightning (carregador 30W + cabo + estojo) | `/kit-de-viagem-lightning/` | Kit de viagem | 4 |
| Kit Viagem USB-C (carregador 30W + cabo + estojo) | `/kit-viagem-usb-c-mistertech/` | Kit de viagem | 4 |
| Mouse com fio (até 3600 DPI) | `/mouse-com-fio-mistertech/` | Periféricos | 4 |
| Teclado com fio (slim, multimídia) | `/teclado-com-fio/` | Periféricos | 3 |

**Página de produto:** fotos (galeria com zoom), descrição curta, botão **"Compre em nossos quiosques"** e aba "Descrição" (texto completo com características e especificações).

---

## 3. Tecnologia e serviços

### Hospedagem e domínio
| Item | Valor |
|------|-------|
| Hospedagem | **Hostinger** (servidor LiteSpeed, painel hPanel, CDN Hostinger em `www`) |
| PHP | 8.5 |
| IP | 93.127.209.248 |
| DNS | Servidores do Grupo Herval (`a/b.grupoherval.com.br`) |
| E-mail | **Microsoft 365 / Outlook** (MX `mistertech-com-br.mail.protection.outlook.com`) |

### CMS e plugins (WordPress 7.1.4)
| Plugin / tema | Uso |
|---------------|-----|
| Tema Hello Elementor + **Elementor 4.3.5 / Elementor Pro 4.2.3** | Montagem de todas as páginas, cabeçalho, rodapé, banner e formulário de contato |
| **WooCommerce 11.2** | Catálogo de produtos e categorias (sem venda) |
| **Yoast SEO** | Títulos, descrições, Open Graph e sitemap |
| Wordfence | Segurança / firewall |
| Jetpack | Recursos diversos do WordPress.com |
| WPMU DEV Dashboard | Gestão / manutenção |
| MetaSlider | Slider (instalado; o banner atual é do Elementor) |
| Forminator | Formulários (instalado; o contato usa o formulário do Elementor) |
| E2Pdf | Geração de PDF (provavelmente o antigo certificado de garantia estendida) |
| Duplicate Post | Duplicar páginas no painel |

### Marketing e rastreamento
| Serviço | O que faz |
|---------|-----------|
| **SAP Emarsys** (scarabresearch.com) | Rastreamento de visitas, recomendação de produtos e campanhas web (web channel). Merchant ID `1E3705BDD586344B` |
| WooCommerce Order Attribution (Sourcebuster) | Cookies `sbjs_*` com a origem da visita |
| Google Analytics / GTM / Meta Pixel | **Não encontrados** |
| reCAPTCHA no formulário | **Não tem** |

### Visual
- Cores: amarelo (cabeçalho e botões), preto e branco.
- Fontes previstas: **Geometria** (títulos) e **Lato** (textos), mas não carregam (ver problemas).
- Ícones: Font Awesome e eicons.
- Biblioteca de mídia: 180 arquivos. Nenhum post de blog.

### Redes sociais
- Facebook: https://www.facebook.com/mistertechoficial/
- Instagram: https://www.instagram.com/mistertechbr/

---

## 4. Problemas encontrados (corrigir no site novo)

1. **Botão "Compre em nossos quiosques" dá 404.** Todas as páginas de produto apontam para `/quiosques-mistertech/`, que não existe. Hoje a página de produto não leva a nenhuma loja.
2. **Fontes quebradas.** Geometria e Lato são carregadas de `www2.mistertech.com.br`, que não existe no DNS. O site aparece em Helvetica/Times no lugar da fonte da marca.
3. **"Onde comprar" fora do menu**, apesar de ser a página que leva à venda.
4. **Cabo USB-C para USB-C em 3 categorias** (Cabos, Carregadores, Kit de viagem).
5. **Categoria "Sem categoria" pública** e indexada no sitemap.
6. **Slug com erro de digitação:** `/policita-de-trocas/`.
7. **Páginas soltas e repetidas:** "Política de trocas" e "Garantia estendida" repetem o que está no FAQ; a de garantia estendida ficou obsoleta.
8. Produtos sem SKU nem preço: os códigos ficam só no texto da descrição.

---

## 5. Para a migração

- **URLs a manter ou redirecionar (SEO):** as 7 páginas, `/shop/`, as 5 categorias e os 10 produtos.
- **Conteúdo a exportar:** textos das páginas, FAQ, descrições completas dos produtos e as ~40 fotos de produto + banners e ícones. Tudo isso pode ser extraído pela API pública (`/wp-json/wc/store/v1/products` e `/wp-json/wp/v2/pages`).
- **Integrações a decidir:** Emarsys (manter o script?), formulário de contato (para onde vão as mensagens hoje? configurado no Elementor), links para iPlace/taQi.
- **Arquivos de fonte:** obter Geometria e Lato originais (licença da Geometria é paga).
