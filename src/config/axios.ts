import axios, { AxiosRequestConfig } from "axios";

import { getCookieToken } from "./cookies";

export const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_BASEURL,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    "Access-Control-Allow-Origin": "*",
  },
});
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getCookieToken();
    if (token) {
      config.headers = { authorization: `BEARER ${token}` };
      return config;
    }
    return config;
  },
  () => {
    return;
  },
);
