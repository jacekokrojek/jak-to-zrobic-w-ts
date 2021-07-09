import { browser, $, $$, element, by} from "protractor";

describe("Strona główna bestdrive", function () {

  const url = "https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";



  it("powinna mieć tytuł: Bestdrive - Opony online - bestdrive.webshop.pl", async function () {
    await browser.get(url);
    const title = await browser.getTitle();
    expect(title).toMatch('Bestdrive - Opony online - bestdrive.webshop.pl');
  });

  it("powinna wyświetlać nazwę wybranego serwisu", async function() {
    await browser.get(url);
    const serviceName = await $('.serwis-nazwa').getText();
    expect(serviceName).toEqual('Navigator');
  });

  it("powinna domyślnie wyświetlać wyszukiwarkę opon wg. rozmiaru", async function() {
    await browser.get(url);
    
    let getSizeForm = await element(by.id('WyborOpon'));
    expect(getSizeForm.isPresent()).toBe(true);
  });

  it("powinna posiadac menu zawierajace: 'OPONY WG ROZMIARU', 'OPONY WG POJAZDU,'PROMOCJE','KOSZYK (0)'", async function() {
    const  menuItems = ['OPONY WG ROZMIARU', 'OPONY WG POJAZDU', 'PROMOCJE', 'KOSZYK (0)', '' ];
    await browser.get(url);
    const getMenuItems = await element.all(by.css('ul.nav li')).map((el)=>{
      return el.getText();
    })
    expect(getMenuItems).toEqual(menuItems);
  });

  it("powinna posiadac menu z pierwszym elementem 'OPONY WG ROZMIARU'", async function() {
    await browser.get(url);
    const getTextFromMenu = await $$('ul.nav li').get(0).getText();
    expect(getTextFromMenu).toEqual('OPONY WG ROZMIARU');
  });
  xit("powinna posiadac stopkę z linkami do ...", async function() {

  });

});