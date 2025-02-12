import { ContextMenu } from "../opertatos/context/menu/context-menu.js";

/** @type {HTMLDivElement} */
const element = document.querySelector(".context-menu");

const context = new ContextMenu();
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  context.change();
  element.style.display = !context.isOpen() ? "none" : "block";
  element.style.transform = `translate(${event.pageX}px, ${event.pageY}px)`;
});
