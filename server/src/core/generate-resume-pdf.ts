import puppeteer from "puppeteer";

const RESUME_URL = 'https://bybruno.io/resume';

export const GenerateResumePdf = async () => {
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: '/usr/bin/chromium-browser',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
        ],
        ignoreHTTPSErrors: true
    });

    const page = await browser.newPage();
    await page.goto(RESUME_URL, { waitUntil: 'networkidle0' });

    const pdf = await page.pdf({
        format: "a4",
        margin: {
            top: "20px",
            bottom: "40px",
            left: "20px",
            right: "20px"
        }
    });

    await browser.close();

    return pdf;
}
