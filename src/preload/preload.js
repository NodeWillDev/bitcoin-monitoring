const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  open: () => ipcRenderer.send("test", { data: "data-send" }),
});

console.log("preload".repeat(1000));
