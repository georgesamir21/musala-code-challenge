import { IGateway } from "../../types/Gateway";
import { useGet } from "./useGet";

export const useGetGatewayById = (id: string) => {
  return useGet<IGateway>(`/gateways/${id}`);
};
