declare module "electron" {
  namespace Electron {
    interface CrossProcessExports {
      contextBridge: ContextBridge;
    }

    interface ContextBridge {
      // Sobrescrevendo a função exposeInMainWorld com sua tipagem personalizada
      exposeInMainWorld(
        apiKey: "main",
        api: Record<string, unknown>,
        options?: { secure: boolean }
      ): void;
    }
  }
}

export {};
