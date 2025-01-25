import { BrowserWindow, app } from "electron";

app.whenReady().then(() => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
  });

  window.loadFile("./src/index.html");
});
