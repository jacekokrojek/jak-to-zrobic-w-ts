import { browser, by, element } from "protractor";
import { browserWait } from "./actions";

describe("Wyszukiwarka", function () {
  const url =
    "https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";

  it("powinna umożliwiać zmianę domyślnej szerokości opon", async function () {
    let btnCar = await element(by.css("#opony-wybor-button-car"));
    let btnSearch = await element(by.css("#btnSzukajOponyWgRozmiar"));
    let ariaBusy = await element(
      by.xpath(
        '//input[@aria-owns="opona-szerokosc_listbox"][@aria-busy="false"]'
      )
    );
    let height = await element(
      by.xpath('//input[@aria-owns="opona-profil_listbox"][@aria-busy="false"]')
    );
    let radius = await element(
      by.xpath(
        '//input[@aria-owns="opona-srednica_listbox"][@aria-busy="false"]'
      )
    );
    await browser.get(url);
    await btnCar.click();
    await ariaBusy.clear();
    await ariaBusy.sendKeys("215");
    await btnCar.click();
    await browserWait(height);
    await height.click();
    await height.clear();
    await height.sendKeys("40");
    await btnCar.click();
    await browserWait(radius);
    await radius.clear();
    await radius.sendKeys("16");
    await btnSearch.click();
    expect(await browser.getCurrentUrl()).toContain("215-40-16");
  });
});
