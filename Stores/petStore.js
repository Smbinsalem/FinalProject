import { makeObservable, observable, action } from "mobx";
import instance from "./instance";

// ***NOTE***
// all routes fixed!

class PetStore {
  pets = [];
  loading = true;

  fetchPets = async () => {
    try {
      const response = await instance.get(`/users/petOwners/pets`);
      this.pets = response.data;
      // this.loading = false;
    } catch (error) {
      console.error("PetStore -> fetchPets -> error", error);
    }
  };

  deletePet = async (petId) => {
    try {
      await instance.delete(`/users/petOwners/pets`);
      this.pets = this.pets.filter((pet) => pet.id !== petId);
    } catch (error) {
      console.error("PetStore -> deletePet -> error", error);
    }
  };
  //after signing up we create a pet-owner profile
  createPet = async (data) => {
    try {
      const response = await instance.post(`/users/petOwners/pets`, data);
      this.pets.push(response.data);
    } catch (error) {
      console.error("PetStore -> createPet -> error", error);
    }
  };

  updatePet = async (petId) => {
    try {
      await instance.put(`/users/petOwners/pets`);
      this.pets = this.pets.filter((pets) => pets.id !== petId);
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
petStore.fetchPets();

export default petStore;
