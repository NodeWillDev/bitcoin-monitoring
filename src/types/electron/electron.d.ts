declare module "electron" {
  namespace Electron {
    interface CrossProcessExports {
      contextBridge: ContextBridge;
    }

    interface ContextBridge {
      exposeInMainWorld(
        apiKey: "main",
        api: Record<string, unknown>,
        options?: { secure: boolean }
      ): void;
    }
  }
}

export {};
