import axios from "axios";
import env from "../env";

const instance = axios.create({
  baseURL: env.SERVER,
});

//Taiba HOTSPOT: 172.20.10.2:8000
//Taiba WIFI: 192.168.8.117:8000

//Maryam: 192.168.8.100:8001
//Salem: 192.168.8.101:8000
//Athbi: 192.168.8.159:8000

export default instance;
