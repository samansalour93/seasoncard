import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
const APP = "/home/claude/seasoncard-app";
const require = createRequire(APP + "/package.json");
const { chromium } = require("playwright-core");
const b64 = (f) => `data:font/woff2;base64,${readFileSync(APP + "/public/fonts/" + f).toString("base64")}`;
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Fraunces;src:url(${b64("fraunces-latin-opsz-normal.woff2")}) format('woff2');font-weight:100 900}
@font-face{font-family:Fraunces;src:url(${b64("fraunces-latin-opsz-italic.woff2")}) format('woff2');font-style:italic;font-weight:100 900}
@font-face{font-family:Manrope;src:url(${b64("manrope-latin-wght-normal.woff2")}) format('woff2');font-weight:200 800}
body{margin:0}.s{width:1080px;height:1920px;background:#F5EFE6;color:#211C18;font-family:Manrope;display:flex;flex-direction:column;align-items:center;padding:170px 90px 150px;box-sizing:border-box;text-align:center}
</style></head><body><div class="s">
<div style="font-size:30px;font-weight:800;letter-spacing:6px;color:#9A4A24">JUST LAUNCHED</div>
<div style="font-family:Fraunces;font-weight:600;font-size:118px;line-height:1;letter-spacing:-3px;margin-top:40px">What's your<br>colour season?</div>
<div style="font-size:40px;line-height:1.45;color:#5E544B;margin-top:44px;max-width:820px">I built a free scan that measures your undertone, depth and contrast from one selfie. Your photo never leaves your phone.</div>
<div style="display:flex;gap:22px;margin-top:80px">${["#B5705A","#C79A4E","#9FA37E","#4F7F7B","#C4867A","#6B7A8F"].map(c=>`<div style="width:120px;height:220px;border-radius:30px;background:${c}"></div>`).join("")}</div>
<div style="margin-top:auto;display:flex;flex-direction:column;align-items:center;gap:26px">
<div style="background:#9A4A24;color:#fff;font-weight:800;font-size:52px;padding:34px 70px;border-radius:80px">seasoncard.app</div>
<div style="font-family:Fraunces;font-style:italic;font-size:44px">Free · 30 seconds · photo stays on your phone</div></div>
</div></body></html>`;
const br = await chromium.launch(); const p = await br.newPage({ viewport: { width: 1080, height: 1920 } });
await p.setContent(html); await p.evaluate(async()=>{await document.fonts.load("600 40px Fraunces");await document.fonts.load("italic 40px Fraunces");await document.fonts.load("700 40px Manrope");});
await p.screenshot({ path: "/home/claude/seasoncard-app/social/story-launch.png" }); await br.close();
