import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://79.175.189.135:8080/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

const getToken = () => localStorage.getItem("token");

const useAxios = <T,>(url: string, method: string, payload?: any) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = getToken();

      const config: AxiosRequestConfig = {
        url,
        method: method.toUpperCase() as AxiosRequestConfig["method"], // Ensure method is valid
        data: payload,
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      };

      const response: AxiosResponse<T> = await axios.request(config);

      setData(response.data);
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch when the hook is first used
  }, [url, method, JSON.stringify(payload)]); // Run effect when these change

  return { data, error, loading, refetch: fetchData };
};

export default useAxios;

// import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
// import { useState } from "react";

// const axiosInstance = axios.create({
//   // TODO: get from env
//   baseURL: "http://79.175.189.135:8080/api/v1/",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // TODO: set to cookie
// const getToken = () => {
//   return localStorage.getItem("token");
// };

// const useAxios = <T,>() => {
//   const [data, setData] = useState<T | null>(null);
//   const [error, setError] = useState<AxiosError | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   const request = (config: AxiosRequestConfig): Promise<T> => {
//     setLoading(true);
//     setError(null);

//     // Attach token if it exists
//     const token = getToken();
//     if (token) {
//       config.headers = {
//         ...config.headers,
//         Authorization: `Bearer ${token}`,
//       };
//     }

//     return axiosInstance(config)
//       .then((response: AxiosResponse<T>) => {
//         setData(response.data);
//         return response.data;
//       })
//       .catch((err: AxiosError) => {
//         setError(err);
//         return Promise.reject(err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };
//   return { data, error, loading, request };
// };
// export default useAxios;
// export { axiosInstance };
