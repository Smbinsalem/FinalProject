import { makeAutoObservable } from "mobx";
import instance from "./instance";
import roomStore from "./roomStore";

//decode
import decode from "jwt-decode";

//storage
import AsyncStorage from "@react-native-community/async-storage";

class AuthStore {
  user = null;
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  getUserById = (userId) => this.user.find((user) => user.id === userId);

  fetchUsers = async () => {
    try {
      const response = await instance.get("/users");
      this.user = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  //set user
  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);

    // //fetch rooms
    // roomStore.fetchRooms();
    // roomStore.fetchExplore();
  };

  //sign up
  signup = async (userData) => {
    try {
      const res = await instance.post("/users/signup", userData);
      this.setUser(res.data.token);
      console.log("signup", res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  //sign in
  signin = async (userData) => {
    try {
      const res = await instance.post("/users/signin", userData);
      this.setUser(res.data.token);
      console.log("signin", res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  //sign out
  signout = async () => {
    this.user = null;
    delete instance.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem("myToken");
  };

  //check if token exist
  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const user = decode(token);
      if (Date.now() < user.exp) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;