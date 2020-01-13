import cherio from 'cherio';

import { getArrayfromLength } from './utils/common';
import { getPageContent } from './utils/puppeteer';
import saveData from './utils/saveData';

// before starting specify the URL of the page
const SITE = 'https://ru.citaty.net/motivatsiia-i-izmenenie/?page=';
const pages = 10;
const quotesItems = [];

(async function main() {
  try {
    for( const page of getArrayfromLength(pages) ) {
      const url = `${SITE}${page}`;
      const pageContent = await getPageContent(url);
      const $ = cherio.load(pageContent);

      // specify selectors
      $('.blockquote').each((i, elem) => {
        let quote = $(elem).find('.blockquote-text a').text();
        let author = $(elem).find('.blockquote-origin a').text();

        quotesItems.push({
          quote,
          author
        })
      })
    }

    saveData(quotesItems)

  } catch (error) {
    console.log(error)
  }
})()