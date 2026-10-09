// Build-time OpenGraph card renderer for nmajor.com.
//
// satori (element tree -> SVG) + @resvg/resvg-js (SVG -> PNG), run ONLY at
// `astro build` from the Astro static endpoints under src/pages/og/. This never
// runs in the Worker/edge runtime (@resvg/resvg-js is a native binary).
//
// Design = direction B: warm paper (or ink for the newsletter), a Bricolage
// Grotesque title, an orange pill eyebrow, Nick's photo with an orange offset
// shadow, and a "nick major." / nmajor.com footer.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

// Paths are relative to process.cwd() (the app/ package dir), NOT import.meta.url:
// this module is bundled into dist/chunks at build, where import.meta.url can't
// locate the files. The build always runs with cwd = app/.
const font = (file: string) => readFileSync(join(process.cwd(), 'src/og/fonts', file));
const bricolage = font('BricolageGrotesque-ExtraBold.ttf');
const inter = font('Inter-Medium.ttf');
const photo = `data:image/jpeg;base64,${readFileSync(join(process.cwd(), 'public/nicholas-major.jpg')).toString('base64')}`;

const PAPER = '#fbf7f0';
const INK = '#1d1b18';
const ACCENT = '#ff5a1f';
const YELLOW = '#ffd23f';

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

// Keep the subtitle to ~2 lines so it never collides with the footer.
function clampText(s: string, max: number): string {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  const trimmed = lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut;
  return trimmed.replace(/[\s.,;:]+$/, '') + '…';
}

// Fit the title to the card: short titles big, long titles step down.
function titleSize(title: string): number {
  const n = title.length;
  if (n > 82) return 50;
  if (n > 60) return 58;
  if (n > 40) return 66;
  return 78;
}

export async function renderOgPng({ eyebrow, title, subtitle, theme = 'paper' }: OgOptions): Promise<Buffer> {
  const isInk = theme === 'ink';
  const bg = isInk ? INK : PAPER;
  const titleColor = isInk ? '#ffffff' : INK;
  const subColor = isInk ? '#c9c2b6' : '#6b655c';

  const left: unknown[] = [];
  if (eyebrow) {
    left.push(
      box({ alignSelf: 'flex-start', backgroundColor: ACCENT, color: '#fff', fontFamily: 'Inter', fontSize: 24, padding: '6px 18px', borderRadius: 999, marginBottom: 28 }, eyebrow),
    );
  }
  left.push(box({ fontFamily: 'Bricolage', fontSize: titleSize(title), lineHeight: 1.04, letterSpacing: -1.5, color: titleColor }, title));
  if (subtitle) {
    left.push(box({ fontFamily: 'Inter', fontSize: 26, lineHeight: 1.45, color: subColor, marginTop: 24 }, clampText(subtitle, 120)));
  }

  const face = box(
    { width: 200, height: 200, borderRadius: 999, backgroundColor: ACCENT, position: 'relative', flex: 'none' },
    {
      type: 'img',
      props: {
        src: photo,
        width: 188,
        height: 188,
        style: { position: 'absolute', left: -14, top: -14, borderRadius: 999, border: `6px solid ${isInk ? INK : '#ffffff'}` },
      },
    },
  );

  const tree = box(
    { width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: bg, padding: 72 },
    [
      box({ justifyContent: 'space-between', alignItems: 'flex-start', gap: 48 }, [
        box({ flexDirection: 'column', flex: 1 }, left),
        face,
      ]),
      box({ justifyContent: 'space-between', alignItems: 'center' }, [
        box({ fontFamily: 'Bricolage', fontSize: 34, letterSpacing: -0.5, color: titleColor }, [
          'nick major',
          box({ color: ACCENT }, '.'),
        ]),
        box({ fontFamily: 'Inter', fontSize: 24, color: isInk ? YELLOW : '#6b655c' }, 'nmajor.com'),
      ]),
    ],
  );

  const svg = await satori(tree as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Bricolage', data: bricolage, weight: 800, style: 'normal' },
      { name: 'Inter', data: inter, weight: 500, style: 'normal' },
    ],
  });

  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 }, font: { loadSystemFonts: false } }).render().asPng();
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
