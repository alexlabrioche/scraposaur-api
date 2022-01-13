import puppeteer from "puppeteer";

const BASE_URL = "https://www.linkedin.com";
const LOGIN_URL = `${BASE_URL}/login`;

const selectors = {
  email: "#username",
  password: "#password",
  submit: "#organic-div > form > div.login__form_action_container > button",
};

const browserConfig = {
  headless: true,
  devtools: true,
  defaultViewport: {
    width: 1100,
    height: 1000,
  },
};

const scrapLinkedinByCompanyName = async (name) => {
  try {
    const browser = await puppeteer.launch(browserConfig);
    const page = await browser.newPage();
    await page.goto(LOGIN_URL, { waitUntil: "domcontentloaded" });
    await page.click(selectors.email);
    await page.keyboard.type(process.env.LINKEDIN_MAIL);
    await page.click(selectors.password);
    await page.keyboard.type(process.env.LINKEDIN_PWD);
    await page.click(selectors.submit);
    const companyPage = await page.goto(`${BASE_URL}/company/${name}`, {
      waitUntil: "domcontentloaded",
    });

    return {
      name: "test",
      employees: 100,
    };
  } catch (error) {
    return error;
  }
};

export { scrapLinkedinByCompanyName };
