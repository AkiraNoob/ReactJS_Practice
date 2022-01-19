import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
    baseURL: "http://api.doanky5.huyhoangdev.engineer",
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params)
})

axiosClient.interceptors.request.use(async (config) => {
    //handle Token
    return config;
})

axiosClient.interceptors.response.use((res) => {
    if (res && res.data) {
        return res.data;
    } else
        return res;
}, (err) => {
    throw err;
});

export default axiosClient