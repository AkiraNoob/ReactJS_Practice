import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "http://api.doanky5.huyhoangdev.engineer",
  headers: {
    "content-type": "application/json-patch+json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return res.data;
    } else return res;
  },
  (err) => {
    throw err;
  }
);

export default axiosClient;
