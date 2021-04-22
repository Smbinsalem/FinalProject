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
  addPet = async (data, navigation) => {
    try {
      const response = await instance.post(`/users/petOwners/pets`, data);
      this.pets.push(response.data);
      navigation.navigate("Tabs");
    } catch (error) {
      console.error("PetStore -> addPet -> error", error);
    }
  };

  addNewPet = async (data, navigation) => {
    try {
      const response = await instance.post(`/users/petOwners/pets`, data);
      this.pets.push(response.data);
      // navigation.navigate("Post");
    } catch (error) {
      console.error("PetStore -> addNewPet -> error", error);
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
      addPet: action,
      addNewPet: action,
      updatePet: action,
    });
  }
}
const petStore = new PetStore();
petStore.fetchPets();

export default petStore;
