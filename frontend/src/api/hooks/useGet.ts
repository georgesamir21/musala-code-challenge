import { useCallback, useEffect, useState } from "react";
import { axiosInstance } from "..";

export const useGet = <T>(path: string) => {
  const [data, setData] = useState<T | null>(null);
  const get = useCallback(async () => {
    const { data } = await axiosInstance.get<{data: T}>(path);
    setData(data.data);
  }, [path]);

  useEffect(() => {
    get();
  }, []);

  return { data, get };
};
