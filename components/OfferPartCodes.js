import { GetCode } from "./getCode.js";

export function OfferPartCodes({ offerParts, type }) {
  function newsletterIntro(item, i) {
    return `
    ${
      "title" in item
        ? `
        <tr>
            <td align="center">
                <span class="newsletterTitleBlackWeek">
                    ${item.title}
                </span>
            </td>
        </tr>
        `
        : ""
    }
    ${
      "paragraph" in item
        ? `
        <tr>
            <td align="center" ${
              offerParts.length - 1 !== i ? 'class="newsletterBottom35px"' : ""
            }>
                <span class="newsletterParagraph">
                    ${item.paragraph}
                </span>
            </td>
        </tr>
        `
        : ""
    }
    ${
      "code" in item && item.type === "newsletter"
        ? `
          <tr>
            <td class="newsletterBottom35px">
              ${GetCode({
                code: item.code,
                link: item.href,
                type,
              })}
            </td>
          </tr>
        `
        : ""
    }
    `;
  }

  function landingIntro(item, i) {
    return `
    ${
      "title" in item
        ? `
        <tr>
            <td align="center">
                <span class="newsletterTitleBlackWeek" >
                    ${item.title}
                </span>
            </td>
        </tr>
        `
        : ""
    }
    ${
      "paragraph" in item
        ? `
        <tr>
            <td align="center" ${
              item?.class
                ? `class='${item.class}'`
                : offerParts.length - 1 === i
                ? ""
                : 'class="newsletterBottom20px"'
            }>
                <span class="newsletterParagraph">
                    ${item.paragraph}
                </span>
            </td>
        </tr>
        `
        : ""
    }
    ${
      "code" in item && item.type === "landing"
        ? `
          <tr>
            <td class="newsletterBottom35px">
              ${GetCode({
                code: item.code,
                link: item.href,
                type,
              })}
            </td>
          </tr>
        `
        : ""
    }
    `;
  }

  return `
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
          ${offerParts
            .map((item, i) => {
              if (type === "newsletter") {
                return newsletterIntro(item, i);
              }

              if (type === "landing") {
                return landingIntro(item, i);
              }
            })
            .join("")}
        </tbody>
    </table>
    `;
}
