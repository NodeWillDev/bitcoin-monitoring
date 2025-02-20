import { MonitoringAPI } from "../window";
import "electron";

export type IPCEvents = {
  test: { data: string };
  test_2: { data: string };
};
declare global {
  namespace Electron {
    interface IpcRenderer {
      send<K extends keyof IPCEvents>(channel: K, data: IPCEvents[K]): void;
    }
    interface ContextBridge {
      exposeInMainWorld(apiKey: "monitoring", api: MonitoringAPI): void;
    }
  }
}

export {};
// // Electron.CrossProcessExports.IpcMain;
// // Electron.CrossProcessExports.IpcRenderer;
// // Electron.CrossProcessExports.ContextBridge;
