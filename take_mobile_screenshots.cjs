const puppeteer = require('puppeteer');
const path = require('path');

async function capture() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  await page.setViewport({
    width: 393,
    height: 852,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1500)));

  const outDir = 'C:\\Users\\DSIP219058\\.gemini\\antigravity\\brain\\a719761a-1181-4e4e-a859-45df0f5ac0cc';

  // 1. Mobile Hero & Open Peeps
  await page.screenshot({ path: path.join(outDir, 'mobile_01_hero.png') });

  // 2. Mobile Reservation Card & Suka-Suka
  await page.evaluate(() => {
    window.scrollTo({ top: 550, behavior: 'instant' });
  });
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 800)));
  await page.screenshot({ path: path.join(outDir, 'mobile_02_reservation.png') });

  // 3. Mobile Tableside & 5 Rows Open Peeps
  await page.evaluate(() => {
    const el = document.querySelector('#reservation');
    if (el) window.scrollTo({ top: el.offsetTop + 1600, behavior: 'instant' });
  });
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 800)));
  await page.screenshot({ path: path.join(outDir, 'mobile_03_crowd_peeps.png') });

  // 4. Mobile The Gallery (5 Parallax Rows)
  await page.evaluate(() => {
    const el = document.querySelector('#gallery');
    if (el) window.scrollTo({ top: el.offsetTop, behavior: 'instant' });
  });
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1000)));
  await page.screenshot({ path: path.join(outDir, 'mobile_04_the_gallery.png') });

  // 5. Mobile The Local Menu
  await page.evaluate(() => {
    const el = document.querySelector('#local-menu');
    if (el) window.scrollTo({ top: el.offsetTop + 300, behavior: 'instant' });
  });
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1000)));
  await page.screenshot({ path: path.join(outDir, 'mobile_05_local_menu.png') });

  // 6. Mobile About Ewan (Candid Prep Selfie)
  await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h2'));
    const ewanHeading = headings.find(h => h.innerText.toLowerCase().includes('about ewan'));
    if (ewanHeading) {
      ewanHeading.scrollIntoView({ behavior: 'instant', block: 'start' });
      window.scrollBy(0, -60);
    }
  });
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1000)));
  await page.screenshot({ path: path.join(outDir, 'mobile_07_about_ewan.png') });

  // 7. Mobile The Cultural Edition
  await page.evaluate(() => {
    const el = document.querySelector('#cultural-edition');
    if (el) {
      el.scrollIntoView({ behavior: 'instant', block: 'start' });
      window.scrollBy(0, -60);
    }
  });
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1000)));
  await page.screenshot({ path: path.join(outDir, 'mobile_08_cultural_edition.png') });

  // 8. Mobile The Creator's Vision
  await page.evaluate(() => {
    const el = document.querySelector('#creators-vision');
    if (el) {
      el.scrollIntoView({ behavior: 'instant', block: 'start' });
      window.scrollBy(0, -60);
    }
  });
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1000)));
  await page.screenshot({ path: path.join(outDir, 'mobile_09_creators_vision.png') });

  // 9. Mobile Open Peeps Footer
  await page.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
  });
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 800)));
  await page.screenshot({ path: path.join(outDir, 'mobile_10_footer.png') });

  console.log('Mobile screenshots captured successfully!');
  await browser.close();
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
