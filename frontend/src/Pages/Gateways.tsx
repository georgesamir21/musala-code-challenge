import { Gateway } from "../components/Gateway";
import { IGateway } from "../types/Gateway";

export const Gateways = () => {
  const gateways: IGateway[] = [
    {
      name: "test",
      _id: "5000",
      ip_address: "162.92.108.2",
      serial_number: "20336-555-555",
      devices: [
        {
          vendor: "IBM",
          _id: "500",
          status: "online",
          uid: 600000,
        },
      ],
    },
    {
      name: "test",
      _id: "50002",
      ip_address: "162.92.108.2",
      serial_number: "20336-555-555",
      devices: [
        {
          vendor: "IBM",
          _id: "500",
          status: "online",
          uid: 600000,
        },
      ],
    },
    {
      name: "test",
      _id: "50007",
      ip_address: "162.92.108.2",
      serial_number: "20336-555-555",
      devices: [
        {
          vendor: "IBM",
          _id: "500",
          status: "online",
          uid: 600000,
        },
      ],
    },
    {
      name: "test",
      _id: "50009",
      ip_address: "162.92.108.2",
      serial_number: "20336-555-555",
      devices: [
        {
          vendor: "IBM",
          _id: "500",
          status: "online",
          uid: 600000,
        },
      ],
    },
  ];

  return (
    <div className="gateway-list">
      {gateways.map((gateway) => (
        <Gateway key={gateway._id} gateway={gateway} />
      ))}
    </div>
  );
};
