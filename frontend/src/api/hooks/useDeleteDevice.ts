import { axiosInstance } from "..";

export const useDeleteDevice = () => {
  return async (gatewayId: string, deviceId: string) => {
    await axiosInstance.delete(`/gateways/${gatewayId}/device/${deviceId}`);
  };
};
