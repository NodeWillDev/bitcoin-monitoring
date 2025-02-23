import { join } from "node:path";
import { BrowserWindow, app, ipcMain, nativeImage } from "electron";
//
//
//
//
//
app.whenReady().then(async () => {
  console.log(import.meta.dirname + join("\\preload", "preload.js"));
  const window = new BrowserWindow({
    // width: 430,
    // height: 165,
    width: 800,
    height: 500,
    titleBarStyle: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    // transparent: true,
    icon: nativeImage.createFromPath("./src/assets/icon/bitcoin.ico"),
    webPreferences: {
      preload: import.meta.dirname + join("\\preload", "preload.js"),
    },
  });
  window.webContents.openDevTools();
  window.loadFile("./src/index.html");
  ipcMain.on("test", (event, data) => {
    console.log(data.data);
  });
});
