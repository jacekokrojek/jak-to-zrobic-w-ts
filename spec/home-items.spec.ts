import { browser, element, by } from "protractor";
import { browserWait } from "./actions";

describe("Strona główna bestdrive", function () {
  const url =
    "https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";


  it("powinna mieć tytuł: Bestdrive - Opony online - bestdrive.webshop.pl", async function () {
    await browser.get(url);
    let title = await browser.getTitle();
    expect(title).toMatch("Bestdrive - Opony online - bestdrive.webshop.pl");
  });

  it("powinna wyświetlać nazwę wybranego serwisu", async function () {
    await browser.get(url);
    let serviceName = await element(by.css(".serwis-nazwa")).getText();
    expect(serviceName).toEqual("Navigator");
  });

  it("powinna domyślnie wyświetlać wyszukiwarkę opon wg. rozmiaru", async function () {
    await browser.get(url);
    let getSizeForm = await element(by.id("WyborOpon"));
    expect(getSizeForm.isPresent()).toBe(true);
  });

  it("powinna posiadac menu zawierajace: 'OPONY WG ROZMIARU', 'OPONY WG POJAZDU,'PROMOCJE','KOSZYK (0)'", async function () {
    let menuItemsArray = ["OPONY WG ROZMIARU","OPONY WG POJAZDU","PROMOCJE","KOSZYK (0)","",];
    await browser.get(url);
    let getMenuItems = await element.all(by.css("ul.nav li")).map((menuItems) => {
      return menuItems.getText();
    });
    expect(getMenuItems).toEqual(menuItemsArray);
  });

  it("powinna posiadac menu z pierwszym elementem 'OPONY WG ROZMIARU'", async function () {
    await browser.get(url);
    let getTextFromMenu = await element.all(by.css("ul.nav li")).first().getText();
    expect(getTextFromMenu).toEqual("OPONY WG ROZMIARU");
  });

  it("powinna posiadac stopkę z linkami do ...", async function () {
    let arrayHref = ["/","/opony-pojazdu","/promocje-opon","","/Koszyk/Podsumowanie","/Koszyk/Podsumowanie",];
    await browser.get(url);
    let getAHref = await element.all(by.css(".navbar-nav   li  a")).map((el) => {return el.getAttribute("href");});
    expect(getAHref).toEqual(arrayHref);
  });

  it("powinna  umożliwiać wyszukiwanie opon dla samochodów dostawczych", async function () {
    let btnTruck = await element(by.css("#opony-wybor-button-truck"));
    let width = await element(
      by.css('[aria-controls="opona-szerokosc_listbox"]')
    );
    let widthChoseSize = await element(
      by.xpath('//ul/li[text()="225"]')
    );
    let height = element(by.css('[aria-controls="opona-profil_listbox"]'));
    let heightChoseSize = await element(
      by.xpath('//ul/li[text()="60"]')
    );
    let radius = await element(
      by.css('[aria-controls="opona-srednica_listbox"]')
    );
    let radiusChoseSize = await element(
      by.xpath('//ul/li[text()="16"]')
    );
    let btnSearch = await element(by.css("#btnSzukajOponyWgRozmiar"));
    await browser.get(url);
    await btnTruck.click();
    await width.click();
    await browserWait(widthChoseSize);
    await widthChoseSize.click();
    await btnTruck.click();
    await browserWait(height);
    await height.click();
    await browserWait(heightChoseSize);
    await heightChoseSize.click();
    await btnTruck.click();
    await browserWait(radius);
    await radius.click();
    await browserWait(radiusChoseSize);
    await radiusChoseSize.click();
    await btnSearch.click();
    expect(await browser.getCurrentUrl()).toContain("dostawcza");
  });

  it("powinna  umożliwiać wyszukiwanie opon dla samochodów terenowych", async function () {
    let btnJeep = await element(by.css("#opony-wybor-button-jeep"));
    let width = await element(
      by.css('[aria-controls="opona-szerokosc_listbox"]')
    );
    let widthChoseSize = await element(
      by.xpath('//ul/li[text()="235"]')
    );
    let height = element(by.css('[aria-controls="opona-profil_listbox"]'));
    let heightChoseSize = await element(
      by.xpath('//ul/li[text()="55"]')
    );
    let radius = await element(
      by.css('[aria-controls="opona-srednica_listbox"]')
    );
    let radiusChooseSize = await element(
      by.xpath('//ul/li[text()="17"]')
    );
    let btnSearch = await element(by.css("#btnSzukajOponyWgRozmiar"));
    await browser.get(url);
    await btnJeep.click();
    await width.click();
    await browserWait(widthChoseSize);
    await widthChoseSize.click();
    await btnJeep.click();
    await browserWait(height);
    await height.click();
    await browserWait(heightChoseSize);
    await heightChoseSize.click();
    await btnJeep.click();
    await browserWait(radius);
    await radius.click();
    await browserWait(radiusChooseSize);
    await radiusChooseSize.click();
    await btnSearch.click();
    expect(await browser.getCurrentUrl()).toContain("4x4");
  });

  it("powinna umożliwiać zmianę domyślnej szerokości opon", async function () {
    let btnCar = await element(by.css("#opony-wybor-button-car"));
    let width = await element(
      by.css('[aria-controls="opona-szerokosc_listbox"]')
    );
    let widthChoseSize = await element(
      by.xpath('//ul/li[text()="215"]')
    );
    let height = element(by.css('[aria-controls="opona-profil_listbox"]'));
    let heightChoseSize = await element(
      by.xpath('//ul/li[text()="40"]')
    );
    let radius = await element(
      by.css('[aria-controls="opona-srednica_listbox"]')
    );
    let radiusChooseSize = await element(
      by.xpath('//*/ul/li[text()="17"]')
    );
    let btnSearch = await element(by.css("#btnSzukajOponyWgRozmiar"));
    await browser.get(url);
    await btnCar.click();
    await width.click();
    await browserWait(widthChoseSize);
    await widthChoseSize.click();
    await btnCar.click();
    await browserWait(height);
    await height.click();
    await browserWait(heightChoseSize);
    await heightChoseSize.click();
    await btnCar.click();
    await browserWait(radius);
    await radius.click();
    await browserWait(radiusChooseSize);
    await radiusChooseSize.click();
    await btnSearch.click();
    expect(await browser.getCurrentUrl()).toContain("215-40-17");
  });
});
