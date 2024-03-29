import { makeAutoObservable, runInAction } from "mobx";
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
      runInAction(() => {
        this.pets = response.data;
        this.loading = false;
      });
    } catch (error) {
      console.error("PetStore -> fetchPets -> error", error);
    }
  };

  deletePet = async (petName) => {
    try {
      await instance.delete("/users/petOwners/pets", {
        data: {
          petName: petName,
        },
      });
      this.pets = this.pets.filter((pet) => pet.name !== petName);
    } catch (error) {
      console.error("PetStore -> deletePet -> error", error);
    }
  };

  //after signing up we create a pet-owner profile
  addPet = async (data, navigation) => {
    try {
      const response = await instance.post(`/users/petOwners/pets`, data);

      this.pets.push(response.data);
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
      // console.log("Updated", updatedPet);
      // const formData = new FormData();
      // for (const key in updatedPet) formData.append(key, updatedPet[key]);
      const response = await instance.put(`/users/petOwners/pets`, updatedPet);
      this.pets = this.pets.map((pet) =>
        pet.id === response.data.id ? response.data : pet
      );

      // navigation.goBack();
    } catch (error) {
      console.error("PetStore -> updatePet -> error", error);
    }
  };
}

const petStore = new PetStore();
petStore.fetchPets();

export default petStore;
