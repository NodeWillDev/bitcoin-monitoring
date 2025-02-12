// import "./load-table.js";
// import "./context-menu.js";
import { ContextMenu } from "../opertatos/context/menu/context-menu.js";

const context = new ContextMenu("test", {
  "Test-1": () => console.log("test-1"),
  "Test-2": () => console.log("test-2"),
  "Test-3": () => console.log("test-3"),
});
