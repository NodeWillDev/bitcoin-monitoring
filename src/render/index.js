import "./context-menu.js";
import { loadTable } from "./load-table.js";

loadTable();
setInterval(async () => await loadTable(), 123000);
