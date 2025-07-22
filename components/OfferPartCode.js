import { Paragraph } from "./Paragraph.js";
import { Space } from "./Space.js";
import { GetCode } from "./getCode.js";

export function OfferPartCode({ color, data, getPhrase, queries, paragraph1, paragraph2, paragraph3, paragraph4, href, type, code, code1, code2, code3 }) {
  
  const newsletter = `
    <tr>
      <td >
        ${Paragraph(data ? data[0] : paragraph1  || "Missing Offer - part 1", "center")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data ? data[1] : paragraph2, "center")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    <tr>
      <td >
        ${Paragraph(data ? data[2] : paragraph3, "center")}
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
          code: code,
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
        ${Paragraph(data ? data[4] :paragraph4, "center")}
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    
  `;
  const landing = `
    <tr>
      <td >
        ${Paragraph(data ? data[0] : paragraph1  || "Missing Offer - part 1", "center")}
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
          code: code1,
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
        ${Paragraph(data ? data[1] : paragraph2, "center")}
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
          code: code2,
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
        ${Paragraph(data ? data[2] : paragraph3, "center")}
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
          code: code3,
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
        ${Paragraph(data ? data[4] :paragraph4, "center")}
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
  `;
  return `
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
    ${type === "newsletter" ? newsletter : landing}
  </table>
  `;
}
