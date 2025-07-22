import { Footer } from "../components/footer.js";
import { Header } from "../components/header.js";
import {
  Line,
  Category,
  Intro,
  Paragraph,
  ImageWithLink,
  TopImageTitle,
  Space,
  Product,
  OfferPartCodes,
  Timer,
<<<<<<< HEAD
  ColumnsTwoPeak,
} from "../components/index.js";
import { OfferPart } from "../components/OfferPart.js";
import { OfferPartCode } from "../components/OfferPartCode.js";
import { NewsletterTemplate } from "../entities/NewsletterTemplate.js";
=======
  AdditionalCategories,
  CategoryOneBannerWhite,
  CategoryOneBanner,
  CategoryOneLast,
  TwoCategory,
  Create2Columns_Grid,
} from "../components/index.js";
import { OfferPart } from "../components/OfferPart.js";
import { OfferPartCode } from "../components/OfferPartCode.js";
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
import { priceFree } from "../helpers/priceFree.js";
import templates from "../main/data/templates.js";
import { getCodes } from "../utils/getCodes.js";

export async function FrenchDays({
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
  add_utm,
<<<<<<< HEAD
  shop,
  campDate,
  soon_banners,
}) {
  const codes = getCodes(queries);
  const gif_src1 = {
    CHDE: ["https://gen.sendtric.com/countdown/gx3ygpr3of"],
    CHFR: ["https://gen.sendtric.com/countdown/3r1x88h47v"],
    FR: ["https://gen.sendtric.com/countdown/3r1x88h47v"],
    UK: ["https://gen.sendtric.com/countdown/gf5ok93rn6"],
    DE: ["https://gen.sendtric.com/countdown/gx3ygpr3of"],
    AT: ["https://gen.sendtric.com/countdown/gx3ygpr3of"],
    ES: ["https://gen.sendtric.com/countdown/r7sek3cb3j"],
    PL: ["https://gen.sendtric.com/countdown/1fjcoigdjo"],
    NL: ["https://gen.sendtric.com/countdown/qwi3ixh0sr"],
    PT: ["https://gen.sendtric.com/countdown/a3567s60vj"],
    IT: ["https://gen.sendtric.com/countdown/153qvcxc4t"],
    SE: ["https://gen.sendtric.com/countdown/4odozbfwbv"],
    HU: ["https://gen.sendtric.com/countdown/n47yc8sodi"],
    DK: ["https://gen.sendtric.com/countdown/gvc05gevi2"],
    CZ: ["https://gen.sendtric.com/countdown/lq2df2bglc"],
    FI: ["https://gen.sendtric.com/countdown/yypzt93b26"],
    NO: ["https://gen.sendtric.com/countdown/w2me5g3mv8"],
    SK: ["https://gen.sendtric.com/countdown/sm5mlcbs5u"],
    BENL: ["https://gen.sendtric.com/countdown/qwi3ixh0sr"],
    BEFR: ["https://gen.sendtric.com/countdown/3r1x88h47v"],
    RO: ["https://gen.sendtric.com/countdown/bingtjubma"],
  };
  const gif_src2 = {
    CHDE: ["https://gen.sendtric.com/countdown/l074hwubr4"],
    CHFR: ["https://gen.sendtric.com/countdown/6u69emjara"],
    FR: ["https://gen.sendtric.com/countdown/1ey33ehlj7"],
    UK: ["https://gen.sendtric.com/countdown/4e62vsgotn"],
    DE: ["https://gen.sendtric.com/countdown/jfgw8mz5to"],
    AT: ["https://gen.sendtric.com/countdown/c92gxrqo37"],
    ES: ["https://gen.sendtric.com/countdown/cqkr3ppdq9"],
    PL: ["https://gen.sendtric.com/countdown/44jao0oi2m"],
    NL: ["https://gen.sendtric.com/countdown/koe50jy0z2"],
    PT: ["https://gen.sendtric.com/countdown/5dalwcmns7"],
    IT: ["https://gen.sendtric.com/countdown/43czzgbcke"],
    SE: ["https://gen.sendtric.com/countdown/jo2ld3oau7"],
    HU: ["https://gen.sendtric.com/countdown/o07jruzodm"],
    DK: ["https://gen.sendtric.com/countdown/xspvb43d8y"],
    CZ: ["https://gen.sendtric.com/countdown/8x7lielj2k"],
    FI: ["https://gen.sendtric.com/countdown/sg1f28fqcj"],
    NO: ["https://gen.sendtric.com/countdown/sb52kc4a23"],
    SK: ["https://gen.sendtric.com/countdown/m7ey3fmdpg"],
    BENL: ["https://gen.sendtric.com/countdown/koe50jy0z2"],
    BEFR: ["https://gen.sendtric.com/countdown/ijkmabns81"],
    RO: ["https://gen.sendtric.com/countdown/w2f6agmcdw"],
  };
  console.log(shop.slug);
  console.log(shop);
=======
  shop
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
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${
    background || "#ffffff"
  }; color: #000;" id="newsletter">
        <tbody>
<<<<<<< HEAD
            ${
              type === "newsletter"
=======
            ${type === "newsletter"
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
                ? `
                <tr>
                    <td align="center">
                        ${ImageWithLink({
<<<<<<< HEAD
                          href: links[0],
                          src: links[1],
=======
                        href: links[0],
                        src: links[1],
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
                        })}
                    </td>
                </tr>
                `
                : `
                <tr>
                    <td align="center">
<<<<<<< HEAD
                        ${
                          !queries.tit
                            ? `
                        ${ImageWithLink({
                          href: links[0],
                          src: links[1],
                        })}
                        `
                            : `
                        ${TopImageTitle({
                          href: links[0],
                          title1: queries.tit[0],
                          title2: queries.tit[1],
                          color: "#000",
                          type: "twoSameLines",
=======
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
                            color: "#ffffff",
                            type: "up_to",
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
                        })}
                        `
                        }
                    </td>
                </tr>

                `
            }
<<<<<<< HEAD
           
            
            <tr>
                            <td align="center" style="background-color: ${background};" class="newsletterContainer">
                              ${Intro({
                                paragraph: queries.intro[0],
                                // data: queries.intro,
                                color: "#000",
                                align: "center",
                                title: "no_title",
                              })}
                              </td>
                          </tr>
                          <tr>
                            <td style="background-color: ${background};" class="newsletterBottom35px"></td>
                          </tr>
            <tr>
            </tr>
            <tr>
              <td style="background-color: ${background};" class="newsletterContainer">
                  ${ColumnsTwoPeak({
=======
            <tr>
                <td align="center">
                    ${ImageWithLink({
                        href: links[0],
                        src: links[7],
                    })}
                </td>
            </tr>
            <tr>
              <td class="newsletterContainer">
                  ${Space()}
                  ${
                    offerPart.type === "code"
                      ? OfferPartCode({
                          color: offerPart.color,
                          data: queries.offerPart,
                          //data2: queries.ChooseFrom,
                          href: links[0],
                          code: queries.offerPart[3],
                          code1: queries.offerPart[5],
                          code2: queries.offerPart[6],
                          code3: queries.offerPart[7],
                          getPhrase,
                          type,
                          queries
                        })
                      : ""
                  }
                  ${
                    offerPart.type === "codes"
                      ? OfferPartCodes({
                          type,
                          offerParts: [
                            {
                              paragraph: queries.offerPart[0],
                              code: codes?.code1,
                              type: "landing",
                            },
                            {
                              paragraph: queries.offerPart[1],
                              code: codes?.code2,
                              type: "landing",
                            },
                            {
                              paragraph: queries.offerPart[2],
                              code: codes?.code3,
                              type: "landing",
                            },
                            {
                              paragraph: queries.offerPart[4],
                              href: links[0],
                              type: "newsletter",
                            },
                            {
                              paragraph: queries.offerPart[5],
                              code: codes?.code4,
                              type: "landing",
                            },
                          ],
                        })
                      : ""
                  }
              </td>
            </tr>
            <tr>
              <td style="background-color: ${background};" class="newsletterContainer">
                  ${Create2Columns_Grid({
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
                    shuffle: false,
                    iter: categories,
                    left: (computed) => `
                      <td width="50%" style="padding-left:6px">
                        <a href="${getCategoryLink(computed.href)}">
<<<<<<< HEAD
                            <img alt="" src="${computed.src}" style="max-width: 100%; display:block;" loading="lazy">
=======
                            <img alt="" src="${
                              computed.src
                            }" style="max-width: 100%; display:block;" loading="lazy">
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
                        </a>
                      </td>
                    `,
                    right: (computed) => `
                      <td width="50%" style="padding-right:6px">
                        <a href="${getCategoryLink(computed.href)}">
<<<<<<< HEAD
                            <img alt="" src="${computed.src}" style="max-width: 100%; display:block;" loading="lazy">
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
                  })}
                  ${Space({ className: "newsletterBottom35px" })}
              </td>
            </tr>
           
                    ${
                      (type === "landing" && !soon_banners) || type === "newsletter"
                        ? `<table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
          <tbody>
            <tr>
              <td align="left">
                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td>${Line()}</td>
                    </tr>
                    <tr>
                      <td class="newsletterBottom35px"></td>
                    </tr>
                    <tr>
                      <td align="left" class="newsletterBottom35px">
                        <span class="newsletterFooterTitle">${getPhrase("Shop limited-time deals")}</span>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" class="newsletterBottom20px">
                        ${ImageWithLink({
                          href: links[links.length - 4], // Przedostatnia para linków (href)
                          src: links[links.length - 3], // Przedostatnia para linków (src)
                        })}
                      </td>
                    </tr>
                    <tr>
                      <td align="left" class="newsletterBottom35px">
                        ${ImageWithLink({
                          href: links[links.length - 2], // Ostatnia para linków (href)
                          src: links[links.length - 1], // Ostatnia para linków (src)
                        })}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>`
                        : ""
                    }
               
=======
                            <img alt="" src="${
                              computed.src
                            }" style="max-width: 100%; display:block;" loading="lazy">
                        </a>
                      </td>
                    `,
                    cta: getPhrase(
                      "Shop All Categories",
                    ),
                    color: "#000",
                    align: "center",
                    href:
                        type === "newsletter"
                            ? shop.origin + "?utm_source=newsletter&utm_medium=email&utm_campaign=" + id
                            : shop.origin,
                        type,
                  })}
                  ${Space()}
              </td>
            </tr>
            ${
                ["BEFR", "BENL"].includes(country)
                  ? ""
                  : `
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
                        <tbody>
                            <tr>
                                <td align="left">
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                        <tr>
                                          <td class="newsletterBottom35px">
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
                                                    <a href=${links[3]}>
                                                        <img loading="lazy" src=${
                                                          links[4]
                                                        } style="display: block;" width="100%">
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="newsletterBottom35px">
                                                    <a href=${links[5]}>
                                                        <img loading="lazy" src=${
                                                          links[6]
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
                `
            }
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
            exclude: ["CHIT"].includes(
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
<<<<<<< HEAD
              href: getCategoryLink("https://www.beliani.co.uk/sofas/all+products"), //href: getFooter("Category href 1"),
            },
            secondCategory: {
              src: getFooter("Category src 2"),
              href: getCategoryLink("https://www.beliani.co.uk/beds/all+products"), //href: getFooter("Category href 2"),
            },
            thirdCategory: {
              src: getFooter("Category src 3"),
              href: getCategoryLink("https://www.beliani.co.uk/tables/coffee-tables"), //href: getFooter("Category href 3"),
            },
            foutrthCategory: {
              src: getFooter("Category src 4"),
              href: getCategoryLink("https://www.beliani.co.uk/chairs/all+products"), //href: getFooter("Category href 4"),
            },
            fifthCategory: {
              src: getFooter("Category src 5"),
              href: getCategoryLink("https://www.beliani.co.uk/armchairs/all+products"), //href: getFooter("Category href 5"),
            },
            sixthCategory: {
              src: getFooter("Category src 6"),
              href: getCategoryLink("https://www.beliani.co.uk/storage/sideboards"), //href: getFooter("Category href 6"),
            },
            seventhCategory: {
              src: getFooter("Category src 7"),
              href: getCategoryLink("https://www.beliani.co.uk/lighting/all+products"), //href: getFooter("Category href 7"),
            },
            eigthCategory: {
              src: getFooter("Category src 8"),
              href: getCategoryLink("https://www.beliani.co.uk/rugs/all+products"), //href: getFooter("Category href 8"),
=======
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
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
            },
          },
          klarna: {
            src: getFooter("Klarna src"),
            href: getFooter("Klarna href"),
<<<<<<< HEAD
            //exclude: ["HU"].includes(country),
=======
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
