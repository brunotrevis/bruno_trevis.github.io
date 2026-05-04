# ERICtrevisan — Site

Site de fotografia e filme de casamento, em Português, com paleta verde petróleo (`#122E33`) protagonista, cream (`#CEC1B2`) como acento e dourado (`#B8956A`) para detalhes premium.

## Estrutura

```
erictrevisan/
├── index.html
├── css/styles.css
├── js/main.js
└── assets/
    ├── logo.png
    ├── eric.jpg
    ├── fotos/    (15 fotos)
    └── videos/   (4 vídeos)
```

## Antes de subir — preencher os placeholders no `index.html`

Procure e substitua nesta seção `<section class="section contato">`:

| Onde | Trocar por |
|---|---|
| `https://wa.me/55SEUNUMERO` | número real com DDI/DDD, ex: `https://wa.me/5511999998888` |
| `mailto:contato@erictrevisan.com` | e-mail real do Eric |
| `https://instagram.com/erictrevisan` | handle real do Instagram |

## Filme completo de 15 minutos

O arquivo do filme completo NÃO entra como arquivo no site (muito pesado). Sobe ele para o **Vimeo** (recomendado) e adicione um botão "Assistir filme completo" na seção `Filme`. Avisa que eu adiciono o embed.

## Como visualizar localmente

Duplo clique em `index.html` ou abre via `Open With > Chrome/Safari`. Os vídeos da galeria têm autoplay sem som (estilo cinema).

## Deploy gratuito

**Opção mais rápida — Netlify Drop:**
1. Acessa <https://app.netlify.com/drop>
2. Arrasta a pasta `erictrevisan/` inteira pra área de upload
3. Pronto — site no ar com URL `*.netlify.app`. Pode adicionar domínio próprio depois.

**Vercel:**
1. <https://vercel.com> > New Project > Import folder
2. Mesmo princípio.

## Notas

- Pasta `SITE ERIC/` (cópia dos originais que você mandou) pode ser deletada — os arquivos ativos já estão em `assets/`
- Animações de scroll funcionam em mobile e desktop (Intersection Observer)
- Respeita `prefers-reduced-motion` para acessibilidade
- Todos os textos (bio do Eric, depoimentos, tagline) são editáveis direto no `index.html` quando quiser ajustar
