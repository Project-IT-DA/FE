import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_BASEURL,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    "Access-Control-Allow-Origin": "*",
  },
});
