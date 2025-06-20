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
  ProductIMG,
  OfferPartCodes,
  Timer,
  TopImageTitle,
  AdditionalCategories,
  CategoryOneBannerWhite,
  CategoryOneBanner,
  CategoryOneLast,
  CategoryThree,
  CategoryThreeLast,
} from "../components/index.js";
import { OfferPart } from "../components/OfferPart.js";
import { OfferPartCode } from "../components/OfferPartCode.js";
import { priceFree } from "../helpers/priceFree.js";
import templates from "../main/data/templates.js";
import { getCodes } from "../utils/getCodes.js";

export async function BirthdayNL({
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
                          color: "#750000",
                          type: "birthday",
                        })}
                      `
                      }
                    </td>
                </tr>

              `
            }
            <tr>
                <td align="center">
                    ${ImageWithLink({
                        href: links[0],
                        src: links[2],
                    })}
                </td>
            </tr>
            <tr>
                <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
                    <table cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tbody>
                            <tr>
                                <td align="center">
                                    <span class="newsletterParagraph" style="color: ${categories[0]?.color || "#000000"}">
                                        ${queries.intro}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
              <td class="newsletterBottom35px"></td>
            </tr>
            <tr>
            <td style="background-color: ${categories[0]?.background || background}; color: ${categories[0]?.color || "#000000"}">
              <tbody>
              ${categories
                .map((item, index) => {
                  console.log(`Sprawdzam href dla kategorii ${index}:`, item.href);
              
                  if (index >= 5) return ""; // Obsługa tylko 5 kategorii
              
                  const isLast = index === 4;
                  const background = item.background || "#ffffff";
                  const color = item.color || "#000000";
                  const srcValue = item.src?.value || "";
              
                  const title = queries.categories[index] || "Default Title";
              
                  // Pobranie i zabezpieczenie listy produktów
                  const allProducts = Array.isArray(item.products) ? item.products : [];
              
                  // Produkt do linku (pierwszy)
                  const firstProductRaw = allProducts[0];
                  const firstProduct =
                    firstProductRaw && getProductById(firstProductRaw.id, firstProductRaw.src);
              
                  const href = firstProduct?.href || "#";
              
                  // Produkty 2, 3, 4 (indeksy 1, 2, 3)
                  const remainingProducts = allProducts.slice(1, 4);
                  const products = remainingProducts
                    .map((product) =>
                      product && getProductById(product.id, product.src)
                    )
                    .filter((p) => p); // Usuń undefined
              
                  const categoryComponent = isLast ? CategoryThreeLast : CategoryThree;
              
                  return `
                    <tr>
                      <td style="background-color: ${background}; color: ${color};">
                        ${categoryComponent({
                          href: getCategoryLink(item.href),
                          name: title,
                          src: item.src,
                          cta: getPhrase("Shop now"),
                          type: "monday",
                          color: color,
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