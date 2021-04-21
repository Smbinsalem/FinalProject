import axios from "axios";

const instance = axios.create({

  baseURL: "http://192.168.8.100:8001",

});

//Taiba: 192.168.8.117:8000
//Maryam: 192.168.8.100:8001
//Salem: 192.168.8.101:8000
//Athbi: 192.168.8.159:8000

export default instance;
