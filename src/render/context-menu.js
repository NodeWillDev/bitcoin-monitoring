import { ContextMenu } from "../opertatos/context/menu/context-menu.js";

/** @type {HTMLDivElement} */
const element = document.querySelector(".context-menu");

const context = new ContextMenu({
  "Test-1": (document) => console.log("test-1"),
  "Test-2": (document) => console.log("test-2"),
  "Test-3": (document) => console.log("test-3"),
});
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  context.change();
  element.style.display = !context.isOpen() ? "none" : "block";
  element.style.transform = `translate(${event.pageX}px, ${event.pageY}px)`;
  context.isOpen() ? context.show(document) : context.hidden(document);
});
