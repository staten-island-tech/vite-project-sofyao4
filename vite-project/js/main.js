import { DOMSelectors } from "./dom.js";
import { products } from "./products.js";
import "../styles/style.css";
//dont forget about encapsulation of functions in an object.
// put images in the public folder

products.forEach((product) => {
  DOMSelectors.divMain.insertAdjacentHTML(
    "beforeend",
    `<div class="productCard"><p id="prodName">${product.name}</p>
      <img src="${product.img}" class="img"> 
      <p id="prodIsVeg">Vegetarian:${product.vegetarian}</p> 
      <p id="prodPrice">Price: $${product.price}</p>
      <p id="prodIsInStock">In Stock: ${product.inStock}</p></div>
      `
  );
});

DOMSelectors.themeButton.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});

DOMSelectors.filterVeg.addEventListener("click", function () {
  DOMSelectors.divMain.innerHTML = "";
  products
    .filter((products) => products.vegetarian.includes("Yes"))
    .forEach((product) => {
      DOMSelectors.divMain.insertAdjacentHTML(
        "beforeend",
        `<div class="productCard"><p id="prodName">${product.name}</p>
        <img src="${product.img}" class="img"> 
        <p id="prodIsVeg">Vegetarian:${product.vegetarian}</p> 
        <p id="prodPrice">Price: $${product.price}</p>
        <p id="prodIsInStock">In Stock: ${product.inStock}</p></div>
        `
      );
    });
});
DOMSelectors.filterStock.addEventListener("click", function () {
  DOMSelectors.divMain.innerHTML = "";
  products
    .filter((products) => products.inStock.includes("Yes"))
    .forEach((product) => {
      DOMSelectors.divMain.insertAdjacentHTML(
        "beforeend",
        `<div class="productCard"><p id="prodName">${product.name}</p>
      <img src="${product.img}" class="img"> 
      <p id="prodIsVeg">Vegetarian:${product.vegetarian}</p> 
      <p id="prodPrice">Price: $${product.price}</p>
      <p id="prodIsInStock">In Stock: ${product.inStock}</p></div>
      `
      );
    });
});
