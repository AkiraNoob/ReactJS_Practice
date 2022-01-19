import axiosClient from "./axiosClient"

const weatherApi = {
    get() {
        const url = '/WeatherForecast';
        return axiosClient.get(url);
    }
}
export default weatherApi