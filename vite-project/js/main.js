import { DOMSelectors } from "./dom.js";
import { products } from "./products.js";
import "../styles/style.css";
//dont forget about encapsulation of functions in an object.

function productCard() {
  products.forEach((product) => {
    DOMSelectors.divMain.insertAdjacentHTML(
      "beforeend",
      `<p class="productCard"> ${product.name} </p>`
    );
  });
}
productCard();
