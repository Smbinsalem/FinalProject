import { runInAction, makeAutoObservable } from "mobx";
import instance from "./instance";

//Decode
import decode from "jwt-decode";

//Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;
  allUsers = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  getUserById = (userId) => this.user.find((user) => user.id === userId);

  fetchUsers = async () => {
    if (!this.user) return;
    try {
      const response = await instance.get("/users");
      runInAction(() => {
        this.allUsers = response.data;
        this.loading = false;
      });
    } catch (error) {
      console.error(error);
    }
  };

  //set user
  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
    this.fetchUsers();
  };

  //sign up
  signup = async (userData, navigation, checked) => {
    try {
      const res = await instance.post("/users/signup", userData);
      this.setUser(res.data.token);
      if (checked === "PetOwner") {
        navigation.replace("PetOwner");
      } else if (checked === "Host") {
        navigation.replace("Host");
      }
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
        navigation.replace("Tabs");
      } else {
        navigation.replace("HostTabs");
      }
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  //sign out
  signout = async () => {
    try {
      delete instance.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem("myToken");
      this.user = null;
    } catch (error) {
      console.log("AuthStore -> Signout -> error", error);
    }
  };

  //update
  updateUser = async (updatedUser) => {
    try {
      // const formData = new FormData();
      // for (const key in updateUser) formData.append(key, updateUser[key]);
      const res = await instance.put("/users", updatedUser);
      this.user = res.data;
    } catch (error) {
      console.log("AuthStore -> updateUser -> error", error);
    }
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
// authStore.checkForToken();

export default authStore;
