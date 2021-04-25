import { makeObservable, makeAutoObservable, observable, action } from "mobx";
import instance from "./instance";

// ***NOTE***
// all routes fixed!

class PetStore {
  pets = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchPets = async () => {
    try {
      const response = await instance.get(`/users/petOwners/pets`);
      this.pets = response.data;
      this.loading = false;
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
      // navigation.navigate("Chat");
      // navigation.goBack();
    } catch (error) {
      console.error("PetStore -> addNewPet -> error", error);
    }
  };

  updatePet = async (updatedPet) => {
    try {
      await instance.put(`/users/petOwners/pets`, updatedPet);
      const oldPet = this.pets.find((pet) => pet.id === updatedPet.id);
      for (const key in oldPet) oldPet[key] = updatedPet[key];
      // console.log(this.pets);
      // navigation.goBack();
    } catch (error) {
      console.error("PetStore -> updatePet -> error", error);
    }
  };
}

const petStore = new PetStore();
petStore.fetchPets();

export default petStore;
