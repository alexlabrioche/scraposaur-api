export const getTextContent = async (page, selector) => {
  const element = await page.$(selector);
  const text = await page.evaluate((e) => e.textContent, element);
  const formatted = text.replace(/(\r\n|\n|\r)/gm, "").trim();
  return formatted;
};

export const chill = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
