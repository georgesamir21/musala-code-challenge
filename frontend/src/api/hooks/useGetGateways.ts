import { IGateway } from "../../types/Gateway";
import { useGet } from "./useGet";

export const useGetGateways = () => {
  return useGet<IGateway[]>("/gateways");
};
