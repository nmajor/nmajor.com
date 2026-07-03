// Build-time OpenGraph card renderer for nmajor.com.
//
// satori (element tree -> SVG) + @resvg/resvg-js (SVG -> PNG), run ONLY at
// `astro build` from the Astro static endpoints under src/pages/og/. This never
// runs in the Worker/edge runtime (@resvg/resvg-js is a native binary), exactly
// like the appliedartificialintelligence.org sibling this pattern is copied from.
//
// Design = direction 4a: a paper or ink ground, an Archivo Black title, a mono
// vermillion eyebrow, the red "N" mark, and a Nicholas Major / nmajor.com footer.
// Paper cards carry the brand + essays; the ink (black) card is the newsletter,
// echoing the home page's black subscribe block.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

// Fonts are read relative to process.cwd() (the app/ package dir), NOT
// import.meta.url: this module is bundled into dist/chunks at build, where
// import.meta.url can't locate the files. The build always runs with cwd = app/.
const font = (file: string) => readFileSync(join(process.cwd(), 'src/og/fonts', file));
const archivoBlack = font('ArchivoBlack-Regular.ttf');
const plexMono = font('IBMPlexMono-Medium.ttf');

const PAPER = '#faf9f5';
const INK = '#14120f';
const ACCENT = '#e5391f';

type Theme = 'paper' | 'ink';
export interface OgOptions {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  theme?: Theme;
}

// satori element-tree helpers. Every div with children needs an explicit
// display:flex, so the helper bakes it in.
const box = (style: Record<string, unknown>, children: unknown = '') => ({
  type: 'div',
  props: { style: { display: 'flex', ...style }, children },
});

// Keep the subtitle to ~2 lines so it never collides with the footer byline.
function clampText(s: string, max: number): string {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  const trimmed = lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut;
  return trimmed.replace(/[\s.,;:]+$/, '') + '…';
}

// Fit the title to the card: fewer, bigger words up top; long titles step down.
function titleSize(title: string): number {
  const n = title.length;
  if (n > 82) return 52;
  if (n > 60) return 60;
  if (n > 40) return 70;
  return 82;
}

// The red "N" mark: a rounded vermillion tile with a white Archivo Black N. A
// faithful, type-rendered stand-in for public/logo.svg (no image embedding).
function mark(size: number) {
  return box(
    {
      width: size,
      height: size,
      borderRadius: Math.round(size * 0.25),
      backgroundColor: ACCENT,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box(
      { fontFamily: 'Archivo Black', fontSize: Math.round(size * 0.6), color: '#ffffff', marginTop: -Math.round(size * 0.03) },
      'N',
    ),
  );
}

export async function renderOgPng({ eyebrow, title, subtitle, theme = 'paper' }: OgOptions): Promise<Buffer> {
  const isInk = theme === 'ink';
  const bg = isInk ? INK : PAPER;
  const titleColor = isInk ? PAPER : INK;
  const subColor = isInk ? '#a9a396' : '#5a544a';
  const urlColor = isInk ? '#8f887a' : '#9a9284';

  const topChildren: unknown[] = [box({ marginBottom: 40 }, mark(96))];
  if (eyebrow) {
    topChildren.push(
      box({ fontFamily: 'IBM Plex Mono', fontSize: 24, letterSpacing: 4, color: ACCENT, marginBottom: 22 }, eyebrow.toUpperCase()),
    );
  }
  topChildren.push(
    box({ fontFamily: 'Archivo Black', fontSize: titleSize(title), lineHeight: 1.04, letterSpacing: -1.5, color: titleColor, maxWidth: 1040 }, title),
  );
  topChildren.push(box({ width: 76, height: 10, borderRadius: 3, backgroundColor: ACCENT, marginTop: 30 }));
  if (subtitle) {
    topChildren.push(
      box({ fontFamily: 'IBM Plex Mono', fontSize: 24, lineHeight: 1.5, color: subColor, maxWidth: 900, marginTop: 24 }, clampText(subtitle, 116)),
    );
  }

  const tree = box(
    {
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: bg,
      padding: 80,
    },
    [
      box({ flexDirection: 'column' }, topChildren),
      // footer: wordmark left, url right
      box({ justifyContent: 'space-between', alignItems: 'center' }, [
        box({ fontFamily: 'Archivo Black', fontSize: 28, letterSpacing: -0.5, color: titleColor }, 'Nicholas Major'),
        box({ fontFamily: 'IBM Plex Mono', fontSize: 22, letterSpacing: 1, color: urlColor }, 'nmajor.com'),
      ]),
    ],
  );

  const svg = await satori(tree as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Archivo Black', data: archivoBlack, weight: 400, style: 'normal' },
      { name: 'IBM Plex Mono', data: plexMono, weight: 500, style: 'normal' },
    ],
  });

  const png = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
    font: { loadSystemFonts: false },
  })
    .render()
    .asPng();
  return Buffer.from(png);
}

// Small helper for the endpoints: a PNG Response with long-lived caching.
export function ogResponse(png: Buffer): Response {
  return new Response(png, {
    headers: {
      'content-type': 'image/png',
      'cache-control': 'public, max-age=31536000, immutable',
    },
  });
}
