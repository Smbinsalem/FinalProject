import { makeObservable, observable, action } from "mobx";
import instance from "./instance";

// What we need CRUD

// ***NOTE***
// all routes fixed!

class OwnerStore {
  owners = [];
  pets = [];
  loading = true;

  fetchOwners = async () => {
    try {
      const response = await instance.get(`/users/petOwners`);
      this.owners = response.data;
      this.loading = false;
    } catch (error) {
      console.error("OwnerStore -> fetchOwners -> error", error);
    }
  };

  // *** Note ***
  // Delete Owner Route was: /users/petOwners/${petOwnerId} // *** removed petOwnerId  ***

  deleteOwner = async (petOwnerId) => {
    try {
      await instance.delete(`/users/petOwners`);
      this.owners = this.owners.filter((owner) => owner.id !== petOwnerId);
    } catch (error) {
      console.error("OwnerStore -> deleteOwner -> error", error);
    }
  };

  //after signing up we create a pet-owner profile

  createOwner = async (data) => {
    try {
      const response = await instance.post(`/users/petOwners`, data);
      this.owners.push(response.data);
    } catch (error) {
      console.error("OwnerStore -> createOwner -> error", error);
    }
  };

  // *** Note ***
  // Update Owner Route was: /users/petOwners/${petOwnerId} // *** removed petOwnerId  ***

  updateOwner = async (petOwnerId) => {
    try {
      await instance.put(`/users/petOwners`);
      this.owners = this.owners.filter((owner) => owner.id !== petOwnerId);
    } catch (error) {
      console.error("OwnerStore -> updateOwner -> error", error);
    }
  };

  constructor() {
    makeObservable(this, {
      owners: observable,
      pets: observable,
      fetchOwners: action,
      deleteOwner: action,
      createOwner: action,
      updateOwner: action,
    });
  }
}
const ownerStore = new OwnerStore();
ownerStore.fetchPosts();

export default ownerStore;
