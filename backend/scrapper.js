const puppeteer = require('puppeteer');
const fs = require('fs');

const IMDB_URL = 'https://www.imdb.com/chart/top/';
const OUTPUT_FILE = 'Movies.json';


const autoScroll = async (page) => {
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 100;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
};

const scrapeIMDBTop250 = async () => {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        // Set viewport to maximum
        await page.setViewport({ width: 1920, height: 1080 });

        // Set User-Agent to mimic a real browser
        await page.setUserAgent(
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
        );

        await page.goto(IMDB_URL, { waitUntil: 'domcontentloaded' });

        await autoScroll(page);

        // Extract data using updated selectors
        const movies = await page.evaluate(() => {
            const movieElements = Array.from(document.querySelectorAll('ul.ipc-metadata-list > li'));

            return movieElements.map((element, index) => {
                const id = element.querySelector('.ipc-title a')?.getAttribute('href')?.match(/title\/(tt\d+)/)?.[1];
                const rank = index + 1;
                const title = element.querySelector('.ipc-title h3')?.textContent.trim();
                const year = element.querySelector('.cli-title-metadata span')?.textContent.trim();
                const image = element.querySelector('.ipc-image')?.getAttribute('src');
                const crew = element.querySelector('.cli-title a')?.getAttribute('aria-label') || '';
                const imDbRating = element.querySelector('.ipc-rating-star--rating')?.textContent.trim();
                const imDbRatingCount = element
                    .querySelector('.ipc-rating-star--voteCount')
                    ?.textContent.trim()
                    .replace(/[()]/g, '');

                return {
                    id,
                    rank: rank.toString(),
                    title,
                    fullTitle: `${title} (${year})`,
                    year,
                    image,
                    crew,
                    imDbRating,
                    imDbRatingCount,
                };
            });
        });
        console.log("Movies found", movies.length);

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(movies, null, 2));
        console.log(`Movies saved to ${OUTPUT_FILE}`);

        await browser.close();
    } catch (error) {
        console.error('Error scraping IMDb:', error.message);
    }
};

scrapeIMDBTop250();
