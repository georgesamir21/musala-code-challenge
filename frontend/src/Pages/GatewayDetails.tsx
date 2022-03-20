import { useEffect, useState } from "react";
import { IGateway } from "../types/Gateway";

export const GatewayDetails = () => {
  const [gateway, setGateway] = useState<IGateway | null>(null);
  useEffect(() => {
    // TODO: make API call to get the gateway
    setGateway({
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
    });
  }, []);

  if (!gateway) return <h3>Loading...</h3>;
  return (
    <div className="gateway-details">
      <h3 className="title">{gateway.name}</h3>

      <div className="details">
        <span>Serial number: {gateway.serial_number}</span>
        <span>IP address: {gateway.ip_address}</span>
      </div>
      <div className="devices">
        {gateway.devices.map((device) => (
          <div key={device.uid} className="device">
            <span>Vendor: {device.vendor}</span>
            <span>Status: {device.status}</span>
            <span>Created at: {device.created_at}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
