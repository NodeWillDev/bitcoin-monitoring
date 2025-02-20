export interface MonitoringAPI {
  test: () => void;
  trem_doido: () => void;
}

declare global {
  interface Window {
    monitoring: MonitoringAPI;
  }
}

export {};
