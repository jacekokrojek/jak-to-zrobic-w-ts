import { browser, $, $$, element, by, protractor } from "protractor";

describe("Strona główna bestdrive", function () {

  const url = "https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";

  // beforeAll(async function(){
  //   await browser.get(url);
  // });

  it("powinna mieć tytuł: BestDrive sklep - Strona główna", async function () {
    await browser.get(url);
    const title = await browser.getTitle();
    expect(title).toMatch('BestDrive sklep - Strona główna');
  });

  it("powinna wyświetlać nazwę wybranego serwisu", async function() {
    await browser.get(url);
    const serviceName = await $('.serwis-nazwa').getText();
    expect(serviceName).toEqual('Navigator');
  });

  xit("powinna domyślnie wyświetlać wyszukiwarkę opon wg. rozmiaru", async function() {
    //await browser.get(url);
    //const defaultSearch ...
    //expect(defaultSearch).toEqual(...)
  });

  it("powinna posiadac menu zawierajace: 'OPONY WG ROZMIARU', 'OPONY WG POJAZDU,'PROMOCJE','KOSZYK (0)'", async function() {
    await browser.get(url);
    const nav = await $$('ul.nav li').getText();
    expect(nav).toEqual([ 'OPONY WG ROZMIARU', 'OPONY WG POJAZDU', 'PROMOCJE', 'KOSZYK (0)', '' ]);
  });

  it("powinna posiadac menu z pierwszym elementem 'OPONY WG ROZMIARU'", async function() {
    await browser.get(url);
    const nav = await $$('ul.nav li').get(0).getText();
    expect(nav).toEqual('OPONY WG ROZMIARU');
  });

  it("powinna posiadac stopkę z linkami do ...", async function() {
    //await browser.get(url);
    //const nav 
    //expect(nav).toEqual();
  });

});