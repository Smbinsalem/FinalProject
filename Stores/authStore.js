import { makeAutoObservable } from "mobx";
import instance from "./instance";

//decode
import decode from "jwt-decode";

//storage
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  };

  //sign up
  signup = async (userData, navigation) => {
    try {
      const res = await instance.post("/users/signup", userData);
      this.setUser(res.data.token);
      navigation.navigate("SignUpAs");
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  //sign in
  signin = async (userData, navigation) => {
    try {
      const res = await instance.post("/users/signin", userData);
      await this.setUser(res.data.token);
      if (this.user.petOwnerId) {
        navigation.navigate("Tabs");
      } else {
        navigation.navigate("HostTabs");
      }
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
