import { IGateway } from "../../types/Gateway";

type Props = {
  gateway: IGateway;
};
export const Gateway = ({ gateway }: Props) => {
  return (
    <div className="gateway-item">
      <h3 className="title">{gateway.name}</h3>
      <div className="details">
        <span>No. of peripheral devices: {gateway.devices?.length}</span>
        <span>Serial number: {gateway.serial_number}</span>
        <span>IP address: {gateway.ip_address}</span>
      </div>
    </div>
  );
};
