import Axios from "axios";
const AxiosInstance = Axios.create({
  baseURL: "http://localhost:5000",
});

export {AxiosInstance}