// @ts-check
/*
 * Theory pages in a real browser: every page in data/theory.json renders with no KaTeX errors,
 * no console errors and no sideways scrolling, on a phone (390 px) and a desktop (1280 px).
 *
 *     npx playwright test tests/theory.spec.js --project=chromium --reporter=list
 *     THEORY_SHOTS=quadratic-eq,vieta npx playwright test tests/theory.spec.js --project=chromium
 *       → also saves screenshots to test-results/theory-shots/
 *     THEORY_ONLY=algebra (area, group or topic ids, comma-separated) → check only those pages
 *
 * It serves the repo itself on 127.0.0.1 (drafts are shown on localhost).
 */
import { test, expect } from '@playwright/test';
import http from 'http';
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(__dirname, '..');
const rows = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/theory.json'), 'utf8'));
const only = (process.env.THEORY_ONLY || '').split(',').filter(Boolean);
const pages = rows.filter(r => !only.length || only.some(o => o === r.id || o === r.area || o === r.group));
const shots = new Set((process.env.THEORY_SHOTS || '').split(',').filter(Boolean));
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.md': 'text/markdown; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml' };

let server, base;
test.beforeAll(async () => {
  server = http.createServer((req, res) => {
    const file = path.join(ROOT, decodeURIComponent((req.url || '/').split('?')[0]));
    if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); return res.end(); }
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
      res.end(data);
    });
  });
  await new Promise(r => server.listen(0, '127.0.0.1', () => r(null)));
  // @ts-ignore
  base = `http://127.0.0.1:${server.address().port}`;
});
test.afterAll(() => server && server.close());

/** Console errors, ignoring things that only fail because this is not the real site (analytics, login). */
function watchErrors(page) {
  const errors = [];
  page.on('console', m => {
    if (m.type() !== 'error' && !(m.type() === 'warning' && m.text().startsWith('KaTeX'))) return;
    if (/_vercel|supabase|Failed to load resource/i.test(m.text())) return;
    errors.push(m.text());
  });
  page.on('pageerror', e => errors.push(String(e)));
  return errors;
}

for (const [device, width, height] of [['mobile', 390, 844], ['desktop', 1280, 900]]) {
  test.describe(device, () => {
    test.use({ viewport: { width, height } });

    test('theory list', async ({ page }) => {
      const errors = watchErrors(page);
      await page.goto(`${base}/theory.html`);
      await expect(page.locator('a.th-topic').first()).toBeVisible();
      expect(await page.locator('a.th-topic').count()).toBe(rows.length);
      await page.locator('.th-grades button[data-grade="11"]').click();
      await expect(page).toHaveURL(/grade=11/);
      expect(await page.evaluate(() => document.querySelector('.th-wrap').scrollWidth)).toBeLessThanOrEqual(width);
      expect(errors).toEqual([]);
    });

    for (const row of pages) {
      test(`topic ${row.id}`, async ({ page }) => {
        const errors = watchErrors(page);
        await page.goto(`${base}/theory.html?topic=${row.id}`);
        await page.waitForSelector('body[data-theory-ready]');
        await expect(page.locator('.th-math-error')).toHaveCount(0);
        await expect(page.locator('.katex-error')).toHaveCount(0);
        await expect(page.locator('.th-example')).toHaveCount(3);
        await expect(page.locator('.th-check')).toHaveCount(3);
        // solutions start hidden and open on click
        const first = page.locator('details.th-reveal').first();
        await expect(first).not.toHaveAttribute('open', '');
        await first.locator('summary').click();
        await expect(first).toHaveAttribute('open', '');
        expect(await page.evaluate(() => document.querySelector('.th-wrap').scrollWidth)).toBeLessThanOrEqual(width);
        expect(errors).toEqual([]);
        if (shots.has(row.id)) {
          const dir = path.join(ROOT, 'test-results/theory-shots');
          fs.mkdirSync(dir, { recursive: true });
          // the site scrolls inside <body> (html, body { height: 100% }), which full-page screenshots can't capture
          await page.addStyleTag({ content: 'html, body { height: auto !important; overflow: visible !important; }' });
          await page.waitForTimeout(300);
          await page.screenshot({ path: path.join(dir, `${row.id}-${device}.png`), fullPage: true });
        }
      });
    }
  });
}

test('problem cards link to the theory page', async ({ page }) => {
  const withProblems = rows.find(r => r.n > 0);
  test.skip(!withProblems, 'no theory page with problems yet');
  await page.goto(`${base}/problems.html?topic=${withProblems.id}`);
  const link = page.locator(`a.tag-theory[href="theory.html?topic=${withProblems.id}"]`).first();
  await expect(link).toBeVisible();
});
