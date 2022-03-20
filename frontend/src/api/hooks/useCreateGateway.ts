import { axiosInstance } from "..";
import { IGateway } from "../../types/Gateway";

export const useCreateGateway = () => {
  return async (gateway: Partial<IGateway>) => {
    const { data } = await axiosInstance.post<{ data: IGateway }>(
      "/gateways",
      gateway
    );
    return data;
  };
};
