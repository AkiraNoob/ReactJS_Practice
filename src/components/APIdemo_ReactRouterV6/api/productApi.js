import axiosClient from "./axiosClient";

const productApi = {
  get() {
    const url = "/api/Product/get-all-product";
    return axiosClient.get(url);
  },
};

export default productApi;
