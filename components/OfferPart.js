import { Paragraph } from "./Paragraph.js";
import { Space } from "./Space.js";
import { GetCode } from "./getCode.js";
import { Intro } from "./intro.js";

export function OfferPart({ offers, offerDate, href, code, type, color }) {
  const newsletter = `
  ${offers
    .map((item, idx) => {
      const newsletter = `
    <tr>
        <td >
        ${Intro({
          title: item.title,
          paragraph: item.paragraph,
          align: "center",
          color,
          spaceClassName: "newsletterBottom20px",
        })}
        </td>
    </tr>
    ${
      idx === offers.length - 1
        ? `
      <tr>
        <td >
            ${Space({ className: "newsletterBottom60px" })}
        </td>
      </tr>
      `
        : `
      <tr>
        <td >
            ${Space()}
        </td>
      </tr>
      `
    }
    `;

      return newsletter;
    })
    .join("")}

    <tr>
      <td >
        ${GetCode({
          code: code,
          link: href,
          type,
          color
        })}
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: "newsletterBottom60px" })}
      </td>
    </tr>
    
    <tr>
      <td >
        ${Paragraph(offerDate, "center")}
      </td>
    </tr>
  `;
  const landing = `
        ${offers
          .map((item, idx) => {
            const landing = `
          <tr>
              <td >
              ${Intro({
                title: item.title,
                paragraph: item.paragraph,
                align: "center",
                color,
                spaceClassName: "newsletterBottom20px",
              })}
              </td>
          </tr>
          <tr>
            <td >
                ${Space({ className: "newsletterBottom20px" })}
            </td>
          </tr>
          <tr>
              <td align="center" >
                  <span class="newsletterParagraph" style="font-size: 20px; font-weight: 600;">
                    ${item.code}
                  </span>
              </td>
          </tr>
          <tr>
            <td >
                ${Space()}
            </td>
          </tr>
          `;
            return landing;
          })
          .join("")}

          <tr>
            <td >
              ${Paragraph(offerDate, "center")}
            </td>
          </tr>
  `;
  return `
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
    ${type === "newsletter" ? newsletter : landing}
  </table>
  `;
}
