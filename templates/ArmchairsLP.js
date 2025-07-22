import { Footer } from "../components/footer.js";
import FreebiesGenerator from "../components/FreebiesGenerator.js";
import { Header } from "../components/header.js";
import {
  Line,
  WhiteLine,
  Category,
  CategoryOne,
  CategoryTwo,
  CategoryOld,
  CategoryOneLast,
  CategoryOneWithBanner,
  CategorySecond,
  GetCodeBlockNL,
  CategoryOneBanner,
  CategoryBlock,
  CategoryBlockOld,
  GetCode,
  Intro,
  Paragraph,
  ImageWithLink,
  Space,
  Title,
  Freebies,
  Product,
  ProductWithSize,
  OfferPartCodes,
} from "../components/index.js";
import { OfferPart } from "../components/OfferPart.js";
import { OfferPartCode } from "../components/OfferPartCode.js";
import { priceFree } from "../helpers/priceFree.js";
import { getCodes } from "../utils/getCodes.js";

export async function ArmchairsLP({
  links,
  getProductById,
  getCategoryLink,
  getCategoryTitle,
  getCategoryParagraph,
  getPhrase,
  getFooter,
  getHeader,
  queries,
  id,
  origin,
  country,
  type,
  categories,
  freebies,
  background,
  header,
  offerPart,
  intro,
}) {
  const codes = getCodes(queries);
  console.log(codes);

  const chairs = {
    CHDE: "https://www.beliani.ch/sessel/schaukelstuhl-de/",
    CHFR: "https://www.beliani.ch/fauteuils/chaises-a-bascule-fr/",
    UK: "https://www.beliani.co.uk/armchairs/rocking-chairs-en/",
    DE: "https://www.beliani.de/sessel/schaukelstuhl-de/",
    AT: "https://www.beliani.at/sessel/schaukelstuhl-de/",
    ES: "https://www.beliani.es/sillones/sillas-mecedoras-es/",
    PL: "https://www.beliani.pl/fotele/krzesla-bujane-pl/",
    NL: "https://www.beliani.nl/fauteuils/schommelstoelen-nl/",
    IT: "https://www.beliani.it/poltrone/sedie-a-dondolo-it/",
    PT: "https://www.beliani.pt/poltrona/cadeiras-de-baloico-pt/",
    HU: "https://www.beliani.hu/fotelek/hintaszekek-hu/",
    DK: "https://www.beliani.dk/lenestole/gyngestole-old-dk/",
    CZ: "https://www.beliani.cz/kresla/houpaci-zidle-cz/",
    FI: "https://www.beliani.fi/nojatuolit/keinutuolit-fi/",
    NO: "https://www.beliani.no/lenestoler/gyngestoler-no/",
    SK: "https://www.beliani.sk/kresla/hojdacka-kresla-sk/",
    SE: "https://www.beliani.se/fatolj/gungstolar-se/",
    FR: "https://www.beliani.fr/fauteuils/chaises-a-bascule-fr/",
  };

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
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${
    background || "#ffffff"
  }; color: #000;" id="newsletter">
        <tbody>
            <tr>
                <td align="center">
                    ${ImageWithLink({
                        href: links[0],
                        src: links[1],
                    })}
                </td>
            </tr>
            <tr>
                <td style="background-color: #FEB24D;">
                    ${CategoryOneWithBanner({
                      insidehref: links[3],
                      insidesrc: links[4],
                      href: getCategoryLink(categories[0].href),
                      name: queries?.categories[0]
                        ? queries.categories[0]
                        : getCategoryTitle(categories[0].name),
                      desc: queries.categories[1],
                      src: "https://upload.pictureserver.net/static/2025/250129category_01.png",
                      cta: getPhrase("Shop now"),
                      type: "wednesday",
                      products: categories[0].products.map((item) =>
                        getProductById(item.id, item.src)
                      ),
                    })}
                </td>
            </tr>
            <tr>
                <td style="background-color: #FFCCB7;">
                    ${CategoryOne({
                      href: getCategoryLink(categories[1].href),
                      name: queries?.categories[2]
                        ? queries.categories[2]
                        : getCategoryTitle(categories[1].name),
                      desc: queries.categories[3],
                      src: "https://upload.pictureserver.net/static/2025/250129category_02.png",
                      cta: getPhrase("Shop now"),
                      type: "wednesday",
                      products: categories[1].products.map((item) =>
                        getProductById(item.id, item.src)
                      ),
                    })}
                </td>
            </tr>
            <tr>
                <td style="background-color: #FEB24D;">
                    ${CategoryOne({
                      href: getCategoryLink(categories[2].href),
                      name: queries?.categories[4]
                        ? queries.categories[4]
                        : getCategoryTitle(categories[2].name),
                      desc: queries.categories[5],
                      src: "https://upload.pictureserver.net/static/2025/250129category_03.png",
                      cta: getPhrase("Shop now"),
                      type: "wednesday",
                      products: categories[2].products.map((item) =>
                        getProductById(item.id, item.src)
                      ),
                    })}
                </td>
            </tr>
            <tr>
                <td style="background-color: #FFCCB7;">
                    ${CategoryOneLast({
                      href: getCategoryLink(categories[3].href),
                      name: queries?.categories[6]
                        ? queries.categories[6]
                        : getCategoryTitle(categories[3].name),
                      desc: queries.categories[7],
                      src: "https://upload.pictureserver.net/static/2025/250129category_04.png",
                      cta: getPhrase("Shop now"),
                      type: "wednesday",
                      products: categories[3].products.map((item) =>
                        getProductById(item.id, item.src)
                      ),
                    })}
                </td>
            </tr>
            <tr>
                <td class="backgroundOne" style="background-color: "#FEB24D">
                    ${Space({ className: "newsletterBottom35px" })}
                </td>
            </tr>
            <tr>
                <td align="center" class="newsletterTitleContainer" style="background-color: #FEB24D">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                        <tr>
                            <td align="center">
                                <span class="newsletterTitle">
                                    ${queries.additional[0]}
                                </span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="backgroundOne">
                    ${Space({ className: "newsletterBottom35px" })}
                </td>
            </tr>
            <tr>
                <td align="center" class="newsletterProductContainer" style="background-color: #FEB24D;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                        <tr>
                            <td align="center" class="newsletterProductContainerLEFT70px" width="50%">
                                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                    <tbody>
                                        <tr>
                                            <td style="padding-left: 0px; padding-right: 0px;">
                                                <a href=${getCategoryLink(categories[4].href)}>
                                                    <img width="100%" src="https://upload.pictureserver.net/static/2025/250129category_05.png" style="display: block;" />
                                                </a>
                                                <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                        <td align="center">
                                                            <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #FEB24D;">
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="center" class="newsletterProductTitleContainer">
                                                                            <a href=${getCategoryLink(categories[4].href)} style="color: #000000; text-decoration: underline;" class="newsletterProductTitleLast">${queries.additional[1]}</a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td align="center" class="newsletterProductContainerRIGHT70px" width="50%">
                                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                    <tbody>
                                        <tr>
                                            <td style="padding-left: 0px; padding-right: 0px;">
                                                <a href=${getCategoryLink(categories[5].href)}>
                                                    <img width="100%" src="https://upload.pictureserver.net/static/2025/250129category_06.png" style="display: block;" />
                                                </a>
                                                <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td align="center">
                                                                <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #FEB24D;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="newsletterProductTitleContainer">
                                                                                <a href=${getCategoryLink(categories[5].href)} style="color: #000000; text-decoration: underline;" class="newsletterProductTitleLast">${queries.additional[2]}</a>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" class="newsletterProductContainerLEFT70px" width="50%">
                                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                    <tbody>
                                        <tr>
                                            <td style="padding-left: 0px; padding-right: 0px;">
                                                <a href=${getCategoryLink(categories[6].href)}>
                                                    <img width="100%" src="https://upload.pictureserver.net/static/2025/250129category_07.png" style="display: block;" />
                                                </a>
                                                <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td align="center">
                                                                <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #FEB24D;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="newsletterProductTitleContainer">
                                                                                <a href=${getCategoryLink(categories[6].href)} style="color: #000000; text-decoration: underline;" class="newsletterProductTitleLast">${queries.additional[3]}</a>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td align="center" class="newsletterProductContainerRIGHT70px" width="50%">
                                <table align="center" cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                    <tbody>
                                        <tr>
                                            <td style="padding-left: 0px; padding-right: 0px;">
                                                <a href=${getCategoryLink(categories[7].href)}>
                                                    <img width="100%" src="https://upload.pictureserver.net/static/2025/250129category_08.png" style="display: block;" />
                                                </a>
                                                <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td align="center">
                                                                <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #FEB24D;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="newsletterProductTitleContainer">
                                                                                <a href=${getCategoryLink(categories[7].href)} style="color: #000000; text-decoration: underline;" class="newsletterProductTitleLast">${queries.additional[4]}</a>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
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
                    exclude: ["CHIT"].includes(country),
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
                    exclude: ["SK", "HU", "BEFR", "BENL"].includes(country),
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