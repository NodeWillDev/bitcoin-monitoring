import { ContextMenu } from "../opertatos/context/menu/context-menu.js";

/** @type {HTMLDivElement} */
const element = document.querySelector(".context-menu");

const context = new ContextMenu();
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  context.change();
  if (!context.isOpen()) {
    element.style.display = "none";
    // document.body.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    // document.body.style.filter = "blur(2px)";
  } else {
    element.style.display = "block";
  }
  element.style.transform = `translate(${event.pageX}px, ${event.pageY}px)`;
});
