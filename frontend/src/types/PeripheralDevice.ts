export type IPeripheralDevice = {
  _id: string;
  vendor: string;
  status: "online" | "offline";
  uid: number;
  created_at?: string;
};
