import { BrowserWindow, app } from "electron";

app.whenReady().then(async () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    transparent: true,
  });
  window.setVibrancy("");
  window.setAlwaysOnTop(true, "dock");
  window.loadFile("./src/index.html");

  // window.document.querySelector("h1").innerHTML += `<input ...>`;
});
