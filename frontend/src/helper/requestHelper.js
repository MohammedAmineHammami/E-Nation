import axios from "axios";

export const axiosRequest = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});
