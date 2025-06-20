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
  MyIntro,
  FreeTimer,
  fCategory,
  sCategory,
} from "../components/index.js";
import { OfferPart } from "../components/OfferPart.js";
import { OfferPartCode } from "../components/OfferPartCode.js";
import { priceFree } from "../helpers/priceFree.js";
import templates from "../main/data/templates.js";
import { getCodes } from "../utils/getCodes.js";

export async function Side({
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
    CHDE: ["https://gen.sendtric.com/countdown/yphrv0c8e4"],
    CHFR: ["https://gen.sendtric.com/countdown/109q8k3ae5"],
    UK: ["https://gen.sendtric.com/countdown/m4v39y0fmq"],
    DE: ["https://gen.sendtric.com/countdown/yphrv0c8e4"],
    FR: ["https://gen.sendtric.com/countdown/109q8k3ae5"],
    AT: ["https://gen.sendtric.com/countdown/yphrv0c8e4"],
    ES: ["https://gen.sendtric.com/countdown/25cnia754m"],
    PL: ["https://gen.sendtric.com/countdown/c6gflgql4u"],
    NL: ["https://gen.sendtric.com/countdown/8jva613dg1"],
    PT: ["https://gen.sendtric.com/countdown/5mxfwdonog"],
    IT: ["https://gen.sendtric.com/countdown/c4igrk0cls"],
    SE: ["https://gen.sendtric.com/countdown/1mkweovnb7"],
    HU: ["https://gen.sendtric.com/countdown/f519kcvre8"],
    DK: ["https://gen.sendtric.com/countdown/dwuzd030m6"],
    CZ: ["https://gen.sendtric.com/countdown/7cn51cxr6y"],
    FI: ["https://gen.sendtric.com/countdown/am7xdtju91"],
    NO: ["https://gen.sendtric.com/countdown/h325rin9g4"],
    SK: ["https://gen.sendtric.com/countdown/v7ksb5886v"],
    BENL: ["https://gen.sendtric.com/countdown/8jva613dg1"],
    BEFR: ["https://gen.sendtric.com/countdown/109q8k3ae5"],
    RO: ["https://gen.sendtric.com/countdown/iavokpsy13"],
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
                          type: "up_to",
                        })}
                      `
                      }
                    </td>
                </tr>

              `
            }
            <tr>
                <td style="background-color: #ffcbb8;">
                    ${MyIntro({
                        href: links[0],
                        src:  links[2],
                        cathref: getCategoryLink(categories[0].href),
                        paragraph1: queries.categories[0],
                        paragraph2: queries.shopnow[0],
                    })}
                </td>
            </tr>
            <tr>
                <td style="background-color: #f6e7e6;">
                    ${Timer({
                        title: queries.timer[0],
                        subtitle: queries.timer[1],
                        href: links[5],
                        imageSrc: timer_link[country],
                        cta: queries.shopnow[0],
                        insidehref: links[5],
                        insidesrc: links[3],
                    })}
                </td>
            </tr>
            <tr>
                <td style="background-color: #ffcbb8;">
                    ${fCategory({
                        name: queries.categories[1],
                        desc: queries.categories[2],
                        href: getCategoryLink(categories[0].href),
                        cta: getPhrase("Shop now"),
                        products: categories[0].products.map((item) =>
                            getProductById(item.id, item.src)
                      ),
                    })}
                </td>
            </tr>
            <tr>
                <td style="background-color: #ffcbb8;">
                    ${sCategory({
                        name: queries.categories[3],
                        desc: queries.categories[4],
                        href: getCategoryLink(categories[1].href),
                        cta: getPhrase("Shop now"),
                        products: categories[1].products.map((item) =>
                            getProductById(item.id, item.src)
                      ),
                    })}
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
                                      <a href=${links[6]}>
                                          <img loading="lazy" src=${
                                            links[7]
                                          } style="display: block;" width="100%">
                                      </a>
                                  </td>
                              </tr>
                              <tr>
                                  <td align="left" class="newsletterBottom35px">
                                      <a href=${links[8]}>
                                          <img loading="lazy" src=${
                                            links[9]
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
              href: getCategoryLink("https://www.beliani.co.uk/sofas/all+products"),//href: getFooter("Category href 1"),
            },
            secondCategory: {
              src: getFooter("Category src 2"),
              href: getCategoryLink("https://www.beliani.co.uk/beds/all+products"),//href: getFooter("Category href 2"),
            },
            thirdCategory: {
              src: getFooter("Category src 3"),
              href: getCategoryLink("https://www.beliani.co.uk/tables/coffee-tables"),//href: getFooter("Category href 3"),
            },
            foutrthCategory: {
              src: getFooter("Category src 4"),
              href: getCategoryLink("https://www.beliani.co.uk/chairs/all+products"),//href: getFooter("Category href 4"),
            },
            fifthCategory: {
              src: getFooter("Category src 5"),
              href: getCategoryLink("https://www.beliani.co.uk/armchairs/all+products"),//href: getFooter("Category href 5"),
            },
            sixthCategory: {
              src: getFooter("Category src 6"),
              href: getCategoryLink("https://www.beliani.co.uk/storage/sideboards"),//href: getFooter("Category href 6"),
            },
            seventhCategory: {
              src: getFooter("Category src 7"),
              href: getCategoryLink("https://www.beliani.co.uk/lighting/all+products"),//href: getFooter("Category href 7"),
            },
            eigthCategory: {
              src: getFooter("Category src 8"),
              href: getCategoryLink("https://www.beliani.co.uk/rugs/all+products"),//href: getFooter("Category href 8"),
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