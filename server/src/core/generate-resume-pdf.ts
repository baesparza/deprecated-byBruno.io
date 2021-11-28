import * as puppeteer from "puppeteer";

const RESUME_URL = 'https://bybruno.io/resume';

export const GenerateResumePdf = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(RESUME_URL, { waitUntil: 'networkidle0' });

    const pdf = await page.pdf({
        printBackground: true,
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
