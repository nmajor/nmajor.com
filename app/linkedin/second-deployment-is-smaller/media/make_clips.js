const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { chromium } = require("playwright");

const root = __dirname;

const images = {
  cg3508: toDataUrl(path.join(root, "shot-cg3508.png")),
  cg4048: toDataUrl(path.join(root, "shot-cg4048.png")),
};

const themes = {
  dark: {
    body: "#7a7d81",
    app: "#7a7d81",
    toolbar: "#5f6368",
    toolbarBorder: "rgba(255,255,255,0.08)",
    canvas: "#8a8d91",
    icon: "#f1f3f4",
    btnBg: "rgba(255,255,255,0.04)",
    btnBorder: "rgba(255,255,255,0.09)",
    fieldBg: "#4f5358",
    fieldBorder: "rgba(255,255,255,0.08)",
    fieldText: "#f1f3f4",
    muted: "#d7d9dc",
    scrollTrack: "#707479",
    scrollThumb: "#c2c7cc",
    pageBorder: "#d7d7d7",
  },
  light: {
    body: "#d2d4d7",
    app: "#d2d4d7",
    toolbar: "#eceff1",
    toolbarBorder: "rgba(60,64,67,0.10)",
    canvas: "#c2c5c8",
    icon: "#3c4043",
    btnBg: "rgba(60,64,67,0.02)",
    btnBorder: "rgba(60,64,67,0.14)",
    fieldBg: "#ffffff",
    fieldBorder: "rgba(60,64,67,0.18)",
    fieldText: "#202124",
    muted: "#5f6368",
    scrollTrack: "#adb1b6",
    scrollThumb: "#7f858a",
    pageBorder: "#d8d8d8",
  },
};

const variants = [
  {
    name: "clip-a.jpg",
    outW: 1080,
    outH: 1350,
    source: "cg3508",
    theme: "dark",
    zoomLabel: "92%",
    app: { x: -14, y: -8, w: 1112, h: 1368 },
    toolbarH: 50,
    viewport: { x: 84, y: 90, w: 902, h: 1208 },
    crop: { x: 12, y: 8, w: 1672, h: 2120 },
    fit: "cover",
    tilt: -0.85,
    scroll: { top: 386, h: 176 },
    cursor: { x: 825, y: 780, scale: 1.06, rotate: -8 },
  },
  {
    name: "clip-b.jpg",
    outW: 1080,
    outH: 1080,
    source: "cg4048",
    theme: "light",
    zoomLabel: "127%",
    app: { x: -18, y: -12, w: 1118, h: 1100 },
    toolbarH: 52,
    viewport: { x: 72, y: 98, w: 924, h: 902 },
    crop: { x: 58, y: 472, w: 968, h: 938 },
    fit: "cover",
    tilt: 0.35,
    scroll: { top: 270, h: 150 },
    selection: { x: 214, y: 735, w: 136, h: 25 },
  },
  {
    name: "clip-c.jpg",
    outW: 1080,
    outH: 1350,
    source: "cg3508",
    theme: "dark",
    zoomLabel: "141%",
    app: { x: -10, y: -18, w: 1100, h: 1388 },
    toolbarH: 50,
    viewport: { x: 96, y: 96, w: 858, h: 1180 },
    crop: { x: 884, y: 470, w: 760, h: 990 },
    fit: "cover",
    tilt: 0.92,
    scroll: { top: 462, h: 198 },
    cursor: { x: 758, y: 702, scale: 1.02, rotate: -11 },
  },
  {
    name: "clip-d.jpg",
    outW: 1080,
    outH: 1350,
    source: "cg4048",
    theme: "light",
    zoomLabel: "104%",
    app: { x: -10, y: -6, w: 1110, h: 1362 },
    toolbarH: 50,
    viewport: { x: 88, y: 94, w: 888, h: 1194 },
    crop: { x: 0, y: 118, w: 1500, h: 1740 },
    fit: "cover",
    tilt: -0.48,
    scroll: { top: 418, h: 166 },
    cursor: { x: 312, y: 194, scale: 0.95, rotate: 6 },
  },
];

function toDataUrl(file) {
  const b64 = fs.readFileSync(file).toString("base64");
  return `data:image/png;base64,${b64}`;
}

function shellWhich(bin) {
  try {
    return execSync(`which ${bin}`, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return "";
  }
}

function findExecutable() {
  const fromEnv = process.env.CHROMIUM_PATH;
  if (fromEnv && fs.existsSync(fromEnv)) return fromEnv;
  const candidates = ["chromium", "chromium-browser", "google-chrome", "google-chrome-stable"];
  for (const bin of candidates) {
    const hit = shellWhich(bin);
    if (hit) return hit;
  }
  return undefined;
}

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true });
  } catch (err) {
    const executablePath = findExecutable();
    if (!executablePath) throw err;
    return chromium.launch({ headless: true, executablePath });
  }
}

function buildHtml(cfg) {
  const theme = themes[cfg.theme];
  const doc = layoutDoc(cfg.viewport, cfg.crop, cfg.fit);
  const source = images[cfg.source];
  const cursor = cfg.cursor ? cursorHtml(cfg.cursor) : "";
  const selection = cfg.selection
    ? `<div class="selection" style="left:${cfg.selection.x}px;top:${cfg.selection.y}px;width:${cfg.selection.w}px;height:${cfg.selection.h}px;"></div>`
    : "";

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    html, body {
      margin: 0;
      width: ${cfg.outW}px;
      height: ${cfg.outH}px;
      overflow: hidden;
      background: ${theme.body};
      font: 13px/1 system-ui, sans-serif;
      -webkit-font-smoothing: antialiased;
      text-rendering: geometricPrecision;
    }
    * { box-sizing: border-box; }
    .app {
      position: absolute;
      left: ${cfg.app.x}px;
      top: ${cfg.app.y}px;
      width: ${cfg.app.w}px;
      height: ${cfg.app.h}px;
      background: ${theme.app};
      overflow: hidden;
    }
    .toolbar {
      height: ${cfg.toolbarH}px;
      background: ${theme.toolbar};
      border-bottom: 1px solid ${theme.toolbarBorder};
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 14px;
      color: ${theme.icon};
      user-select: none;
    }
    .cluster {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 220px;
    }
    .cluster.center {
      justify-content: center;
      flex: 1;
      min-width: 0;
    }
    .cluster.right {
      justify-content: flex-end;
    }
    .btn {
      width: 30px;
      height: 30px;
      border: 1px solid ${theme.btnBorder};
      background: ${theme.btnBg};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: ${theme.icon};
      font-size: 18px;
      font-weight: 500;
    }
    .btn.icon-bars::before {
      content: "";
      width: 12px;
      height: 12px;
      border-top: 2px solid ${theme.icon};
      border-bottom: 2px solid ${theme.icon};
      position: relative;
      display: block;
    }
    .btn.icon-bars::after {
      content: "";
      position: absolute;
      width: 12px;
      height: 2px;
      background: ${theme.icon};
    }
    .btn.icon-box::before {
      content: "";
      width: 12px;
      height: 14px;
      border: 2px solid ${theme.icon};
      display: block;
    }
    .btn.text {
      font-size: 17px;
      line-height: 1;
    }
    .field {
      min-width: 42px;
      height: 28px;
      padding: 0 10px;
      border: 1px solid ${theme.fieldBorder};
      background: ${theme.fieldBg};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: ${theme.fieldText};
      font-size: 13px;
    }
    .tiny {
      color: ${theme.muted};
      font-size: 12px;
      letter-spacing: 0.01em;
    }
    .pill {
      min-width: 58px;
      height: 28px;
      padding: 0 10px;
      border: 1px solid ${theme.fieldBorder};
      background: ${theme.fieldBg};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: ${theme.fieldText};
      font-size: 13px;
    }
    .canvas {
      position: relative;
      height: calc(100% - ${cfg.toolbarH}px);
      background: ${theme.canvas};
    }
    .viewport {
      position: absolute;
      left: ${cfg.viewport.x}px;
      top: ${cfg.viewport.y}px;
      width: ${cfg.viewport.w}px;
      height: ${cfg.viewport.h}px;
      overflow: hidden;
      background: #fff;
      border: 1px solid ${theme.pageBorder};
    }
    .doc-rot {
      position: absolute;
      inset: 0;
      transform: rotate(${cfg.tilt}deg);
      transform-origin: 50% 50%;
    }
    .doc-canvas {
      position: absolute;
      width: 1700px;
      height: 2200px;
      left: 0;
      top: 0;
      transform-origin: 0 0;
      transform: translate(${doc.tx}px, ${doc.ty}px) scale(${doc.scale});
    }
    .doc-canvas img {
      position: absolute;
      inset: 0;
      width: 1700px;
      height: 2200px;
      display: block;
    }
    .selection {
      position: absolute;
      background: rgba(66, 133, 244, 0.18);
      border: 1px solid rgba(66, 133, 244, 0.18);
    }
    .scrollbar {
      position: absolute;
      right: 14px;
      top: 14px;
      bottom: 14px;
      width: 14px;
      background: ${theme.scrollTrack};
      border-left: 1px solid rgba(0,0,0,0.08);
    }
    .thumb {
      position: absolute;
      left: 2px;
      right: 2px;
      top: ${cfg.scroll.top}px;
      height: ${cfg.scroll.h}px;
      background: ${theme.scrollThumb};
    }
    .scrim-top {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 1px;
      background: rgba(255,255,255,0.06);
    }
  </style>
</head>
<body>
  <div class="app">
    <div class="toolbar">
      <div class="cluster">
        <div class="btn text">-</div>
        <div class="btn text">+</div>
        <div class="btn icon-bars"></div>
      </div>
      <div class="cluster center">
        <div class="field">1</div>
        <div class="tiny">/ 1</div>
        <div class="btn text">-</div>
        <div class="pill">${cfg.zoomLabel}</div>
        <div class="btn text">+</div>
      </div>
      <div class="cluster right">
        <div class="btn icon-box"></div>
        <div class="btn icon-box"></div>
      </div>
    </div>
    <div class="canvas">
      <div class="scrim-top"></div>
      <div class="viewport">
        <div class="doc-rot">
          <div class="doc-canvas">
            <img src="${source}" alt="">
            ${selection}
          </div>
        </div>
      </div>
      <div class="scrollbar">
        <div class="thumb"></div>
      </div>
    </div>
  </div>
  ${cursor}
</body>
</html>`;
}

function layoutDoc(viewport, crop, fit) {
  const scale =
    fit === "contain"
      ? Math.min(viewport.w / crop.w, viewport.h / crop.h)
      : Math.max(viewport.w / crop.w, viewport.h / crop.h);
  const tx = (viewport.w - crop.w * scale) / 2 - crop.x * scale;
  const ty = (viewport.h - crop.h * scale) / 2 - crop.y * scale;
  return {
    scale: Number(scale.toFixed(4)),
    tx: Number(tx.toFixed(2)),
    ty: Number(ty.toFixed(2)),
  };
}

function cursorHtml(cursor) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="46" viewBox="0 0 34 46">
      <path d="M2 2 L2 38 L11.7 28.5 L17.8 43.2 L22.8 40.9 L16.9 26.3 L31 26.2 Z" fill="#ffffff" stroke="#111111" stroke-width="2.1" stroke-linejoin="round"/>
    </svg>
  `.trim();
  const b64 = Buffer.from(svg).toString("base64");
  return `<div style="
    position:absolute;
    left:${cursor.x}px;
    top:${cursor.y}px;
    width:34px;
    height:46px;
    background:url(data:image/svg+xml;base64,${b64}) no-repeat 0 0 / contain;
    transform:rotate(${cursor.rotate}deg) scale(${cursor.scale});
    transform-origin:top left;
    pointer-events:none;
  "></div>`;
}

async function main() {
  const browser = await launchBrowser();
  const context = await browser.newContext({ deviceScaleFactor: 1 });
  try {
    for (const cfg of variants) {
      const page = await context.newPage();
      await page.setViewportSize({ width: cfg.outW, height: cfg.outH });
      await page.setContent(buildHtml(cfg), { waitUntil: "load" });
      await page.waitForTimeout(120);
      await page.screenshot({
        path: path.join(root, cfg.name),
        type: "jpeg",
        quality: 82,
      });
      await page.close();
      console.log(`wrote ${cfg.name}`);
    }
  } finally {
    await context.close();
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
