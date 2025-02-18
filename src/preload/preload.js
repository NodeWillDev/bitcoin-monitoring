//i don't use require
//why i think ugly
//But here I need it :*(
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  open: () => ipcRenderer.send("test", { data: "data-send" }),
});
