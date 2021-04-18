import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.8.108:8001",
});

//exp://192.168.8.107:19000 ok shuno? ok
export default instance; 