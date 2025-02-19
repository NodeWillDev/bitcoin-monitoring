export interface MonitoringAPI {
  test: () => void;
}

declare global {
  interface Window {
    monitoring: MonitoringAPI;
  }
}

export {};
