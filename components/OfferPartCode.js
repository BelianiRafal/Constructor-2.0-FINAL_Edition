import { Paragraph } from "./Paragraph.js";
import { Space } from "./Space.js";
import { GetCode } from "./getCode.js";

export function OfferPartCode({ color, data, getPhrase, queries, paragraph1, paragraph2, paragraph3, href, type }) {
  const newsletter = `
    <tr>
      <td style="color: ${color}">
        ${
          new Paragraph({
            paragraph: Array.isArray(data) && data[0] ? data[0] : paragraph1 || "Missing Offer - part 1",
            align: "center",
          }).htmlOutput
        }
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>

    <tr>
      <td >
           ${
             new Paragraph({
               paragraph: Array.isArray(data) && data[1] ? data[1] : paragraph2,
               align: "center",
             }).htmlOutput
           }
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${GetCode({
          color: color,
          code: queries?.codeCTA || "Code tableQuery not found.",
          link: href,
          type,
        })}
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    
    <tr>
      <td >
            ${
              new Paragraph({
                paragraph: Array.isArray(data) && data[3] ? data[3] : paragraph3,
                align: "center",
              }).htmlOutput
            }
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    
    <tr>
      <td >
        ${
          new Paragraph({
            paragraph: getPhrase("Choose from:"),
            align: "center",
            style: `color: ${color}`,
          }).htmlOutput
        }
      </td>
    </tr>
  `;
  const landing = `
    <tr>
      <td >
            ${
              new Paragraph({
                paragraph: Array.isArray(data) && data[0] ? data[0] : paragraph1 || "Missing Offer - part 1",
                align: "center",
              }).htmlOutput
            }
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>

    <tr>
      <td >
           ${
             new Paragraph({
               paragraph: Array.isArray(data) && data[1] ? data[1] : paragraph2,
               align: "center",
             }).htmlOutput
           }
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${GetCode({
          color: color,
          code: queries?.code || "Code tableQuery not found.",
          link: href,
          type,
        })}
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    
    <tr>
      <td >
            ${
              new Paragraph({
                paragraph: Array.isArray(data) && data[3] ? data[3] : paragraph3,
                align: "center",
              }).htmlOutput
            }
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    
    <tr>
      <td >
        ${
          new Paragraph({
            paragraph: getPhrase("Choose from:"),
            align: "center",
            style: `color: ${color}`,
          }).htmlOutput
        }
      </td>
    </tr>
  `;
  return `
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
    ${type === "newsletter" ? newsletter : landing}
  </table>
  `;
}
