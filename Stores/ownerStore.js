import { makeObservable, observable, action } from "mobx";
import instance from "./instance";

// What we need CRUD
class OwnerStore {
    owners = [];
    pets=[];
    loading = true;
  
    fetchOwners = async () => {
      try {
        const response = await instance.get(`/users/${userId}/petOwners`);
        this.owners = response.data;
        this.loading = false;
      } catch (error) {
        console.error("OwnerStore -> fetchOwners -> error", error);
      }
    };
 
    deleteOwner = async (petOwnerId) => {
      try {
        await instance.delete(`/users/${userId}/petOwners/${petOwnerId}`);
        this.owners = this.owners.filter((owner) => owner.id !== petOwnerId);
      } catch (error) {
        console.error("OwnerStore -> deleteOwner -> error", error);
      }
    };
  //after signing up we create a pet-owner profile 
    createOwner = async (data) => {
      try {
        const response = await instance.post(`/users/${userId}/petOwners/createPetOwner`, data);
        this.owners.push(response.data);
      } catch (error) {
        console.error("OwnerStore -> createOwner -> error", error);
      }
    };
  
    updateOwner = async (petOwnerId) => {
      try {
        await instance.put(`/users/${userId}/petOwners/${petOwnerId}`);
        this.owners = this.owners.filter((owner) => owner.id !== petOwnerId);
      } catch (error) {
        console.error("OwnerStore -> updateOwner -> error", error);
      }
    };
  
    constructor() {
      makeObservable(this, {
        owners: observable,
        pets:  observable,
        fetchOwners: action,
        deleteOwner: action,
        createOwner: action,
        updateOwner: action
      });
    }
  }
  const ownerStore = new OwnerStore();
  ownerStore.fetchPosts();
  
  export default ownerStore;