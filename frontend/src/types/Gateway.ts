import { IPeripheralDevice } from "./PeripheralDevice";

export type IGateway = {
  _id: string;
  name: string;
  serial_number: string;
  ip_address: string;
  devices: IPeripheralDevice[];
};
