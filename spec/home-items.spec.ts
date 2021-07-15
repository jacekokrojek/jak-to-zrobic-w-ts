import { browser, element, by } from "protractor";
import { browserWait } from "./actions";

describe("Strona główna bestdrive", function () {
  const url =
    "https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";

  it("powinna mieć tytuł: Bestdrive - Opony online - bestdrive.webshop.pl", async function () {
    await browser.get(url);
    let title = await browser.getTitle();
    expect(title).toMatch("");
  });

  it("powinna wyświetlać nazwę wybranego serwisu", async function () {
    await browser.get(url);
    let getServiceName = await element(by.css(".serwis-nazwa")).getText();
    expect(getServiceName).toEqual("Navigator");
  });

  it("powinna domyślnie wyświetlać wyszukiwarkę opon wg. rozmiaru", async function () {
    await browser.get(url);
    let sizeForm = await element(by.id("WybortOpon"));
    expect(sizeForm.isPresent()).toBe(true);
  });

  it("powinna posiadac menu zawierajace: 'OPONY WG ROZMIARU', 'OPONY WG POJAZDU,'PROMOCJE','KOSZYK (0)'", async function () {
    let menuItemsArray = [
      "OPONY WG ROZMIARU",
      "OPONY WG POJAZDU",
      "PROMOCJE",
      "KOSZYK (0)",
      "",
    ];
    await browser.get(url);
    let getMenuItems = await element
      .all(by.css("ul.nav li"))
      .map((menuItems) => {
        return menuItems.getText();
      });
    expect(getMenuItems).toEqual(menuItemsArray);
  });

  it("powinna posiadac menu z pierwszym elementem 'OPONY WG ROZMIARU'", async function () {
    await browser.get(url);
    let getTextFromMenu = await element
      .all(by.css("ul.nav li"))
      .first()
      .getText();
    expect(getTextFromMenu).toEqual("OPONY WG ROZMIARU");
  });

  it("powinna posiadac stopkę z linkami do ...", async function () {
    let arrayHref = [
      "/",
      "/opony-pojazdu",
      "/promocje-opon",
      "",
      "/Koszyk/Podsumowanie",
      "/Koszyk/Podsumowanie",
    ];
    await browser.get(url);
    let getAHref = await element
      .all(by.css(".navbar-nav   li  a"))
      .map((el) => {
        return el.getAttribute("href");
      });
    expect(getAHref).toEqual(arrayHref);
  });

  it("powinna  umożliwiać wyszukiwanie opon dla samochodów dostawczych", async function () {
    let btnTruck = await element(by.css("#opony-wybor-button-truck"));
    let btnSearch = await element(by.css("#btnSzukajOponyWgRozmiar"));
    let width = await element(
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
    await btnTruck.click();
    await width.clear();
    await width.sendKeys("225");
    await btnTruck.click();
    await browserWait(height);
    await height.click();
    await height.clear();
    await height.sendKeys("60");
    await btnTruck.click();
    await browserWait(radius);
    await radius.clear();
    await radius.sendKeys("17");
    await btnSearch.click();
    expect(await browser.getCurrentUrl()).toContain("dostawcza");
  });

  it("powinna  umożliwiać wyszukiwanie opon dla samochodów terenowych", async function () {
    let btnJeep = await element(by.css("#opony-wybor-button-jeep"));
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
    let btnSearch = await element(by.css("#btnSzukajOponyWgRozmiar"));
    await browser.get(url);
    await btnJeep.click();
    await ariaBusy.clear();
    await ariaBusy.sendKeys("235");
    await btnJeep.click();
    await browserWait(height);
    await height.click();
    await height.clear();
    await height.sendKeys("55");
    await btnJeep.click();
    await browserWait(radius);
    await radius.clear();
    await radius.sendKeys("17");
    await btnSearch.click();
    expect(await browser.getCurrentUrl()).toContain("4x4");
  });

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
