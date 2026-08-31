const puppeteer = require('puppeteer');
const path = require('path');

async function capture() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const outDir = 'C:\\Users\\DSIP219058\\.gemini\\antigravity\\brain\\a719761a-1181-4e4e-a859-45df0f5ac0cc';

  // Desktop 404
  const pageDesktop = await browser.newPage();
  await pageDesktop.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await pageDesktop.goto('http://localhost:3000/404.html', { waitUntil: 'networkidle0', timeout: 30000 });
  await pageDesktop.screenshot({ path: path.join(outDir, 'preview_404_desktop.png') });

  // Mobile 404
  const pageMobile = await browser.newPage();
  await pageMobile.setViewport({ width: 393, height: 852, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await pageMobile.goto('http://localhost:3000/404.html', { waitUntil: 'networkidle0', timeout: 30000 });
  await pageMobile.screenshot({ path: path.join(outDir, 'preview_404_mobile.png') });

  console.log('404 screenshots captured successfully!');
  await browser.close();
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
