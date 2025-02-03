import { join } from "node:path";
import { BrowserWindow, app } from "electron";

app.whenReady().then(async () => {
  const window = new BrowserWindow({
    width: 800,
    height: 500,
    titleBarStyle: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    transparent: true,
    webPreferences: {
      sandbox: false,
      contextIsolation: true,
    },
  });
  window.webContents.openDevTools();
  window.loadFile("./src/index.html");
});
