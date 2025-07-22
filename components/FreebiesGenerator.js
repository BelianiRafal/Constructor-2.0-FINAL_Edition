import { priceFree } from "../helpers/priceFree.js";
import { Space } from "./Space.js";
import { Freebies } from "./freebies.js";

const FreebiesGenerator = ({ freebies,  getProductById, color }) => {
  
  return freebies
    .map((freebie, idx) => {
      return `
        ${Freebies({
          products: freebie.products.map((item) => ({
            ...item,
            ...priceFree(getProductById(item.id, item.src)),
          })),
          size: freebie.size,
          color: color,
        })}
        ${Space({ className: "newsletterBottom20px" })}
        `;
    })
    .join("");
};

export default FreebiesGenerator;
