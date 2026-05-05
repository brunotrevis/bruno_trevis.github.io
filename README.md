# ERICtrevisan — Site oficial

Site de fotografia e filme de casamento do Eric Trevisan. HTML, CSS e JavaScript puros, sem dependências de build. Pronto pra subir em qualquer hospedagem estática (Netlify Drop, Vercel, GitHub Pages).

## Estrutura

```
projeto-oficial/
├── index.html              # estrutura completa do site
├── css/styles.css          # paleta, tipografia, layout, animações
├── js/main.js              # sliders, menu mobile, reveal on scroll
└── assets/
    ├── logo.png            # wordmark "ERICtrevisan" cream
    ├── icon-tr.png         # ícone "tr" verde petróleo (logo do header no topo)
    ├── eric.jpg            # foto do Eric (seção Sobre)
    ├── pattern.png         # pattern cream pra fundos petróleo
    ├── pattern-dark.png    # pattern petróleo pra fundos cream
    └── fotos/
        ├── hero-01.jpg     # abraço íntimo (slider hero)
        ├── hero-02.jpg     # noiva com véu e arco floral
        ├── hero-03.jpg     # saída com confete em P&B
        └── foto-01.jpg ... foto-09.jpg   # galeria (modo retrato)
```

## Identidade visual

**Paleta**

| Cor | Hex | Uso |
|---|---|---|
| Verde petróleo | `#122E33` | cor protagonista, fundo dominante, texto sobre cream |
| Petróleo soft | `#1F4148` | seções intermediárias (Adicionais, Sobre) |
| Petróleo deep | `#0A1F23` | footer |
| Cream | `#CEC1B2` | acento, base do logo |
| Cream-light | `#E8DFD2` | texto principal sobre petróleo |
| Cream-soft | `#F5F0E8` | seções claras de respiro (Filme, Depoimentos) |
| White | `#FFFFFF` | cards de contraste |
| Dourado | `#B8956A` | acento premium (badge "Mais escolhido", ornaments) |
| Dourado soft | `#D4B896` | acento dourado em fundos escuros |

**Tipografia**

- Títulos: Playfair Display (serif editorial)
- Corpo: Inter (sans-serif)
- Logo wordmark: Italiana / Playfair (decorativa)

## Conteúdo do site

Ordem das seções:

1. **Hero** — slideshow de 3 fotos com cross-fade, H1 "A sua história / de amor" e CTA "Solicitar orçamento"
2. **Galeria** — slider editorial em proporção retrato com 9 fotos
3. **Fotografia / Pacotes** — Basic R$ 2.500, Standard R$ 3.500 (Mais escolhido), Premium R$ 4.700
4. **Filme** — vídeo + lista de entregas + R$ 3.200,00
5. **Serviços Adicionais** — Same Day Edit / Drone / Cerimônia na Íntegra / Love Story (vinculados ao Filme)
6. **Depoimentos** — 2 depoimentos reais de noivas
7. **Sobre** — bio do Eric com retrato
8. **Contato** — WhatsApp, e-mail, Instagram

## Animações implementadas

- **Slideshow do hero** com cross-fade de 1.8s + Ken Burns sutil (zoom lento de 1.04 → 1.0 durante 8s)
- **Galeria editorial** com cross-fade entre fotos (auto-avanço a cada 6.5s, prev/next manuais, dots)
- **Reveal on scroll** em todos os elementos via Intersection Observer (mobile + desktop)
- **Header** com blur e fundo petróleo translúcido ao rolar
- **Logo dinâmico**: ícone TR petróleo no topo (alto contraste sobre as fotos) → wordmark cream cross-fade ao rolar
- **Box hover** (Pacotes + Adicionais): lift de 10px, scale 1.012, borda dourada sutil
- **Botões** com shimmer dourado, lift e letter-spacing animado
- **Price-tag (Investimento)** com mesma animação shimmer dos botões
- **Paralaxe sutil** no hero (8% da velocidade de scroll)
- **Pattern de fundo** (ícone "tr" repetido) em opacidade muito baixa nas seções sólidas

## Mídias

**Fotos**: locais, otimizadas (1500px lado maior pra retrato, 1900px pra horizontal, JPG quality 82, progressive). Total ~2.7MB.

**Vídeo**: hospedado na Cloudinary, único vídeo demo:
```
https://res.cloudinary.com/dcjapqz1r/video/upload/v1777948241/VIDEO_DEMO_z2qhfs.mp4
```

## Contato (já preenchido)

- WhatsApp: (42) 99861-7310 → `https://wa.me/5542998617310`
- E-mail: `eric.henriquetrevisan@gmail.com`
- Instagram: `@eric.trevisan` → `https://www.instagram.com/eric.trevisan/`

## Como editar

| O que | Onde |
|---|---|
| Trocar telefone, e-mail ou Instagram | `index.html` → seção `<section class="section contato">` |
| Editar bio do Eric | `index.html` → seção `<section class="section sobre">` |
| Trocar depoimentos | `index.html` → seção `<section class="section depoimentos">` |
| Mudar preços | `index.html` → procurar `R$` em pacotes, filme e adicionais |
| Substituir foto da galeria | colocar nova foto em `assets/fotos/` e atualizar o `<img src>` correspondente |
| Trocar paleta de cores | `css/styles.css` → bloco `:root` no topo |
| Ajustar intervalo do slideshow | `js/main.js` → `interval: 6500` (em ms) |

## Como visualizar localmente

Duplo clique no `index.html` ou abra com seu navegador. Tudo funciona sem servidor (file:// roda direto).

## Como subir o site

**Opção mais rápida — Netlify Drop**

1. Vá em <https://app.netlify.com/drop>
2. Arraste a pasta `projeto-oficial/` inteira pra área de upload
3. Site no ar com URL `*.netlify.app` em segundos
4. Pode adicionar domínio próprio depois nas configurações

**Vercel**

1. <https://vercel.com> → New Project → Import folder
2. Mesmo princípio

**GitHub Pages**

1. Suba a pasta num repositório
2. Settings → Pages → Source: deploy from branch → main / root

## Acessibilidade

- Animações respeitam `prefers-reduced-motion` (usuários com preferência por menos movimento veem a versão sem animações de scroll/slide)
- Todas as imagens têm `alt` descritivo
- Botões e links têm `aria-label` quando necessário
- Estrutura semântica com `header`, `main`, `section`, `footer`, `nav`

## Performance

- Total de assets ~2.7MB (fotos + ícones)
- Vídeo do Filme servido via Cloudinary (CDN)
- Imagens com `loading="lazy"` na galeria
- CSS e JS minificáveis se quiser otimizar mais (não obrigatório)
- Sliders pausam quando saem da viewport (poupa CPU/bateria)

## Browsers suportados

Chrome, Safari, Firefox, Edge — versões dos últimos 2 anos. CSS usa `aspect-ratio`, `backdrop-filter`, custom properties e `clamp()` (todos com bom suporte moderno).
