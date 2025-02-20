//i don't use require
//why i think ugly
//But here I need it :*(
const { contextBridge, ipcRenderer, ipcMain } = require("electron");

contextBridge.exposeInMainWorld("monitoring", {
  test: () => ipcRenderer.send("test", {}),
});
