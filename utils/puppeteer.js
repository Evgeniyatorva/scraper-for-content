import puppeteer from 'puppeteer';

const LAUNCH_PUPPETEER_OPTS = {
  ignoreDefaultArgs: ['--disable-extensions'],
}

export const PAGE_PUPPETEER_OPTS = {
  networkIdle2Timeout: 5000,
  waitUntil: 'networkidle2',
  timeout: 3000000
}

export async function getPageContent(url) {
  try {
    const browser = await puppeteer.launch(LAUNCH_PUPPETEER_OPTS);
    const page = await browser.newPage();
    await page.goto(url, PAGE_PUPPETEER_OPTS);
    const content = await page.content();
    browser.close()

    return content
  } catch (error) {
    throw error
  }
}