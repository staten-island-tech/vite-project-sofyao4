import { DOMSelectors } from "./dom.js";
import { products } from "./products.js";
import "../styles/style.css";
//dont forget about encapsulation of functions in an object.
products.forEach((object) => console.log(object.name));
