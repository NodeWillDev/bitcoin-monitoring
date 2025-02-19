import "electron";
import { MonitoringAPI } from "../window";

export type IPCEvents = {
  test: { data: string };
};

declare module "electron" {
  namespace Electron {
    interface IpcMain {
      on<K extends keyof IPCEvents>(
        channel: K,
        listener: (
          event: IpcMainEvent,
          ...args: IPCEvents[K] extends void ? [] : [IPCEvents[K]]
        ) => void
      ): this;
    }
    interface IpcRenderer {
      send<K extends keyof IPCEvents>(
        channel: K,
        ...args: IPCEvents[K] extends void ? [] : [IPCEvents[K]]
      ): void;
    }
    interface ContextBridge {
      //TODO
      exposeInMainWorld(apiKey: "monitoring", api: MonitoringAPI): void;
    }
  }
}

export {};
