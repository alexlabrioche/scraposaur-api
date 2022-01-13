import puppeteer from "puppeteer";
import { chill, getTextContent } from "../helpers/scraper";

const BASE_URL = "https://www.societe.com";

const selectors = {
  submit: "#organic-div > form > div.login__form_action_container > button",
  searchResults: "#search > div > a",
  notFound: "#page > div.Card.frame.max-width-1000.noResult > p",
  name: "#identite_deno",
  legalForm: "#catjur-histo-description",
  employees: "#trancheeff-histo-description",
  address: "#rensjur > tbody > tr:nth-child(5) > td:nth-child(2) > a",
  capital: "#capital-histo-description",
};

const browserConfig = {
  headless: true,
  devtools: true,
  defaultViewport: {
    width: 1100,
    height: 1000,
  },
};

const scrapSocieteDotComByCompanyName = async (token) => {
  try {
    const browser = await puppeteer.launch(browserConfig);
    const page = await browser.newPage();
    await page.goto(`${BASE_URL}/cgi-bin/search?champs=${token}`, {
      waitUntil: "domcontentloaded",
    });

    const notFound = await page.$(selectors.notFound);

    if (notFound !== null) {
      return { error: true };
    }

    await page.click(selectors.searchResults);

    await chill(2000);

    const name = await getTextContent(page, selectors.name);
    const employees = await getTextContent(page, selectors.employees);
    const legalForm = await getTextContent(page, selectors.legalForm);
    const address = await getTextContent(page, selectors.address);
    const capital = await getTextContent(page, selectors.capital);

    browser.close();

    return {
      name,
      legalForm,
      employees,
      address,
      capital,
    };
  } catch (error) {
    return error;
  }
};

export { scrapSocieteDotComByCompanyName };
