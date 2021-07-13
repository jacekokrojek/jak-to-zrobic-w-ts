import { browser, by, element } from "protractor";
import { browserWait} from "./actions";

describe("Wyszukiwarka", function () {
  const url = "https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";

  beforeEach(async function () {
    await browser.get(url);
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

