import { axiosInstance } from "..";
import { IGateway } from "../../types/Gateway";
import { IPeripheralDevice } from "../../types/PeripheralDevice";

export const useCreateDevice = () => {
  return async (gatewayId: string, device: Partial<IPeripheralDevice>) => {
    const { data } = await axiosInstance.post<{ data: IGateway }>(
      `/gateways/${gatewayId}/device`,
      device
    );
    return data;
  };
};
