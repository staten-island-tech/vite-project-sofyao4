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
function changeTheme() {
  DOMSelectors.themeButton.addEventListener("click", function () {
    if (document.body.classList.contains("cool")) {
      document.body.classList.add("warm");
      document.body.classList.remove("cool");
    } else {
      document.body.classList.add("cool");
      document.body.classList.remove("warm");
    }
  });
}
changeTheme();
