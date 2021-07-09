import { browser, $, $$, element, by} from "protractor";

describe("Wyszukiwarka", function () {
  const url =
    "https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";

  beforeEach(async function () {
    await browser.get(url);
  });

  it("powinna mieć ustawioną domyślną szerokość opon", async function () {
    const width = await element(by.css("input[name='sz_input']")).getAttribute(
      "value"
    );
    expect(width).toEqual("205");
  });

  it("powinna mieć ustawioną domyślną wysokość opon", async function () {
    const height = await element(by.css("input[name='pr_input']")).getAttribute(
      "value"
    );
    expect(height).toEqual("55");
  });
  it("powinna mieć ustawiony domyślny promień opon", async function () {
    const diameter = await element(
      by.css("input[name='sr_input']")
    ).getAttribute("value");
    expect(diameter).toEqual("16");
  });
  it("powinna wyświetlić listę opon po naciśnięciu przycisku 'Szukaj opon'", async function () {
    await $("#btnSzukajOponyWgRozmiar").click();
    const header = await element(by.id("span.opony-small-top-label-opony"));
    expect(header).toEqual("Opony");
  });
  it("powinna umożliwiać wyszukiwanie opon dla samochodów ciężarowych", async function () {
    const buttonTruck = await element(by.css("opony-wybor-button-truck"));
    const searchButton = await element(by.id("btnSzukajOponyWgRozmiar"));
    buttonTruck.click();
    const width = await element(by.css("input[name='sz_input']"));
    width.clean().sendKeys("205");
    const height = await element(by.css("input[name='pr_input']"));
    width.clean().sendKeys("70");
    const diameter = await element(by.css("input[name='sr_input']"));
    width.clean().sendKeys("15");
    searchButton.click();
    expect(browser.getCurrentUrl()).toContain("dostawcza");
  });
  it("powinna  umożliwiać wyszukiwanie opon dla samochodów terenowych", async function () {
    const buttonTruck = await element(by.css("opony-wybor-button-jeep"));
    const searchButton = await element(by.id("btnSzukajOponyWgRozmiar"));
    buttonTruck.click();
    const width = await element(by.css("input[name='sz_input']"));
    width.clean().sendKeys("205");
    const height = await element(by.css("input[name='pr_input']"));
    width.clean().sendKeys("70");
    const diameter = await element(by.css("input[name='sr_input']"));
    width.clean().sendKeys("15");
    searchButton.click();
    expect(browser.getCurrentUrl()).toContain("dostawcza");
  });
  it("powinna umożliwiać zmianę domyślnej szerokości opon", async function () {
    await $$("span.k-select").get(0).click();
    await browser.sleep(1000);
    await element(by.xpath('//li[text()="215"]')).click();
    await browser.sleep(1000);
    const width = await $("#opona-szerokosc").getAttribute("value");
    expect(width).toEqual("215");
  });
});
it("powinna umożliwiać zmianę domyślnej szerokości opon", async function () {
  const width = await element(by.xpath('//li[text()="215"]')).click();
  await browser.sleep(1000);
  const newWidth = await element(by.css("input[name='sz_input']"));
  newWidth.clean().sendKeys("115");
  const value = newWidth.getAttribute("value");
  expect(value).toEqual("115");
});
