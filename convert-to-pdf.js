const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const inputFile = path.resolve(__dirname, 'safetrack-hellenic-proposal-v2-clean.html');
  const outputFile = path.resolve(__dirname, 'safetrack-hellenic-proposal-v2-clean.pdf');

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const page = await browser.newPage();

  // Set a fixed viewport matching the design width
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  await page.goto(`file://${inputFile}`, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait an extra moment for fonts to fully render
  await new Promise(r => setTimeout(r, 1000));

  // Get the full scroll height for a single continuous page
  const bodyHeight = await page.evaluate(() => {
    document.body.style.overflow = 'visible';
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  });

  await page.pdf({
    path: outputFile,
    width: '1440px',
    height: `${bodyHeight}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  console.log(`PDF saved to: ${outputFile}`);
  console.log(`Page dimensions: 1440 x ${bodyHeight}px`);
})();
