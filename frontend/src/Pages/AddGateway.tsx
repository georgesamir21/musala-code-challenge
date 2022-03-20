import { useState } from "react";
import { GatewayForm } from "../components/GatewayForm";
import { PeripheralDeviceForm } from "../components/PeripheralDeviceFrom";
import { IGateway } from "../types/Gateway";
import { IPeripheralDevice } from "../types/PeripheralDevice";

export const AddGateway = () => {
  const [peripheralDevices, setPeripheralDevices] = useState<
    IPeripheralDevice[]
  >([]);

  const handleAddExtraPeripheralDevice = (device: IPeripheralDevice) => {
    setPeripheralDevices(peripheralDevices.concat(device));
  };

  const handleGatewaySubmit = (gateway: IGateway) => {
    console.log(gateway)
  };

  return (
    <div className="add-gateway-form">
      <h3>Add Gateway form!</h3>
      <GatewayForm
        onSubmit={(gateway) => handleGatewaySubmit(gateway)}
      ></GatewayForm>
      <PeripheralDeviceForm
        onSubmit={(d) => handleAddExtraPeripheralDevice(d)}
      ></PeripheralDeviceForm>
    </div>
  );
};
