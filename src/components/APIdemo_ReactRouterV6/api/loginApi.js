import axiosClient from "./axiosClient";

const loginApi = {
  post(payload) {
    const url = "/api/Auth/login";
    return axiosClient.post(url, payload);
  },
};

export default loginApi;
