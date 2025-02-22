import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";

const axiosInstance = axios.create({
  // TODO: get from env
  baseURL: "http://79.175.189.135:8080/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

// TODO: set to cookie
const getToken = () => {
  return localStorage.getItem("token");
};

const useAxios = <T,>() => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const request = (config: AxiosRequestConfig): Promise<T> => {
    setLoading(true);
    setError(null);

    // Attach token if it exists
    const token = getToken();
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return axiosInstance(config)
      .then((response: AxiosResponse<T>) => {
        setData(response.data);
        return response.data;
      })
      .catch((err: AxiosError) => {
        setError(err);
        return Promise.reject(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { data, error, loading, request };
};
export default useAxios;
export { axiosInstance };
