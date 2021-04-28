/**
 * Authouse Bridge - SDK
 */

import { DeviceInfo } from "./DeviceInfo";

export default class BridgeSDK {
  private bridgeHost: string;

  private deviceId: string | null = null;

  private connection: WebSocket | null = null;

  constructor(bridgeHost: string = "localhost:3001") {
    this.bridgeHost = bridgeHost;
  }

  private get BridgeHttp(): string {
    return `http://${this.bridgeHost}`;
  }

  private get BridgeWs(): string {
    return `ws://${this.bridgeHost}`;
  }

  get Device(): string | null {
    return this.deviceId;
  }

  set Device(dev: string) {
    this.deviceId = dev;
  }

  async getAvailableDevices(): Promise<DeviceInfo | null> {
    const resp = await fetch(`${this.BridgeHttp}/ports`);
    return resp.ok ? resp.json() : null;
  }

  get isConnectedToBridge(): boolean {
    return this.connection !== null;
  }

  connectToBridge(portId: string, callback: () => void): void {
    const connection = new WebSocket(`${this.BridgeWs}/ports/${portId}`);

    connection.addEventListener("open", () => {
      console.info("created the WebSocket connection");

      connection.addEventListener("close", () => {
        console.info("the connection has closed");
      });

      this.connection = connection;
      callback();
    });

    connection.addEventListener("error", () => {
      console.error("failed to create the connection");
    });
  }

  get BridgeConnection(): WebSocket | null {
    return this.connection;
  }
}
