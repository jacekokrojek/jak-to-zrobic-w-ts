import { browser, by, element } from "protractor";
import { SearchComponent } from "./components/search";

describe("Wyszukiwarka", function () {
  const url =
    "https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";

  const searchComponent = new SearchComponent();

  beforeEach(async function () {
    await browser.get(url);
  });

  it("powinna umożliwiać zmianę domyślnej szerokości opon", async function () {
    const newWidth = "225";
    await searchComponent.selectWidth(newWidth);
    const currentWidth = await element(by.css("#opona-szerokosc")).getAttribute(
      "value"
    );
    expect(currentWidth).toEqual(newWidth);
  });
});
