import { browser, $, $$, element, by, protractor } from "protractor";

export async function select(idx, item) {
  let until = protractor.ExpectedConditions;
  let itemToSelect = element(by.xpath(`//li[text()="${item}"]`));

  await $$("span.k-select").get(idx).click();
  await browser.wait(until.elementToBeClickable(itemToSelect), 5000);
  await browser.sleep(100);
  await itemToSelect.click();
  await browser.sleep(100);
}

export async function browserWait(element) {
  let ec = protractor.ExpectedConditions;
  await browser.wait(ec.presenceOf(element), 5000);
}
