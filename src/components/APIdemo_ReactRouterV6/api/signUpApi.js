import axiosClient from "./axiosClient";

const signUpApi = {
  post(request) {
    const url = "/api/Auth/sign-up";
    return axiosClient.post(url, request);
  },
};

export default signUpApi;
