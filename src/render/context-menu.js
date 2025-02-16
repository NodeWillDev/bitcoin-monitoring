import { ContextMenu } from "../opertatos/context/menu/context-menu.js";

/** @type {HTMLDivElement} */
const element = document.querySelector(".context-menu");

const context = new ContextMenu({
  "Test-1": (document) => console.log("test-1"),
  "Test-2": (document) => console.log("test-2"),
  "Test-3": (document) => console.log("test-3"),
  "Sub-Menu": {
    "sub-menu-1": (document) => console.log("sub-menu-1"),
    "sub-menu-2": (document) => console.log("sub-menu-2"),
    "sub-menu-3": (document) => console.log("sub-menu-3"),
  },
});
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  context.change();

  Object.assign(element.style, {
    display: context.isOpen() ? "block" : "none",
    transform: `translate(${event.pageX}px, ${event.pageY}px)`,
  });
  context.isOpen()
    ? context.show(document, document.querySelector(".context-menu"))
    : context.hidden(document);
});
