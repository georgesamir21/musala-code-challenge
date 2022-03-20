export type IPeripheralDevice = {
  _id: string;
  vendor: string;
  status: "online" | "offline";
  gateway?: string;
  uid: number;
  created_at?: string;
  updated_at?: string;
};
