import { isAllowToRender } from "../helpers/optimizeImage.js";
import { ImageWithLink, Line, Paragraph, Product, Space, Title } from "./index.js";

export const Category = isAllowToRender(
  ({
    name,
    name1,
    href,
    src,
    products,
    productImg,
    ctaComponent,
    color,
    line,
    len,
    desc,
    idx,
    cta = "CTA",
    type,
    align,
    size,
    className = "newsletterContainer",
    lastbottomclass,
    img_class,
  }) => {

    console.log(type);

    if (!type) {
      return "Please specify type category.";
    }

    if (type === "image_with_2_product") {
      return `
    <table cellspacing="0" cellpadding="0" border="0" width="100%">
      <thead>
        <tr>
          <td>
            ${ImageWithLink({ href: href, src: src, alt: name })}
          </td>
        </tr>
      </thead>
      <tr>
              <td class="newsletterBottom35px">
              </td>
            </tr>
         
        </td>
      </tr>
       <tbody>
            <tr>
              <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
                <table cellspacing="0" cellpadding="0" style="width: 100%; ">
                  <tr>
                    <td >
                      <!-- 1-2 Products table -->
                      <table cellspacing="0" cellpadding="0" style="width: 100%; ">
                        <tr>
                          <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                          <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
                            ${Product(products[0], "center", `color: ${color || "#000000"}`)}
                          </td>
                          <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                          <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
                            ${Product(products[1], "center", `color: ${color || "#000000"}`)}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
            </table>
          </tbody>
          <tr>
              <td class="newsletterBottom35px">
              </td>
            </tr>
         
        </td>
      </tr>
      </tbody>
  </table>
    `;
    }

    if (type === "wednesday") {
      return `
  <table border="0" cellspacing="0" cellpadding="0" width="100%">
    <thead>
      <tr>
        <td>
          ${ImageWithLink({ href: href, src: src, alt: name })}
        </td>
      </tr>
      <tr>
        <td class="newsletterBottom35px"></td>
      </tr>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          ${Title({ title: name, align: "center", color: color })}
        </td>
      </tr>
      <tr>
        <td class="newsletterBottom35px"></td>
      </tr>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
              <tbody>
                  <tr>
                      <td align="center">
                          <span class="newsletterParagraph" style="color: ${color}">
                              ${desc}
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
    </thead>
    <tbody>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tr>
              <td class="newsletterBottom20px">
                <!-- 1-2 Products table -->
                <table cellspacing="0" cellpadding="0" style="width: 100%; ">
                  <tr>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
                      ${Product(products[0], "center", `color: ${color || "#ffffff"}`)}
                    </td>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
                      ${Product(products[1], "center", `color: ${color || "#ffffff"}`)}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <!-- 3-4 Products table -->
                <table cellspacing="0" cellpadding="0" style="width: 100%; ">
                  <tr>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
                      ${Product(products[2], "center", `color: ${color || "#ffffff"}`)}
                    </td>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
                      ${Product(products[3], "center", `color: ${color || "#ffffff"}`)}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="newsletterBottom35px">
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td class="${lastbottomclass}">
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px; text-align: center;">
                  ${
                    ctaComponent
                      ? ctaComponent(href, cta)
                      : `
                      <a href="${href}" style="color:${color || "#000"}; text-decoration: underline;">
                        <span class="newsletterCta">${cta}</span>
                      </a>
                    `
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  `;
    }

    if (type === "image&cta") {
      if (idx === len) {
        return `
<table class="newsletterContainer" border="0" cellspacing="0" cellpadding="0" width="100%">
      <tbody>
        <tr>
          <td>
            <a href="${href}">
              <img alt="${name}" src="${src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
            </a>
          </td>
        </tr>
        <tr>
          <td class="newsletterBottom35px"></td>
        </tr>
        <tr>
          <td align="center">
            ${
              ctaComponent
                ? ctaComponent(href, cta)
                : `
                <a href="${href}" style="color:${color || "#000"}; text-decoration: underline;">
                  <span class="newsletterCta">${cta}</span>
                </a>
              `
            }
          </td>
        </tr>
        <tr>
          <td class="newsletterBottom80px"></td>
        </tr>
      </tbody>
    </table>
        `;
      }
      return `

    `;
    }

    if (type === "standard") {
      if (idx === len) {
        return `
<table class="newsletterContainer" border="0" cellspacing="0" cellpadding="0" width="100%">
      <tbody>
        <tr>
          <td class="newsletterBottom35px"></td>
        </tr>
        <tr>
          <td>
            ${Title({ title: name, align: "left", color: color })}
          </td>
        </tr>
        <tr>
          <td class="newsletterBottom35px"></td>
        </tr>
        <tr>
          <td>
            <a href="${href}">
              <img alt="${name}" src="${src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
            </a>
          </td>
        </tr>
        <tr>
          <td class="newsletterBottom35px"></td>
        </tr>
        <tr>
          <td align="center">
            ${
              ctaComponent
                ? ctaComponent(href, cta)
                : `
                <a href="${href}" style="color:${color || "#000"}; text-decoration: underline;">
                  <span class="newsletterCta">${cta}</span>
                </a>
              `
            }
          </td>
        </tr>
        <tr>
          <td class="newsletterBottom80px"></td>
        </tr>
        <tr>
          <td>
              ${Line(line)}
          </td>
        </tr>
      </tbody>
    </table>
        `;
      }
      return `
   
    `;
    }

    if (type === "no_products") {
      if (idx === len) {
        return `
<table border="0" cellspacing="0" cellpadding="0" width="100%">
      <tbody>
        <tr>
          <td align="${align}" class="${className}">
            ${Title({ title: name, align, color: color })}
          </td>
        </tr>
        <tr>
          <td class="newsletterBottom35px"></td>
        </tr>
        <tr>
          <td class="${img_class}">
            <a href="${href}">
              <img alt="${name}" src="${src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
            </a>
          </td>
        </tr>

       

        <tr>
          <td class="newsletterBottom35px"></td>
        </tr>
        <tr>
          <td align="center">
            ${
              ctaComponent
                ? ctaComponent(href, cta)
                : `
                <a href="${href}" style="color:${color || "#000"}; text-decoration: underline;">
                  <span class="newsletterCta">${cta}</span>
                </a>
              `
            }
          </td>
        </tr>
        <tr>
          <td class="newsletterBottom35px"></td>
        </tr>
      </tbody>
    </table>
        `;
      }
      return `
    <table border="0" cellspacing="0" cellpadding="0" width="100%">
      <tbody>
        <tr>
          <td class="${className}">
            ${Title({ title: name, align: "left", color: color })}
          </td>
        </tr>
        <tr>
          <td class="newsletterBottom35px"></td>
        </tr>
        <tr>
          <td class="${img_class}">
            <a href="${href}">
              <img alt="${name}" src="${src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
            </a>
          </td>
        </tr>
        <tr>
          <td class="newsletterBottom35px"></td>
        </tr>
        <tr>
          <td align="center">
            ${
              ctaComponent
                ? ctaComponent(href, cta)
                : `
                <a href="${href}" style="color:${color || "#000"}; text-decoration: underline;">
                  <span class="newsletterCta">${cta}</span>
                </a>
              `
            }
          </td>
        </tr>
        <tr>
          <td class="newsletterBottom35px"></td>
        </tr>
        <tr>
          <td class="${className}">
              ${Line(line)}
          </td>
        </tr>
      </tbody>
    </table>
    `;
    }

    if (type === "monday") {
      return `
  <table border="0" cellspacing="0" cellpadding="0" width="100%">
    <thead>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          ${Title({ title: name, align: "left", color: color })}
        </td>
      </tr>
      <tr>
        <td class="newsletterBottom35px"></td>
      </tr>
      <tr>
        <td>
          ${ImageWithLink({ href: href, src: src, alt: name })}
        </td>
      </tr>
      <tr>
        <td class="newsletterBottom35px"></td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tr>
              <td class="newsletterBottom20px">
                <!-- 1-2 Products table -->
                <table cellspacing="0" cellpadding="0" style="width: 100%; ">
                  <tr>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
                      ${Product(products[0], "left", `color: ${color || "#000000"}`)}
                    </td>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
                      ${Product(products[1], "left", `color: ${color || "#000000"}`)}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <!-- 3-4 Products table -->
                <table cellspacing="0" cellpadding="0" style="width: 100%; ">
                  <tr>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
                      ${Product(products[2], "left", `color: ${color || "#000000"}`)}
                    </td>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
                      ${Product(products[3], "left", `color: ${color || "#000000"}`)}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="newsletterBottom35px">
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td class="newsletterBottom80px">
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px; text-align: center;">
                  ${
                    ctaComponent
                      ? ctaComponent(href, cta)
                      : `
                      <a href="${href}" style="color:${color || "#000"}; text-decoration: underline;">
                        <span class="newsletterCta">${cta}</span>
                      </a>
                    `
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  `;
    }
    if (type === "mondaywithparagraph") {
      return `
  <table border="0" cellspacing="0" cellpadding="0" width="100%">
    <thead>
      <tr>
        <td class="newsletterBottom35px"></td>
      </tr>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          ${Title({ title: name, align: "center", color: color })}
        </td>
      </tr>
      <tr>
        <td class="newsletterBottom35px"></td>
      </tr>
      <tr>
        <td>
          ${ImageWithLink({ href: href, src: src, alt: name })}
        </td>
      </tr>
      <tr>
        <td class="newsletterBottom35px"></td>
      </tr>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
              <tbody>
                  <tr>
                      <td align="center">
                          <span class="newsletterParagraph" style="color:${color}">
                              ${desc}
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
    </thead>
    <tbody>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tr>
              <td class="newsletterBottom20px">
                <!-- 1-2 Products table -->
                <table cellspacing="0" cellpadding="0" style="width: 100%; ">
                  <tr>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
                      ${Product(products[0], "left")}
                    </td>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
                      ${Product(products[1], "left")}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <!-- 3-4 Products table -->
                <table cellspacing="0" cellpadding="0" style="width: 100%; ">
                  <tr>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
                      ${Product(products[2], "left")}
                    </td>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
                      ${Product(products[3], "left")}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="newsletterBottom35px">
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td class="newsletterBottom80px">
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px; text-align: center;">
                  ${
                    ctaComponent
                      ? ctaComponent(href, cta)
                      : `
                      <a href="${href}" style="color:${color || "#000"}; text-decoration: underline;">
                        <span class="newsletterCta">${cta}</span>
                      </a>
                    `
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  `;
    }
    if (type === "OnlyImage") {
      if (idx === len) {
        return `
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
          <thead>
            <tr>
              <td>
                ${ImageWithLink({ href: href, src: src, alt: name })}
              </td>
            </tr>
            <tr>
              <td>
                  ${Space({ className: "newsletterBottom20px" })}
              </td>
            </tr>
          </thead>
        </table>
        `;
      }
      return `
      <table cellspacing="0" cellpadding="0" border="0" width="100%">
        <thead>
          <tr>
            <td>
              ${ImageWithLink({ href: href, src: src, alt: name })}
            </td>
          </tr>
            <tr>
              <td>
                ${Space({ className: "newsletterBottom80px" })}
              </td>
            </tr>
        </thead>
      </table>
      `;
    }

    if (type === "image") {
      if (idx === len) {
        return `
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
          <thead>
            <tr>
              <td>
                ${ImageWithLink({ href: href, src: src, alt: name })}
              </td>
            </tr>
            <tr>
              <td>
                  ${Space({ className: "newsletterBottom20px" })}
              </td>
            </tr>
            <tr>
              <td>
                  ${Line(line)}
              </td>
            </tr>
          </thead>
        </table>
        `;
      }
      return `
      <table cellspacing="0" cellpadding="0" border="0" width="100%">
        <thead>
          <tr>
            <td>
              ${ImageWithLink({ href: href, src: src, alt: name })}
            </td>
          </tr>
            <tr>
              <td>
                ${Space({ className: "newsletterBottom20px" })}
              </td>
            </tr>
        </thead>
      </table>
      `;
    }
    if (type === "one_freebie") {
      if (idx === len) {
        return `
<table class="newsletterContainer" border="0" cellspacing="0" cellpadding="0" width="100%">
      <tbody>
        <tr>
          <td>
            <a href="${href}">
              <img alt="${name}" src="${src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
            </a>
          </td>
        </tr>
        <tr>
          <td class="newsletterBottom35px"></td>
        </tr>
        <tr>
          <td align="${align}">
            ${Title({ title: name, align, color: color, className: "newsletterProductTitle", type: "product", size })}
          </td>
        </tr>
        <tr>
          <td class="newsletterBottom80px"></td>
        </tr>
      </tbody>
    </table>
        `;
      }
      return `
    
    `;
    }

    if (type === "productImg") {
      if (idx === len) {
        return `
        <table  border="0" cellspacing="0" cellpadding="0" width="100%">
          <tbody>
            <tr>
              <td align="center" class="${className}">
                ${Title({ title: name, align: "center", color: color })}
              </td>
            </tr>
            <tr>
              <td class="newsletterBottom35px"></td>
            </tr>
            <tr>
              <td class="${img_class}">
                <a href="${href}">
                  <img alt="${name}" src="${src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                </a>
              </td>
            </tr>
            ${
              productImg
                ? `
              <tr>
                <td class="newsletterBottom35px"></td>
              </tr>
              <tr>
                <td >
                  ${productImg}
                </td>
              </tr>
            `
                : ""
            }
            <tr>
              <td class="newsletterBottom35px"></td>
            </tr>
            <tr>
              <td align="center">
                ${
                  ctaComponent
                    ? ctaComponent(href, cta)
                    : `
                    <a href="${href}" style="color:${color || "#000"}; text-decoration: underline;">
                      <span class="newsletterCta">${cta}</span>
                    </a>
                  `
                }
              </td>
            </tr>
            <tr>
              <td class="newsletterBottom80px"></td>
            </tr>
          </tbody>
        </table>
      `;
      }
      return `
        <table border="0" cellspacing="0" cellpadding="0" width="100%">
          <tbody>
            <tr>
              <td align="center" class="${className}">
                ${Title({ title: name, align: "center", color: color })}
              </td>
            </tr>
            <tr>
              <td class="newsletterBottom35px"></td>
            </tr>
            <tr>
              <td class="${img_class}">
                <a href="${href}">
                  <img alt="${name}" src="${src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                </a>
              </td>
            </tr>
            ${
              productImg
                ? `
              <tr>
                <td class="newsletterBottom35px"></td>
              </tr>
              <tr>
                <td ">
                  ${productImg}
                </td>
              </tr>
            `
                : ""
            }
            <tr>
              <td class="newsletterBottom35px"></td>
            </tr>
            <tr>
              <td class="newsletterContainer" align="center">
                ${
                  ctaComponent
                    ? ctaComponent(href, cta)
                    : `
                    <a href="${href}" style="color:${color || "#000"}; text-decoration: underline;">
                      <span class="newsletterCta">${cta}</span>
                    </a>
                  `
                }
              </td>
            </tr>
            <tr>
              <td class="newsletterBottom80px"></td>
            </tr>
            <tr>
                <td class="newsletterContainer">${Line(line)}</td>
            </tr>
          </tbody>
        </table>
      `;
    }
  }
);
