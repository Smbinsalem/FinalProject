import { makeObservable, observable, action } from "mobx";
import instance from "./instance";

// ********NOTE********
// will change all routes based on the backend

class PetStore {
  pets = [];
  loading = true;

  fetchPets = async () => {
    try {
      const response = await instance.get(`/pets`);
      this.pets = response.data;
      this.loading = false;
    } catch (error) {
      console.error("PetStore -> fetchPets -> error", error);
    }
  };

  deletePet = async (petOwnerId, petId) => {
    try {
      await instance.delete(`/users/petOwners/${petOwnerId}/pets/${petId}`);
      this.pets = this.pets.filter((pet) => pet.id !== petId);
    } catch (error) {
      console.error("PetStore -> deletePet -> error", error);
    }
  };
  //after signing up we create a pet-owner profile
  createPet = async (petOwnerId, data) => {
    try {
      const response = await instance.post(
        `/users/petOwners/${petOwnerId}/pets/addPet`,
        data
      );
      this.pets.push(response.data);
    } catch (error) {
      console.error("PetStore -> createPet -> error", error);
    }
  };

  updatePet = async (petOwnerId, petId) => {
    try {
      await instance.put(`/users/petOwners/${petOwnerId}/pets/${petId}`);
      this.pets = this.pets.filter((pets) => pets.id !== petOwnerId);
    } catch (error) {
      console.error("PetStore -> updatePet -> error", error);
    }
  };

  constructor() {
    makeObservable(this, {
      pets: observable,
      fetchPets: action,
      deletePet: action,
      createPet: action,
      updatePet: action,
    });
  }
}
const petStore = new PetStore();
//   petStore.fetchPets();

export default petStore;
