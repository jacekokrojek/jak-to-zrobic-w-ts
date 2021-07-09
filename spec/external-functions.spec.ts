import { browser, $} from "protractor";
import { select } from "./actions";

describe("Wyszukiwarka", function () {

  const url = "https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";

  beforeEach(async function(){
    await browser.get(url);
  });

  it("umożliwiać zmianę domyślnej szerokości opon", async function () {
    let newWidth = "225";
    await select(0, newWidth);
    const currentWidth = await $('#opona-szerokosc').getAttribute("value");
    expect(currentWidth).toEqual(newWidth);
  });
});