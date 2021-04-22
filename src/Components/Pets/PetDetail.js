import React from "react";
import { Text } from "react-native";
import { ListItem } from "native-base";
import petStore from "../../../Stores/petStore";

const PetDetail = ({ route }) => {
  // const pet = petStore.pets[0];
  const { pet } = route.params;
  return (
    <>
      <ListItem>
        <Text>{pet.name}</Text>
        <Text>{pet.type}</Text>
        <Text>{pet.breed}</Text>
        <Text>{pet.dateOfBirth}</Text>
        <Text>{pet.vaccinated}</Text>
        <Text>{pet.allergies}</Text>
        <Text>{pet.personality}</Text>
        <Text>{pet.image}</Text>
        <Text>{pet.walkingHours}</Text>
        <Text>{pet.medication}</Text>
        <Text>{pet.mealTime}</Text>
        <Text>{pet.allowedSnackPerDays}</Text>
      </ListItem>
    </>
  );
};

export default PetDetail;
