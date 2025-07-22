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
} from "../components/index.js";

export async function landing_MPG({
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
}) {
  const categories = [
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_04.jpg",
      },
      href: getCategoryLink(
        "https://www.beliani.ch/garden-furniture/outdoor-furniture/lounge-sets/"
      ),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_05.jpg",
      },
      href: getCategoryLink(
        "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/"
      ),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_06.jpg",
      },
      href: getCategoryLink(
        "https://www.beliani.ch/outdoor-furniture/sun-loungers/"
      ),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_07.jpg",
      },
      href: getCategoryLink(
        "https://www.beliani.ch/outdoor-furniture/storage-boxes/"
      ),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_08.jpg",
      },
      href: getCategoryLink(
        "https://www.beliani.ch/outdoor-furniture/balcony-furniture/"
      ),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_09.jpg",
      },
      href: getCategoryLink(
        "https://www.beliani.ch/garden-furniture/garden-accessories/pots-and-planters/"
      ),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_10.jpg",
      },
      href: getCategoryLink(
        "https://www.beliani.ch/garden-furniture/garden-accessories/fire-pits/"
      ),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_11.jpg",
      },
      href: getCategoryLink("https://www.beliani.ch/garden-furniture/parasols/"),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_12.jpg",
      },
      href: getCategoryLink(
        "https://www.beliani.ch/garden-furniture/outdoor-textiles/"
      ),
    },
  ];

  return `
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #ff2f00; color: #000;" id="newsletter">
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
                  <td align="center">
                    ${ImageWithLink({
                      href: links[2],
                      src: links[3],
                    })}
                  </td>
              </tr>

              <tr>
                <td style="background-color: #ff2f00; ">
                  ${Space()}
                </td>
              </tr>

              <tr>
                <td class="newsletterContainer"style="background-color: #ff2f00; ">
                  <table cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tbody>
                          <tr>
                              <td align="center">
                                  <span class="newsletterTitleOfferPart" style="color: #ffffff;">
                                      ${queries.intro}
                                  </span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="background-color: #ff2f00;">
                  ${Space("newsletterBottom80px")}
                </td>
              </tr>

              <tr>
                <td style="background-color: #ff2f00;">
                  <table cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tbody>
                          ${categories
                            .map((item) => {
                              return `
                            <tr>
                                <td align="center">
                                  <a href="${item.href}">
                                    <img alt="" src="${item.src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                                  </a>
                                </td>
                            </tr>
                            `;
                            })
                            .join("")}
                      </tbody>
                  </table>
                </td>
              </tr>

              <tr>
              <td align="center" style="background-color: #ffccb7;" class="newsletterContainer">
                  <iframe id="newsletterIFrame" class="newsletterIFrame" src="https://www.youtube.com/embed/${path}?enablejsapi=1&amp;mute=1&amp;playlist=${path}&amp;loop=1" width="610" height="400" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
              </td>
            </tr>

            <tr>
              <td class="newsletterBottom35px" >
              </td>
            </tr>

            <tr>
              <td align="center">
                <a href="${queries.youtubeHref[country]}" style="color:#000; text-decoration: underline;">
                  <span class="newsletterCta">${queries.watchNow}</span>
                </a>
              </td>
            </tr>
            <tr>
              <td class="newsletterBottom80px" >
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
                                      <a href=${links[4]}>
                                          <img loading="lazy" src=${
                                            links[5]
                                          } style="display: block;" width="100%">
                                      </a>
                                  </td>
                              </tr>
                              <tr>
                                  <td align="left" class="newsletterBottom35px">
                                      <a href=${links[6]}>
                                          <img loading="lazy" src=${
                                            links[7]
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
            exclude: ["SK", "CHIT", "SE", "NO", "FI", "BEFR", "BENL"].includes(
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
