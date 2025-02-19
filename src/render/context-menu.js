import { ContextMenu } from "../opertatos/context/menu/context-menu.js";
import { loadTable } from "./load-table.js";

/** @type {HTMLDivElement} */
const element = document.querySelector(".context-menu");

const context = new ContextMenu({
  "Force Refresh": async () => await loadTable(),
  "Full Screen": (document, event) => window.monitoring.test(),
  "Test-3": (document, event) => console.log("test-3"),
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
