import { DOMSelectors } from "./dom.js";
import { products } from "./products.js";
import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
//dont forget about encapsulation of functions in an object.

function htmlthing(object) {
  DOMSelectors.divMain.insertAdjacentHTML(
    "beforeend",
    `<div class="productCard" data-aos="fade-up"><h3 id="prodName">${object.name}</h3>
      <img src="${object.img}" class="img"> 
      <p id="prodIsVeg">Vegetarian:${object.vegetarian}</p> 
      <p id="prodPrice">Price: $${object.price}</p>
      <p id="prodIsInStock">In Stock: ${object.inStock}</p></div>
      `
  );
}

function makeCard(array) {
  array.forEach((product) => {
    htmlthing(product);
  });
}
makeCard(products);

DOMSelectors.themeButton.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});

DOMSelectors.filterVeg.addEventListener("click", function () {
  DOMSelectors.divMain.innerHTML = "";
  const vegArr = products.filter((products) =>
    products.vegetarian.includes("Yes")
  );
  makeCard(vegArr);
});
DOMSelectors.reset.addEventListener("click", function () {
  DOMSelectors.divMain.innerHTML = "";
  makeCard(products);
});
