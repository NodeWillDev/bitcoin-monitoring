import { join } from "node:path";
import { BrowserWindow, app, nativeImage } from "electron";

app.whenReady().then(async () => {
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
      sandbox: false,
      contextIsolation: true,
    },
  });

  window.webContents.openDevTools();
  window.loadFile("./src/index.html");
});
