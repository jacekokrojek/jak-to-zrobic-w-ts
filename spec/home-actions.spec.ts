import { browser, element, by } from "protractor";

describe("Wyszukiwarka", function () {

  const url ="https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";

  beforeEach(async function () {
    await browser.get(url);
  });

  it("powinna mieć ustawioną domyślną szerokość opon", async function () {
    const width = await element(by.css("#opona-szerokosc")).getAttribute("value");
    expect(width).toEqual("205");
  });

  it("powinna mieć ustawioną domyślną wysokość opon", async function () {
    const height = await element(by.css("#opona-profil")).getAttribute("value");
    expect(height).toEqual("55");
  });

  it("powinna mieć ustawiony domyślny promień opon", async function () {
    const diameter = await element(by.css("#opona-srednica")).getAttribute("value");
    expect(diameter).toEqual("16");
  });

  it("powinna wyświetlić listę opon po naciśnięciu przycisku 'Szukaj opon'", async function () {
    let getTiresText = await element(by.css(".naglowekH1 > div:nth-child(1) > h1:nth-child(1)"));
    await element(by.css("#btnSzukajOponyWgRozmiar")).click();
    expect(getTiresText).toEqual("Lista Opon")
  });
});
