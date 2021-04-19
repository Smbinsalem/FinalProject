import { makeObservable, observable, action } from "mobx";
import instance from "./instance";

// What we need CRUD
class HostStore {
    hosts = [];

    loading = true;
  
    fetchHosts = async () => {
      try {
        const response = await instance.get(`/users/petHosts`);
        this.hosts = response.data;
        this.loading = false;
      } catch (error) {
        console.error("HostStore -> fetchHosts -> error", error);
      }
    };
 
    deleteHost = async (petHostId) => {
      try {
        await instance.delete(`/users/petHosts/${petHostId}`);
        this.hosts = this.hosts.filter((host) => host.id !== petHostId);
      } catch (error) {
        console.error("HostStore -> deleteHost -> error", error);
      }
    };
  //after signing up we create a pet-owner profile 
    createHost = async ( data) => {
      try {
        const response = await instance.post(`/users/petHosts/createPetHost`, data);
        this.hosts.push(response.data);
      } catch (error) {
        console.error("HostStore -> createHost -> error", error);
      }
    };
  
    updateHost = async ( petHostId) => {
      try {
        await instance.put(`/users/petHosts/${petHostId}`);
        this.hosts = this.hosts.filter((host) => host.id !== petHostId);
      } catch (error) {
        console.error("HostStore -> updateHost -> error", error);
      }
    };
  
    constructor() {
      makeObservable(this, {
        hosts: observable,
        fetchHosts: action,
        deleteHost: action,
        createHost: action,
        updateHost: action
      });
  }}
  const hostStore = new HostStore();
//   hostStore.fetchHosts();
  
  export default hostStore;