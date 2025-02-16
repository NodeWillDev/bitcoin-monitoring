import "./context-menu.js";
import { loadTable } from "./load-table.js";

setInterval(await loadTable(), 123000);
