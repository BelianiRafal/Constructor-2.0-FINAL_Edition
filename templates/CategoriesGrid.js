<<<<<<< HEAD
import { Create2Columns_Grid } from "../components/Create2Columns_Grid.js";
=======
import { Create2Columns } from "../components/Create2Columns.js";
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
import { Footer } from "../components/footer.js";
import { Header } from "../components/header.js";
import {
  Line,
  Category,
  GetCode,
  Intro,
  Paragraph,
  ImageWithLink,
  Space,
  Freebies,
  Product,
  ProductWithSize,
  Image,
  Title,
} from "../components/index.js";

export async function CategoriesGrid({
  links,
  getProductById,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getFooter,
  getHeader,
  queries,
  id,
  shop,
  country,
  type,
  categories,
  background,
}) {
<<<<<<< HEAD
  console.log(categories);
=======
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
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
              <tr>
                  <td align="center">
                    ${ImageWithLink({
                      href: links[0],
                      src: links[1],
                    })}
                  </td>
              </tr>
              <tr>
<<<<<<< HEAD
                <td >
                    ${Space()}
                </td>
              </tr>
              <tr>
                <td style="background-color: ${background};" class="newsletterContainer">
                  ${Intro({
                    type: "paragraph",
                    paragraph: "Gib den Code beim Checkout ein, um 10% Rabatt zu erhalten.",
                    align: "center",
                    color: "#000",
                  })}
                </td>
              </tr>
              <tr>
                <td >
                    ${Space({ className: "newsletterBottom20px" })}
                </td>
              </tr>
              <tr>
                <td style="background-color: ${background};" class="newsletterContainer">
                  ${Intro({
                    type: "paragraph",
                    paragraph: "Code: Mai25",
                    align: "center",
                    color: "#000",
                  })}
                </td>
              </tr>
              <tr>
                <td >
                  ${Space({ className: "newsletterBottom20px" })}
                </td>
              </tr>
              <tr>
                <td style="background-color: ${background};" class="newsletterContainer">
                  ${Intro({
                    type: "paragraph",
                    paragraph: "Dieses Angebot ist zeitlich begrenzt. Gültig nur bis zum 31. Mai.",
                    align: "center",
                    color: "#000",
                  })}
                </td>
              </tr>
              <tr>
                <td >
=======
                  <td align="center">
                    ${ImageWithLink({
                      href: links[2],
                      src: links[3],
                    })}
                  </td>
              </tr>

              <tr>
                <td align="center" style="background-color: ${background};" class="newsletterContainer">
                    ${Space({className: "newsletterBottom35px"})}
                    ${Intro({
                      title: {
                        value: queries.offerPart[0],
                        className: "newsletterTitleOfferPart"
                      },
                      paragraph: queries.offerPart[1],
                      align: "center",
                      spaceClassName: null,
                    })}
                    ${Space({className: "newsletterBottom20px"})}
                    ${Intro({
                      title: {
                        value: queries.offerPart[2],
                        className: "newsletterTitleOfferPart"
                      },
                      paragraph: queries.offerPart[3],
                      align: "center",
                      spaceClassName: null,
                    })}
                    ${Space({className: "newsletterBottom60px"})}
                    ${GetCode({
                      type,
                      link: links[0],
                      code: type === "newsletter" ? getPhrase("Get code") : queries.code
                    })}
                    ${Space({className: "newsletterBottom60px"})}
                    ${Paragraph(queries.offerDate, 'center')}
                    ${Space({className: "newsletterBottom20px"})}
                    ${GetCode({
                      type: "newsletter",
                      link: getCategoryLink("https://www.beliani.ch/bedroom-furniture/mattresses/"),
                      code: queries.shopAllMattrasses
                    })}
                    ${Space({className: "newsletterBottom80px"})}
                </td>
              </tr>

              <tr>
                <td align="center" style="background-color: ${background};" class="newsletterContainer">
                    ${Line()}
                    ${Space()}
                    ${Intro({
                      data: queries.intro,
                      align: "center"
                    })}
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
                    ${Space()}
                </td>
              </tr>

              <tr>
                <td style="background-color: ${background};" class="newsletterContainer">
<<<<<<< HEAD
                    ${Create2Columns_Grid({
                      shuffle: false,
                      iter: categories,
                      left: (computed) => `
                        <td width="50%" style="padding-left:6px">
                          <a href="${getCategoryLink(computed.href)}">
                              <img alt="" src="${
                                typeof computed.src === "object" ? computed.src.value : computed.src
                              }" style="max-width: 100%; display:block;" loading="lazy">
=======
                    ${Create2Columns({
                      shuffle: true,
                      iter: categories,
                      left: (computed) => `
                        <td align="left" width="50%">
                          <a href="${getCategoryLink(computed.href)}">
                              <img alt="" src="${
                                computed.src
                              }" style="vertical-align: middle; max-width: 100%;" loading="lazy">
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
                          </a>
                        </td>
                      `,
                      right: (computed) => `
<<<<<<< HEAD
                        <td width="50%" style="padding-right:6px">
                          <a href="${getCategoryLink(computed.href)}">
                            <img alt="" src="${
                              typeof computed.src === "object" ? computed.src.value : computed.src
                            }" style="max-width: 100%; display:block;" loading="lazy">
                          </a>
                        </td>
                      `,
                      cta: getPhrase("Shop All Categories"),
                      color: "#000",
                      align: "center",
                      href:
                        type === "newsletter"
                          ? shop.origin + "?utm_source=newsletter&utm_medium=email&utm_campaign=" + id
                          : shop.origin,
                      type,
=======
                        <td align="center" width="50%" style="background-color: #ff2f00; vertical-align: middle;">
                          <span class="newsletterTitle" style="color: ${computed.color || "#000000"}; ">
                            ${getCategoryTitle(computed.name)}
                          </span>
                          <br>
                          <br>
                          <a href="${getCategoryLink(computed.href)}" style="color:${
                              computed.color || "#000"
                            }; text-decoration: underline;">
                            <span class="newsletterCta" >${getPhrase("Shop now")}</span>
                          </a>
                        </td>
                      `,
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
                    })}
                </td>
              </tr>

              <tr>
                <td align="center" style="background-color: ${background};">
<<<<<<< HEAD
                    ${Space()}
                </td>
              </tr>
              <!-- Wykomentowana sekcja tabeli
=======
                    ${Space({ className: "newsletterBottom80px" })}
                </td>
              </tr>

>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
              <tr>
                <td class="newsletterContainer" style="background-color: ${background};">
                  ${Line()}
                </td>
              </tr>
<<<<<<< HEAD
              -->
          <tbody>
      </table>
      <!-- Wykomentowana sekcja tabeli
=======
          <tbody>
      </table>

>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
          <tbody>
                <tr>
                <td align="left">
                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                          <tr>
                            <td class="newsletterBottom35px" >
                            </td>
                          </tr>
                            <tr>
                                <td align="left" class="newsletterBottom35px">
<<<<<<< HEAD
                                    <span class="newsletterFooterTitle">${getPhrase("Shop limited-time deals")}</span>
=======
                                    <span class="newsletterFooterTitle">${getPhrase(
                                      "Shop limited-time deals"
                                    )}</span>
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
                                </td>
                            </tr>
                            <tr>
                                <td align="left" class="newsletterBottom20px">
                                    <a href=${links[4]}>
<<<<<<< HEAD
                                        <img loading="lazy" src=${links[5]} style="display: block;" width="100%">
=======
                                        <img loading="lazy" src=${
                                          links[5]
                                        } style="display: block;" width="100%">
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td align="left" class="newsletterBottom35px">
                                    <a href=${links[6]}>
<<<<<<< HEAD
                                        <img loading="lazy" src=${links[7]} style="display: block;" width="100%">
=======
                                        <img loading="lazy" src=${
                                          links[7]
                                        } style="display: block;" width="100%">
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
              </tr>
          </tbody>
<<<<<<< HEAD
      </table> -->
=======
      </table>
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
      ${Footer(
        {
          id,
          assembly: {
<<<<<<< HEAD
            src: ["AT", "PL", "FR", "UK"].includes(country) ? getFooter("Delivery src") : getFooter("Asembly src"),
            href: getFooter("Asembly href"),
            exclude: ["CHIT"].includes(country),
=======
            src: ["AT", "PL", "FR", "UK"].includes(country)
              ? getFooter("Delivery src")
              : getFooter("Asembly src"),
            href: getFooter("Asembly href"),
            exclude: ["SK", "CHIT", "SE", "NO", "FI", "BEFR", "BENL"].includes(
              country
            ),
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
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
<<<<<<< HEAD
            //exclude: ["HU"].includes(country),
=======
            exclude: ["SK", "HU", "BEFR", "BENL"].includes(country),
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
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
