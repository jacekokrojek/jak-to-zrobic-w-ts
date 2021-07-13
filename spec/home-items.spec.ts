import { browser, element, by } from "protractor";
import { browserWait} from "./actions";

describe("Strona główna bestdrive", function () {

  const url ="https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";

  beforeEach(async function () {
    await browser.get(url);
  });

  it("powinna mieć tytuł: Bestdrive - Opony online - bestdrive.webshop.pl", async function () {
    let title = await browser.getTitle();
    expect(title).toMatch("Bestdrive - Opony online - bestdrive.webshop.pl");
  });

  it("powinna wyświetlać nazwę wybranego serwisu", async function () {
    let serviceName = await element(by.css(".serwis-nazwa")).getText();
    expect(serviceName).toEqual("Navigator");
  });

  it("powinna domyślnie wyświetlać wyszukiwarkę opon wg. rozmiaru", async function () {
    let getSizeForm = await element(by.id("WyborOpon"));
    expect(getSizeForm.isPresent()).toBe(true);
  });

  it("powinna posiadac menu zawierajace: 'OPONY WG ROZMIARU', 'OPONY WG POJAZDU,'PROMOCJE','KOSZYK (0)'", async function () {
    let menuItems = ["OPONY WG ROZMIARU","OPONY WG POJAZDU","PROMOCJE","KOSZYK (0)",""];
    let getMenuItems = await element.all(by.css("ul.nav li")).map((el) => {
      return el.getText();
    });
    expect(getMenuItems).toEqual(menuItems);
  });

  it("powinna posiadac menu z pierwszym elementem 'OPONY WG ROZMIARU'", async function () {
    let getTextFromMenu = await element(by.css("ul.nav li")).get(0).getText();
    expect(getTextFromMenu).toEqual("OPONY WG ROZMIARU");
  });

  it("powinna posiadac stopkę z linkami do ...", async function () {
    let arrayHref = ["/","/opony-pojazdu","/promocje-opon","","/Koszyk/Podsumowanie","/Koszyk/Podsumowanie",];
    let getAHref = await element.all(by.css(".navbar-nav   li  a")).map((el) => {
      return el.getAttribute("href");
    });
    expect(getAHref).toEqual(arrayHref);
  });

  it("powinna  umożliwiać wyszukiwanie opon dla samochodów dostawczych", async function () {
    let btnTruck = await element(by.css("#opony-wybor-button-truck"));
    let width = await element(by.xpath("//form/div[1]/span[1]/span/span/span"));
    let widthChoseSize = await element(by.css("#opona-szerokosc_listbox  li:nth-child(2)"));
    let height = element(by.css("span.WyborOpon-Lewy-Item:nth-child(2) > span:nth-child(2) > span:nth-child(1) > span:nth-child(2)"));
    let heightChoseSize = await element(by.css("#opona-profil_listbox  li:nth-child(3)"));
    let radius = await element(by.css('span.WyborOpon-Lewy-Item:nth-child(3) > span:nth-child(2) > span:nth-child(1) > span:nth-child(2)'));
    let radiusChooseSize = await element(by.css("#opona-srednica_listbox  li:nth-child(1)"));
    let btnSearch = await element(by.css("#btnSzukajOponyWgRozmiar"));
    let getElementH1  = await element(by.css(".naglowekH1 > div:nth-child(1) > h1:nth-child(1)"))
    await btnTruck.click();
    await browserWait(width);
    await width.click();
    await browserWait(widthChoseSize);
    await widthChoseSize.click();
    await btnTruck.click();
    await browserWait(height);
    await height.click();
    await height.click();
    await browserWait(heightChoseSize);
    await heightChoseSize.click();
    await btnTruck.click();
    await browserWait(radius);
    await radius.click();
    await radius.click();
    await browserWait(radiusChooseSize);
    await radiusChooseSize.click();
    await browserWait(btnSearch);
    await btnSearch.click();
    await browserWait(getElementH1);
    expect(await browser.getCurrentUrl()).toContain("dostawcza");
  });

  it("powinna  umożliwiać wyszukiwanie opon dla samochodów terenowych", async function () {
    let btnJeep = await element(by.css("#opony-wybor-button-jeep"));
    let width = await element(by.xpath("//form/div[1]/span[1]/span/span/span"));
    let widthChoseSize = await element(by.css("#opona-szerokosc_listbox  li:nth-child(5)"));
    let height = element(by.css("span.WyborOpon-Lewy-Item:nth-child(2) > span:nth-child(2) > span:nth-child(1) > span:nth-child(2)"));
    let heightChoseSize = await element(by.css("#opona-profil_listbox  li:nth-child(3)"));
    let radius = await element(by.css('span.WyborOpon-Lewy-Item:nth-child(3) > span:nth-child(2) > span:nth-child(1) > span:nth-child(2)'));
    let radiusChooseSize = await element(by.css("#opona-srednica_listbox  li:nth-child(1)"));
    let btnSearch = await element(by.css("#btnSzukajOponyWgRozmiar"));
    let getElementH1  = await element(by.css(".naglowekH1 > div:nth-child(1) > h1:nth-child(2)"))
    await btnJeep.click();
    await browserWait(width);
    await width.click();
    await browserWait(widthChoseSize);
    await widthChoseSize.click();
    await btnJeep.click();
    await browserWait(height);
    await height.click();
    await height.click();
    await browserWait(heightChoseSize);
    await heightChoseSize.click();
    await btnJeep.click();
    await browserWait(radius);
    await radius.click();
    await radius.click();
    await browserWait(radiusChooseSize);
    await radiusChooseSize.click();
    await browserWait(btnSearch);
    await btnSearch.click();
    await browserWait(getElementH1);
    expect(await browser.getCurrentUrl()).toContain("4x4");
  });

  it("powinna umożliwiać zmianę domyślnej szerokości opon", async function () {
    let btnCar = await element(by.css("#opony-wybor-button-car"));
    let width = await element(by.xpath("//form/div[1]/span[1]/span/span/span"));
    let widthChoseSize = await element(by.css("#opona-szerokosc_listbox  li:nth-child(2)"));
    let height = element(by.css("span.WyborOpon-Lewy-Item:nth-child(2) > span:nth-child(2) > span:nth-child(1) > span:nth-child(2)"));
    let heightChoseSize = await element(by.css("#opona-profil_listbox  li:nth-child(3)"));
    let radius = await element(by.css('span.WyborOpon-Lewy-Item:nth-child(3) > span:nth-child(2) > span:nth-child(1) > span:nth-child(2)'));
    let radiusChooseSize = await element(by.css("#opona-srednica_listbox  li:nth-child(1)"));
    let btnSearch = await element(by.css("#btnSzukajOponyWgRozmiar"));
    let getElementH1  = await element(by.css(".naglowekH1 > div:nth-child(1) > h1:nth-child(1)"))
    await btnCar.click();
    await browserWait(width);
    await width.click();
    await browserWait(widthChoseSize);
    await widthChoseSize.click();
    await btnCar.click();
    await browserWait(height);
    await height.click();
    await height.click();
    await browserWait(heightChoseSize);
    await heightChoseSize.click();
    await btnCar.click();
    await browserWait(radius);
    await radius.click();
    await radius.click();
    await browserWait(radiusChooseSize);
    await radiusChooseSize.click();
    await browserWait(btnSearch);
    await btnSearch.click();
    await browserWait(getElementH1);
    expect(await browser.getCurrentUrl()).toContain("125-80-13");
  }); 
});
