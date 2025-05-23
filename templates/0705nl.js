import { Footer } from "../components/footer.js";
import { Header } from "../components/header.js";
import {
  Line,
  Category,
  Intro,
  Paragraph,
  ImageWithLink,
  Space,
  Product,
  OfferPartCodes,
  Timer,
  TopImageTitle,
  AdditionalCategories,
  CategoryOneBannerWhite,
  CategoryOneBanner,
  CategoryOneLast,
} from "../components/index.js";
import { OfferPart } from "../components/OfferPart.js";
import { OfferPartCode } from "../components/OfferPartCode.js";
import { priceFree } from "../helpers/priceFree.js";
import templates from "../main/data/templates.js";
import { getCodes } from "../utils/getCodes.js";

export async function GardenMayNL({
  links,
  getProductById,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getFooter,
  getHeader,
  queries,
  id,
  origin,
  country,
  type,
  categories,
  categories_add,
  background,
  header,
  offerPart,
  intro,
  timer,
  data,
  item,
  add_utm
}) {
  const codes = getCodes(queries);
  const timer_link = {
    CHDE: [""],
    CHFR: [""],
    UK: [""],
    DE: [""],
    FR: [""],
    AT: [""],
    ES: [""],
    PL: [""],
    NL: [""],
    PT: [""],
    IT: [""],
    SE: [""],
    HU: [""],
    DK: [""],
    CZ: [""],
    FI: [""],
    NO: [""],
    SK: [""],
  };

  const cat1 = {
    UK: "https://www.beliani.co.uk/garden-furniture/all+products/?Style=Boho?utm_source=newsletter&utm_medium=email&utm_campaign=33015",
    PL: "https://www.beliani.pl/ogrod/wszystkie+produkty/?Styl=Boho&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33010",
    DE: "https://www.beliani.de/gartenmoebel/alle+produkte/?Stil=Boho&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33002",
    AT: "https://www.beliani.at/gartenmoebel/alle+produkte/?Stil=Boho&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33000",
    CHDE: "https://www.beliani.ch/gartenmoebel/alle+produkte/?Stil=Boho&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=32998",
    NL: "https://www.beliani.nl/tuinmeubelen/alle+producten/?Stijl=Boho&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33008",
    FR: "https://www.beliani.fr/meubles-de-jardin/tous+les+produits/looks/?Style=Boho&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33005",
    CHFR: "https://www.beliani.ch/meubles-de-jardin/tous+les+produits/looks/?Style=Boho&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=32999",
    ES: "https://www.beliani.es/jardin/muebles-de-exterior/todos+los+productos/looks/?Estilo=Boho&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33014",
    PT: "https://www.beliani.pt/mobiliario-de-jardim/todos+os+produtos/?Estilo=Boho&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33011",
    IT: "https://www.beliani.it/giardino/tutti+i+prodotti/?Stile=Boho&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33007",
    DK: "https://www.beliani.dk/havemobler/alle+produkter/looks/?Stil=Boho&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33003",
    NO: "https://www.beliani.no/hagemoebler/alle+produkter/?Stil=Boho&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33009",
    FI: "https://www.beliani.fi/puutarhakalusteet/kaikki+tuotteet/looks/?Tyyli=Boho&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33004",
    SE: "https://www.beliani.se/tradgardsmobler/alla+produkter/?Stil=Boho?utm_source=newsletter&utm_medium=email&utm_campaign=33012",
    CZ: "https://www.beliani.cz/zahradni-nabytek/v%C5%A1echny+produkty/?Styl=Boho?utm_source=newsletter&utm_medium=email&utm_campaign=33001",
    SK: "https://www.beliani.sk/zahrada/zobrazit+vsetky+produkty/?Styl=Boho?utm_source=newsletter&utm_medium=email&utm_campaign=33013",
    HU: "https://www.beliani.hu/kulter/minden+termek/?Stilus=Boho&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33006",
  };

  const cat2 = {
    UK: "https://www.beliani.co.uk/garden-furniture/all+products/?Style=Scandinavian&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33015",
    PL: "https://www.beliani.pl/ogrod/wszystkie+produkty/?Styl=Skandynawski&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33010",
    DE: "https://www.beliani.de/gartenmoebel/alle+produkte/?Stil=Skandinavisch&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33002",
    AT: "https://www.beliani.at/gartenmoebel/alle+produkte/?Stil=Skandinavisch&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33000",
    CHDE: "https://www.beliani.ch/gartenmoebel/alle+produkte/?Stil=Skandinavisch&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=32998",
    NL: "https://www.beliani.nl/tuinmeubelen/alle+producten/?Stijl=Scandinavisch&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33008",
    FR: "https://www.beliani.fr/meubles-de-jardin/tous+les+produits/looks/?Style=Scandinave&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33005",
    CHFR: "https://www.beliani.ch/meubles-de-jardin/tous+les+produits/looks/?Style=Scandinave&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=32999",
    ES: "https://www.beliani.es/jardin/muebles-de-exterior/todos+los+productos/looks/?Estilo=Escandinavo&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33014",
    PT: "https://www.beliani.pt/mobiliario-de-jardim/todos+os+produtos/?Estilo=Escandinavo&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33011",
    IT: "https://www.beliani.it/giardino/tutti+i+prodotti/?Stile=Scandinavo&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33007",
    DK: "https://www.beliani.dk/havemobler/alle+produkter/looks/?Stil=Skandinavisk&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33003",
    NO: "https://www.beliani.no/hagemoebler/alle+produkter/?Stil=Skandinavisk&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33009",
    FI: "https://www.beliani.fi/puutarhakalusteet/kaikki+tuotteet/?Tyyli=Skandinaavinen?utm_source=newsletter&utm_medium=email&utm_campaign=33004",
    SE: "https://www.beliani.se/tradgardsmobler/alla+produkter/?Stil=Skandinavisk?utm_source=newsletter&utm_medium=email&utm_campaign=33012",
    CZ: "https://www.beliani.cz/zahradni-nabytek/v%C5%A1echny+produkty/?Styl=Skandinavsky?utm_source=newsletter&utm_medium=email&utm_campaign=33001",
    SK: "https://www.beliani.sk/zahrada/zobrazit+vsetky+produkty/?Styl=Skandinavsky&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33013",
    HU: "https://www.beliani.hu/kulter/minden+termek/?Stilus=Skandinav&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33006",
  };

  const cat3 = {
    UK: "https://www.beliani.co.uk/garden-furniture/outdoor-furniture/all+products/?Style=Traditional&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33015",
    PL: "https://www.beliani.pl/ogrod/meble-ogrodowe/wszystkie+produkty/?Styl=Klasyczny&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33010",
    DE: "https://www.beliani.de/gartenmoebel/alle+produkte/?Stil=Klassisch&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33002",
    AT: "https://www.beliani.at/gartenmoebel/alle+produkte/?Stil=Klassisch&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33000",
    CHDE: "https://www.beliani.ch/gartenmoebel/alle+produkte/?Stil=Klassisch&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=32998",
    NL: "https://www.beliani.nl/tuinmeubelen/alle+producten/?Stijl=Traditioneel&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33008",
    FR: "https://www.beliani.fr/meubles-de-jardin/tous+les+produits/looks/?Style=Traditionnel&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33005",
    CHFR: "https://www.beliani.ch/meubles-de-jardin/tous+les+produits/looks/?Style=Traditionnel&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=32999",
    ES: "https://www.beliani.es/jardin/muebles-de-exterior/todos+los+productos/looks/?Estilo=Tradicional&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33014",
    PT: "https://www.beliani.pt/mobiliario-de-jardim/todos+os+produtos/?Estilo=Tradicional&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33011",
    IT: "https://www.beliani.it/arredo-giardino/tutti+i+prodotti/?Stile=Classico&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33007",
    DK: "https://www.beliani.dk/havemobler/alle+produkter/looks/?Stil=Traditionel&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33003",
    NO: "https://www.beliani.no/hagemoebler/alle+produkter/?Stil=Klassisk&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33009",
    FI: "https://www.beliani.fi/puutarhakalusteet/kaikki+tuotteet/?Tyyli=Perinteinen?utm_source=newsletter&utm_medium=email&utm_campaign=33004",
    SE: "https://www.beliani.se/tradgardsmobler/alla+produkter/?Stil=Traditionell?utm_source=newsletter&utm_medium=email&utm_campaign=33012",
    CZ: "https://www.beliani.cz/venkovni-nabytek/v%C5%A1echny+produkty/?Styl=Tradicni?utm_source=newsletter&utm_medium=email&utm_campaign=33001",
    SK: "https://www.beliani.sk/zahrada/zobrazit+vsetky+produkty/?Styl=Tradicny&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33013",
    HU: "https://www.beliani.hu/kerti-garniturak/kulter/minden+termek/?Stilus=Klasszikus&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33006",
  };

  const cat4 = {
    UK: "https://www.beliani.co.uk/garden-furniture/all+products/?Style=Cottage?utm_source=newsletter&utm_medium=email&utm_campaign=33015",
    PL: "https://www.beliani.pl/ogrod/wszystkie+produkty/?Styl=Cottage?utm_source=newsletter&utm_medium=email&utm_campaign=33010",
    DE: "https://www.beliani.de/gartenmoebel/alle+produkte/?Stil=Landhausstil&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33002",
    AT: "https://www.beliani.at/gartenmoebel/alle+produkte/?Stil=Landhausstil&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33000",
    CHDE: "https://www.beliani.ch/gartenmoebel/alle+produkte/?Stil=Landhausstil&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=32998",
    NL: "https://www.beliani.nl/tuinmeubelen/alle+producten/?Stijl=Cottage&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33008",
    FR: "https://www.beliani.fr/meubles-de-jardin/tous+les+produits/looks/?Style=Cottage&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33005",
    CHFR: "https://www.beliani.ch/meubles-de-jardin/tous+les+produits/looks/?Style=Cottage&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=32999",
    ES: "https://www.beliani.es/jardin/muebles-de-exterior/todos+los+productos/looks/?Estilo=Campestre&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33014",
    PT: "https://www.beliani.pt/mobiliario-de-jardim/todos+os+produtos/?Estilo=Casa_de_campo&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33011",
    IT: "https://www.beliani.it/arredo-giardino/tutti+i+prodotti/?Stile=Cottage&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33007",
    DK: "https://www.beliani.dk/havemobler/alle+produkter/looks/?Stil=Sommerhus&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33003",
    NO: "https://www.beliani.no/hagemoebler/alle+produkter/?Stil=Cottage&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33009",
    FI: "https://www.beliani.fi/puutarhakalusteet/kaikki+tuotteet/?Tyyli=Mokkimainen?utm_source=newsletter&utm_medium=email&utm_campaign=33004",
    SE: "https://www.beliani.se/tradgardsmobler/alla+produkter/?Stil=Lantlig?utm_source=newsletter&utm_medium=email&utm_campaign=33012",
    CZ: "https://www.beliani.cz/zahradni-nabytek/v%C5%A1echny+produkty/?Styl=Cottage?utm_source=newsletter&utm_medium=email&utm_campaign=33001",
    SK: "https://www.beliani.sk/zahrada/zobrazit+vsetky+produkty/?Styl=Cottage&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33013",
    HU: "https://www.beliani.hu/kerti-garniturak/kulter/minden+termek/?Stilus=Videki&sort=default?utm_source=newsletter&utm_medium=email&utm_campaign=33006",
  };

  const categoryLinks = [cat1, cat2, cat3, cat4];
  
  return `
  ${Header(
    {
      id,
      advantages: {
        freeDelivery: getHeader("Free Delivery"),
        daysReturn: getHeader("365-Day Return"),
      },
      paragraph: {
        troubleViewing: getHeader("Trouble viewing"),
        troubleViewingHrefText: getHeader("Trouble viewing href text"),
        addBeliani: getHeader("Add Beliani to your"),
        whiteList: getHeader("Whitelist"),
        whitelistHref: getHeader("Whitelist href"),
      },
      topImage: {
        src: getHeader("Top image src"),
        href: getHeader("Top image href"),
      },
      categories: {
        firstCategory: {
          src: getHeader("Header Category 1 src"),
          href: getHeader("Header Category 1 href"),
        },
        secondCategory: {
          src: getHeader("Header Category 2 src"),
          href: getHeader("Header Category 2 href"),
        },
        thirdCategory: {
          src: getHeader("Header Category 3 src"),
          href: getHeader("Header Category 3 href"),
        },
      },
      assembly: {
        src: ["AT", "PL", "FR", "UK"].includes(country)
          ? ["#fd9000"].includes(background)
            ? getHeader("Header delivery_cosy src")
            : getHeader("Header delivery src")
          : ["#750000"].includes(background)
          ? getHeader("Header asembly src")
          : getHeader("Header asembly_cosy src"),
        href: getHeader("Header asembly href"),
        exclude: true,
      },
    },
    { type }
  )}
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${background}; color: #000;" id="newsletter">
        <tbody>
            ${type === "newsletter"
              ? `
                <tr>
                    <td align="center">
                      ${ImageWithLink({
                        href: links[0],
                        src: links[1],
                      })}
                    </td>
                </tr>
              `
              : `
                <tr>
                    <td align="center">
                      ${!queries.tit ?
                      `
                        ${ImageWithLink({
                          href: links[0],
                          src: links[1],
                        })}
                      `
                      :
                      `
                        ${TopImageTitle({
                          href: links[0],
                          title1: queries.tit[0],
                          title2: queries.tit[1],
                          color: "#000000",
                          type: "twoSameLines",
                        })}
                      `
                      }
                    </td>
                </tr>

              `
            }
            <tr>
            <td style="background-color: ${categories[0]?.background || background}; color: ${categories[0]?.color || "#000000"}">
              <tbody>
                ${categories
                  .map((item, index) => {
                    console.log(`Sprawdzam href dla kategorii ${index}:`, item.href);
          
                    const isLast = index === categories.length - 1; // Sprawdzenie, czy to ostatni element
                    const background = item.background; // Domyślny kolor tła
                    const color = item.color; // Domyślny kolor tekstu
                    const srcValue = item.src?.value || ""; // Pobranie `value`, jeśli istnieje
          
                    // Pobieranie poprawnego indeksu dla `queries.categories`
                    const dataIndex = index * 2; 
                    if (dataIndex >= queries.categories.length) return ""; // Zabezpieczenie przed wyjściem poza zakres
          
                    const title = queries.categories[dataIndex] || "Default Title";
                    const paragraph = queries.categories[dataIndex + 1] || "Default Paragraph";
                    
                    // Wybór komponentu na podstawie pozycji (pierwszy, ostatni, inny)
                    let categoryComponent;
                    if (index === 3) {
                      categoryComponent = CategoryOneLast; // Używamy CategoryOneLast dla ostatniej kategorii
                    } else {
                      categoryComponent = Category; // Dla pozostałych używamy Category
                    }
          
                    return `
                      <tr>
                        <td style="background-color: ${background}; color: ${color};">
                          ${categoryComponent({
                            data: [title, paragraph], // Przekazanie poprawnej pary danych
                            href: categoryLinks[index]?.[country],
                            name: title,
                            color: item.color,
                            desc: paragraph,
                            src: item.src,
                            cta: getPhrase("Shop now"),
                            type: "wednesday",
                            products: item.products?.map((product) =>
                              getProductById(product.id, product.src)
                            ) || [],
                          })}
                        </td>
                      </tr>
                    `;
                  })
                  .join("")}
              </tbody>
            </td>
          </tr>
          <tr>
              <td style="background-color: ${categories[4]?.background || "#ffffff"}; color: ${categories[4]?.color || "#000000"}">
                  ${Space({ className: "newsletterBottom35px" })}
              </td>
          </tr>
          <tr>
            <td align="center" style="background-color: ${categories[4]?.background || "#ffffff"}; color: ${categories[4]?.color || "#000000"}">
              <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                  <td align="center" class="newsletterBottom35px">
                    <span class="newsletterTitle">${queries.additionalt[0]}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" class="newsletterProductContainerLast" style="background-color: ${categories[4]?.background || "#ffffff"}; color: ${categories[4]?.color || "#000000"}">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    ${[0, 1].map(rowIndex => `
                    <tr>
                      ${[0, 1].map(colIndex => {
                      const index = rowIndex * 2 + colIndex;
                      if (!categories_add[index]) return "";
                        return `
                          ${AdditionalCategories({
                            name: queries.additional[index],
                            href: getCategoryLink(categories_add[index].href),
                            src: categories_add[index].src,
                          })}
                        `;
                      }).join("")}
                    </tr>
                    `).join("")}
                </table>
            </td>
          </tr>
        <tbody>
      </table>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
          <tbody>
              <tr>
                  <td align="left">
                      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tbody>
                          <tr>
                            <td class="newsletterBottom35px" >
                              ${Line()}
                            </td>
                          </tr>
                              <tr>
                                  <td align="left" class="newsletterBottom35px">
                                      <span class="newsletterFooterTitle">${getPhrase(
                                        "Shop limited-time deals"
                                      )}</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td align="left" class="newsletterBottom20px">
                                      <a href=${links[5]}>
                                          <img loading="lazy" src=${
                                            links[6]
                                          } style="display: block;" width="100%">
                                      </a>
                                  </td>
                              </tr>
                              <tr>
                                  <td align="left" class="newsletterBottom35px">
                                      <a href=${links[7]}>
                                          <img loading="lazy" src=${
                                            links[8]
                                          } style="display: block;" width="100%">
                                      </a>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table>
      ${Footer(
        {
          id,
          assembly: {
            src: ["AT", "PL", "FR", "UK"].includes(country)
              ? getFooter("Delivery src")
              : getFooter("Asembly src"),
            href: getFooter("Asembly href"),
            exclude: ["CHIT"].includes(
              country
            ),
          },
          workBanner: {
            src: getFooter("Job src"),
            href: getFooter("Job href"),
            exclude: !["PL"].includes(country),
          },
          thousandsMore: {
            title: getFooter("Title"),
            firstCategory: {
              src: getFooter("Category src 1"),
              href: getFooter("Category href 1"),
            },
            secondCategory: {
              src: getFooter("Category src 2"),
              href: getFooter("Category href 2"),
            },
            thirdCategory: {
              src: getFooter("Category src 3"),
              href: getFooter("Category href 3"),
            },
            foutrthCategory: {
              src: getFooter("Category src 4"),
              href: getFooter("Category href 4"),
            },
            fifthCategory: {
              src: getFooter("Category src 5"),
              href: getFooter("Category href 5"),
            },
            sixthCategory: {
              src: getFooter("Category src 6"),
              href: getFooter("Category href 6"),
            },
            seventhCategory: {
              src: getFooter("Category src 7"),
              href: getFooter("Category href 7"),
            },
            eigthCategory: {
              src: getFooter("Category src 8"),
              href: getFooter("Category href 8"),
            },
          },
          klarna: {
            src: getFooter("Klarna src"),
            href: getFooter("Klarna href"),
          },
          socials: {
            title: getFooter("Socials Title"),
            instagram: {
              src: getFooter("Instagram src"),
              href: getFooter("Instagram href"),
            },
            facebook: {
              src: getFooter("Facebook src"),
              href: getFooter("Facebook href"),
            },
            youtube: {
              src: getFooter("Youtube src"),
              href: getFooter("Youtube href"),
            },
            pinterest: {
              src: getFooter("Pinterest src"),
              href: getFooter("Pinterest href"),
            },
            Xsocial: {
              src: getFooter("X src"),
              href: getFooter("X href"),
            },
            Tiktok: {
              src: getFooter("Tiktok src"),
              href: getFooter("Tiktok href"),
            },
          },
          advantages: {
            firstAdvantage: {
              src: getFooter("Advantages src 1"),
              href: getFooter("Advantages href 1"),
            },
            secondAdvantage: {
              src: getFooter("Advantages src 2"),
              href: getFooter("Advantages href 2"),
            },
            thirdAdvantage: {
              src: getFooter("Advantages src 3"),
              href: getFooter("Advantages href 3"),
            },
            fourthAdvantage: {
              src: getFooter("Advantages src 4"),
              href: getFooter("Advantages href 4"),
            },
          },
          conditions: {
            conditionsTitle: getFooter("Conditions title"),
            conditionsText: queries.condition,
          },
          companyDetails: {
            title: getFooter("Company Details"),
            address: getFooter("Address"),
            mobileNumber: getFooter("Mobile number"),
            emailAddress: getFooter("Email address"),
            mailTo: getFooter("Mail to"),
            email: getFooter("Email"),
            commercialRegister: getFooter("Commercial register"),
            vat: getFooter("VAT"),
          },
        },
        { type }
      )}
    `;
}