import { browser, by, element } from "protractor";
import { browserWait} from "./actions";

describe("Wyszukiwarka", function () {
  const url = "https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";

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

