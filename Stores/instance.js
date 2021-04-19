import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.8.101:8000",
});

//Taiba: 192.168.8.117:8000
//maryam: 192.168.8.100:8001
//Salem: 192.168.8.101:8000
//exp://192.168.8.107:19000 ok shuno? ok
export default instance;
