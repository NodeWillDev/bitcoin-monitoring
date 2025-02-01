import { BrowserWindow, app } from "electron";

app.whenReady().then(async () => {
  const window = new BrowserWindow({
    width: 800,
    height: 500,
    // titleBarStyle: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    transparent: true,
  });
  window.webContents.openDevTools();
  window.loadFile("./src/index.html");
});
