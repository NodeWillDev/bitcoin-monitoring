import { BrowserWindow, app } from "electron";

app.whenReady().then(() => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
  });
  window.setAlwaysOnTop(true, "dock");
  window.loadFile("./src/index.html");
});
