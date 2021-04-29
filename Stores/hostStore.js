import { makeAutoObservable, runInAction } from "mobx";
import instance from "./instance";

// What we need CRUD

// ***NOTE***
// all routes fixed!

class HostStore {
  hosts = [];
  loading = true;
  average = null;
  constructor() {
    makeAutoObservable(this);
  }
  fetchHosts = async () => {
    try {
      const response = await instance.get(`/users/petHosts`);
      runInAction(() => {
        this.hosts = response.data;
        this.loading = false;
      });
    } catch (error) {
      console.error("HostStore -> fetchHosts -> error", error);
    }
  };

  // *** Note ***
  // Delete Host Route was: /users/petHosts/${petHostId} // *** removed petHostId  ***

  deleteHost = async (petHostId) => {
    try {
      await instance.delete(`/users/petHosts`);
      this.hosts = this.hosts.filter((host) => host.id !== petHostId);
    } catch (error) {
      console.error("HostStore -> deleteHost -> error", error);
    }
  };

  //after signing up we create a pet-owner profile

  createHost = async (data) => {
    try {
      const response = await instance.post(`/users/petHosts`, data);
      this.hosts.push(response.data);
    } catch (error) {
      console.error("HostStore -> createHost -> error", error);
    }
  };

  // *** Note ***
  // Update Host Route was: /users/petHosts/${petHostId} // *** removed petHostId  ***

  updateHost = async (updatedHost) => {
    try {
      const formData = new FormData();
      for (const key in updatedHost) formData.append(key, updatedHost[key]);
      // formData.append("photo");
      const response = await instance.put(`/users/petHosts`, formData);
      this.hosts = this.hosts.map((host) =>
        host.id === response.data.id ? response.data : host
      );
    } catch (error) {
      console.error("HostStore -> updateHost -> error", error);
    }
  };
  averageReview = async (hostId) => {
    try {
      const response = await instance.get("/reviews/averageReviews", {
        params: { petHostId: hostId },
      });
      this.average = await response.data;
    } catch (error) {
      console.error("HostStore -> AverageReviews -> error", error);
    }
  };
}
const hostStore = new HostStore();
hostStore.fetchHosts();

export default hostStore;
