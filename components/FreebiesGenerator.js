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
<<<<<<< HEAD
          color: color,
=======
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
        })}
        ${Space({ className: "newsletterBottom20px" })}
        `;
    })
    .join("");
};

export default FreebiesGenerator;
