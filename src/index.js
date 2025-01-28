import { BrowserWindow, app } from "electron";

app.whenReady().then(async () => {
  const window = new BrowserWindow({
    width: 500,
    height: 100,
    titleBarStyle: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    transparent: true,
  });
  // window.setAlwaysOnTop(true, "dock");
  window.loadFile("./src/index.html");
});
