import types from "../utils/types.js";
import { Line } from "./Line.js";

export function Footer(sections, options) {
  const id = sections.id;
  const json_footer = {
    assembly: {
      [types.NEWSLETTER]: {
        value: ({ src, href }) => {
          return `
        <table class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 650px; width: 100%; background-color: #ffffff;">
            <tbody>
                <tr>
                    <td class="newsletterBottom35px" >
                        ${Line()}
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="${href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                            <img loading="lazy" src="${src}" width="610" style="display: block; max-width: 610px; width: 100%">
                        </a>
                    </td>
                </tr>
                <tr>
                    <td class="newsletterBottom35px" >
                    </td>
                </tr>
            </tbody>
        </table>
        `;
        },
      },
      [types.LANDINGPAGE]: {
        value: ({ src, href }) => `
        <table class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center" style="background-color: #ffffff;" id="newsletter">
            <tbody>
                <tr>
                    <td class="newsletterBottom35px" >
                        ${Line()}
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="${href}">
                            <img loading="lazy" src="${src}" style="display: block; max-width: 610px; width: 100%;">
                        </a>
                    </td>
                </tr>
                <tr>
                    <td class="newsletterBottom35px" >
                    </td>
                </tr>
            </tbody>
        </table>
        `,
      },
    },
    workBanner: {
      [types.NEWSLETTER]: {
        value: ({ href, src }) => {
          return ``;
        },
      },
      [types.LANDINGPAGE]: {
        value: ({ href, src }) => {
          return `
                <table class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center" style="background-color: #ffffff;" id="newsletter">
                    <tbody>
                        <tr>
                            <td class="newsletterBottom35px" >
                                ${Line()}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="${href}">
                                <img loading="lazy" src="${src}" style="display: block; max-width: 610px; width: 100%">
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="newsletterBottom35px" >
                            </td>
                        </tr>
                    </tbody>
                </table>
            `;
        },
      },
    },
    thousandsMore: {
      [types.NEWSLETTER]: {
        value: ({
          title,
          firstCategory,
          secondCategory,
          thirdCategory,
          foutrthCategory,
          fifthCategory,
          sixthCategory,
          seventhCategory,
          eigthCategory,
        }) => {
          return `
        <table cellspacing="0" class="newsletterContainer" cellpadding="0" border="0" align="center" style="background-color: #ffffff;">
            <tbody>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  alt="">
                    </td>
                </tr>
                <tr>
                    <td class="newsletterTopBottomContainer">
                        <span class="newsletterFooterTitle">
                            ${title}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td class="newsletterBottom35px">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" >
                            <tbody>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFT">
                                        <a
                                            href="${firstCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${firstCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHT">
                                        <a
                                            href="${secondCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${secondCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFT">
                                        <a
                                            href="${thirdCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${thirdCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHT">
                                        <a
                                            href="${foutrthCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${foutrthCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFT">
                                        <a
                                            href="${fifthCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${fifthCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHT">
                                        <a
                                            href="${sixthCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${sixthCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFTBottom">
                                        <a
                                            href="${seventhCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${seventhCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHTBottom">
                                        <a
                                            href="${eigthCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${eigthCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                            </tbody>
        </table>
                `;
        },
      },
      [types.LANDINGPAGE]: {
        value: ({
          title,
          firstCategory,
          secondCategory,
          thirdCategory,
          foutrthCategory,
          fifthCategory,
          sixthCategory,
          seventhCategory,
          eigthCategory,
        }) => `
        <table class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center" style="background-color: #ffffff;" id="newsletter">
            <tbody>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  alt="">
                    </td>
                </tr>
                <tr>
                    <td class="newsletterTopBottomContainer">
                        <span class="newsletterFooterTitle">
                            ${title}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td class="newsletterBottom35px">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" >
                            <tbody>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFT">
                                        <a
                                            href="${firstCategory.href}">
                                            <img loading="lazy" src="${firstCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHT">
                                        <a
                                            href="${secondCategory.href}">
                                            <img loading="lazy" src="${secondCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFT">
                                        <a
                                            href="${thirdCategory.href}">
                                            <img loading="lazy" src="${thirdCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHT">
                                        <a
                                            href="${foutrthCategory.href}">
                                            <img loading="lazy" src="${foutrthCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFT">
                                        <a
                                            href="${fifthCategory.href}">
                                            <img loading="lazy" src="${fifthCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHT">
                                        <a
                                            href="${sixthCategory.href}">
                                            <img loading="lazy" src="${sixthCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFTBottom">
                                        <a
                                            href="${seventhCategory.href}">
                                            <img loading="lazy" src="${seventhCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHTBottom">
                                        <a
                                            href="${eigthCategory.href}">
                                            <img loading="lazy" src="${eigthCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>

                            </tbody>
        </table>
          `,
      },
    },
    klarna: {
      [types.NEWSLETTER]: {
        value: ({ href, src }) => {
          return `
        <table class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center" style="background-color: #ffffff;">
            <tbody>
                    <tr>
                        <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;" /></td>
                    </tr>
                  <!--KLARNA-->
                    <tr>
                        <td class="newsletterTopBottomContainer">
                            <a href="${href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                <img alt="" border="0"  src="${src}" style="display:block; max-width: 100%;"/>
                            </a>
                        </td>
                    </tr>
            </tbody>
        </table>
        `;
        },
      },
      [types.LANDINGPAGE]: {
        value: ({ href, src }) => `
        <table class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center" style="background-color: #ffffff;" id="newsletter">
            <tbody>
                <tr>
                    <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  /></td>
                </tr>
                <!--KLARNA-->
                <tr>
                    <td class="newsletterTopBottomContainer">
                        <a href="${href}">
                            <img alt="" border="0"  src="${src}" style="display:block; max-width: 100%;"/>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
        `,
      },
    },
    socials: {
      [types.NEWSLETTER]: {
        value: ({
          title,
          instagram,
          facebook,
          youtube,
          pinterest,
          Xsocial,
          Tiktok,
        }) => {
          return `
            <table class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center" style="background-color: #ffffff;">
            <tbody>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  alt="">
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tbody>
                                <tr>
                                    <td align="left" class="footer">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tbody>
                                                <tr>
                                                    <td class="newsletterTopBottomContainer">
                                                        <span class="newsletterFooterTitle">
                                                              ${title}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tbody>
                                                <tr>
                                                    <td class="newsletterSocialIcon">
                                                        <a
                                                            href="${
                                                              instagram.href
                                                            }?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                            <img loading="lazy" src="${
                                                              instagram.src
                                                            }"
                                                                 border="0" style="display:block; max-width: 100%;"
                                                                alt="Instagram">
                                                        </a>
                                                    </td>
                                                    <td class="newsletterSocialIcon">
                                                        <a
                                                            href="${
                                                              facebook.href
                                                            }?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                            <img loading="lazy" src="${
                                                              facebook.src
                                                            }"
                                                                 border="0" style="display:block; max-width: 100%;"
                                                                alt="Facebook">
                                                        </a>
                                                    </td>
                                                    ${
                                                      youtube.href &&
                                                      youtube.src
                                                        ? `
                                                        <td class="newsletterSocialIcon">
                                                            <a
                                                                href="${youtube.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                                <img loading="lazy" src="${youtube.src}"
                                                                    border="0" style="display:block; max-width: 100%;"
                                                                    alt="YouTube">
                                                            </a>
                                                        </td>
                                                        `
                                                        : ""
                                                    }
                                                    <td class="newsletterSocialIcon">
                                                        <a
                                                            href="${
                                                              pinterest.href
                                                            }?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                            <img loading="lazy" src="${
                                                              pinterest.src
                                                            }"
                                                                 border="0" style="display:block; max-width: 100%;"
                                                                alt="Pinterest">
                                                        </a>
                                                    </td>
                                                    ${
                                                      Xsocial
                                                        ? `
                                                        <td class="newsletterSocialIcon">
                                                            <a
                                                                href="${Xsocial.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                                <img loading="lazy" src="${Xsocial.src}"
                                                                    border="0" style="display:block; max-width: 100%;"
                                                                    alt="Pinterest">
                                                            </a>
                                                        </td>   
                                                        `
                                                        : ""
                                                    }
                                                    ${
                                                      Tiktok
                                                        ? `
                                                        <td class="newsletterSocialIcon">
                                                            <a
                                                                href="${Tiktok.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                                <img loading="lazy" src="${Tiktok.src}"
                                                                    border="0" style="display:block; max-width: 100%;"
                                                                    alt="Pinterest">
                                                            </a>
                                                        </td>   
                                                        `
                                                        : ""
                                                    }
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
                `;
        },
      },
      [types.LANDINGPAGE]: {
        value: ({
          title,
          instagram,
          facebook,
          youtube,
          pinterest,
          Xsocial,
          Tiktok,
        }) => `
        <table class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center" style="background-color: #ffffff;" id="newsletter">
            <tbody>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  alt="">
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tbody >
                                <tr>
                                    <td align="left" class="footer">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tbody>
                                                <tr>
                                                    <td class="newsletterTopBottomContainer">
                                                        <span class="newsletterFooterTitle">
                                                              ${title}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tbody>
                                                <tr>
                                                    <td class="newsletterSocialIcon">
                                                        <a
                                                            href="${
                                                              instagram.href
                                                            }">
                                                            <img loading="lazy" src="${
                                                              instagram.src
                                                            }"
                                                                 border="0" style="display:block; max-width: 100%;"
                                                                alt="Instagram">
                                                        </a>
                                                    </td>
                                                    <td class="newsletterSocialIcon">
                                                        <a
                                                            href="${
                                                              facebook.href
                                                            }">
                                                            <img loading="lazy" src="${
                                                              facebook.src
                                                            }"
                                                                 border="0" style="display:block; max-width: 100%;"
                                                                alt="Facebook">
                                                        </a>
                                                    </td>
                                                    ${
                                                      youtube.href &&
                                                      youtube.src
                                                        ? `
                                                        <td class="newsletterSocialIcon">
                                                            <a
                                                                href="${youtube.href}">
                                                                <img loading="lazy" src="${youtube.src}"
                                                                    border="0" style="display:block; max-width: 100%;"
                                                                    alt="YouTube">
                                                            </a>
                                                        </td>
                                                        `
                                                        : ""
                                                    }
                                                    <td class="newsletterSocialIcon">
                                                        <a
                                                            href="${
                                                              pinterest.href
                                                            }">
                                                            <img loading="lazy" src="${
                                                              pinterest.src
                                                            }"
                                                                 border="0" style="display:block; max-width: 100%;"
                                                                alt="Pinterest">
                                                        </a>
                                                    </td>
                                                    ${
                                                      Xsocial
                                                        ? `
                                                        <td class="newsletterSocialIcon">
                                                            <a
                                                                href="${Xsocial.href}">
                                                                <img loading="lazy" src="${Xsocial.src}"
                                                                    border="0" style="display:block; max-width: 100%;"
                                                                    alt="Pinterest">
                                                            </a>
                                                        </td>   
                                                        `
                                                        : ""
                                                    }
                                                    ${
                                                      Tiktok
                                                        ? `
                                                        <td class="newsletterSocialIcon">
                                                            <a
                                                                href="${Tiktok.href}">
                                                                <img loading="lazy" src="${Tiktok.src}"
                                                                    border="0" style="display:block; max-width: 100%;"
                                                                    alt="Pinterest">
                                                            </a>
                                                        </td>   
                                                        `
                                                        : ""
                                                    }
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
        `,
      },
    },
    advantages: {
      [types.NEWSLETTER]: {
        value: ({
          firstAdvantage,
          secondAdvantage,
          thirdAdvantage,
          fourthAdvantage,
        }) => {
          return `
        <table cellspacing="0" class="newsletterContainer" cellpadding="0" border="0" align="center" style="background-color: #ffffff;" >
            <tbody>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  alt="">
                    </td>
                </tr>
                <!-- ADVANTAGES -->
                <tr>
                    <td class="newsletterTopBottomContainer">
                        <table cellspacing="0" cellpadding="0" border="0"  style="background-color: #f5f5f5;">
                            <tbody>
                                <tr>
                                    <td>
                                        <a
                                            href="${firstAdvantage.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${firstAdvantage.src}"
                                                alt="" style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="${secondAdvantage.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${secondAdvantage.src}"
                                                alt="" style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="${thirdAdvantage.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${thirdAdvantage.src}"
                                                alt="" style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="${fourthAdvantage.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${fourthAdvantage.src}"
                                                alt="" style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                            </tbody>
        </table>
                `;
        },
      },
      [types.LANDINGPAGE]: {
        value: ({
          firstAdvantage,
          secondAdvantage,
          thirdAdvantage,
          fourthAdvantage,
        }) => "",
      },
    },
    conditions: {
      [types.NEWSLETTER]: {
        value: ({ conditionsTitle, conditionsText }) => {
          return `
        <table class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center" width='650' style='max-width: 650px; width: 100%; background-color: #ffffff;'>
            <tbody>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  alt="">
                    </td>
                </tr>
                <tr>
                    <td class="newsletterTopBottomContainer" align="left">
                        <span class="newsletterConditions" style="color: #000000;">${conditionsTitle} ${
            conditionsText.length === 2
              ? conditionsText[0] + " " + conditionsText[1]
              : conditionsText.length === 3
              ? conditionsText[0] +
                " " +
                conditionsText[1] +
                " " +
                conditionsText[2]
              : conditionsText
          }</span>
                    </td>
                </tr>
            </tbody>
        </table>
        `;
        },
      },
      [types.LANDINGPAGE]: {
        value: ({ conditionsTitle, conditionsText }) => `
        <table class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center" width='650' style='max-width: 650px; width: 100%' id="newsletter">
            <tbody>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  alt="">
                    </td>
                </tr>
                <tr>
                    <td class="newsletterTopBottomContainer" align="left">
                        <span class="newsletterConditions" style="color: #000000;">${conditionsTitle} ${
            conditionsText.length === 5
            ?  conditionsText[4] + " " + conditionsText[1]
            : conditionsText.length === 4
            ?  conditionsText[3] + " " + conditionsText[1]
            : conditionsText.length === 3
            ? conditionsText[0] + " " + conditionsText[1]
            : conditionsText.length === 2
            ? conditionsText[0]
            : conditionsText[0]
            
        }</span>
                    </td>
                </tr>
            </tbody>
        </table>
        `,
      },
    },
    companyDetails: {
      [types.NEWSLETTER]: {
        value: ({
          title,
          address,
          mobileNumber,
          emailAddress,
          mailTo,
          email,
          commercialRegister,
          vat,
        }) => {
          return `
        <table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter">
            <tbody>
                <tr>
                    <td align="center" class="newsletterFooterCompanyDetails">
                        <span style="color: #000000;text-align: center; font-size:11px;">
                            <b><font style="font-size: 11px;">${title}</font></b>
                            <br />${address}<br />${mobileNumber} ${emailAddress}
                            <a href="${mailTo}">${email}</a>
                            <br />${commercialRegister}<br />${vat}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
                `;
        },
      },
      [types.LANDINGPAGE]: {
        value: ({
          title,
          address,
          mobileNumber,
          emailAddress,
          mailTo,
          email,
          commercialRegister,
          vat,
        }) => "",
      },
    },
  };

  let html = "";
  for (const section in sections) {
    const elem = sections[section];
    if (typeof elem !== "object") continue;

    if (section in json_footer) {
      if (!("exclude" in elem)) {
        const conditionalSections = {};

        for (const key in elem) {
          const element = elem[key] || "";
          if (elem[key] === undefined) {
            console.log("Value for " + key + " not found.");
          }
          if (typeof elem !== "object") {
            conditionalSections[key] = element;
            continue;
          }

          if (!element.exclude) {
            conditionalSections[key] = element;
          }
        }
        html += json_footer[section][options.type].value(conditionalSections);
        continue;
      }
      if (!elem.exclude) {
        const conditionalSections = {};

        for (const key in elem) {
          const element = elem[key] || "";
          if (elem[key] === undefined) {
            console.log("Value for " + key + " not found.");
          }
          if (typeof elem !== "object") {
            conditionalSections[key] = element;
            continue;
          }

          if (!element.exclude) {
            conditionalSections[key] = element;
          }
        }
        html += json_footer[section][options.type].value(conditionalSections);
      }
    } else {
      throw new Error(
        "Dodaj sekcje: " + section + ". Do json_footer in Footer.js"
      );
    }
  }
  return html;
}
