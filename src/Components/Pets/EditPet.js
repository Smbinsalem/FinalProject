import React from "react";

import { useState } from "react";
//Mobx
import petStore from "../../../Stores/petStore";

//Style
import styled from "styled-components/native";
import { Alert } from "react-native";
import { observer } from "mobx-react";

// //Native content
// import DropDownPicker from "react-native-dropdown-picker";

//Images
// import Pet1 from "../../../assets/images/Pet8.jpeg";

const EditPet = ({ navigation, newpet, hideModal }) => {
  const [pet, setPet] = useState({
    // name: "",
    // type: "",
    // breed: "",
    // dateOfBirth: "",
    // vaccinated: "",
    oldPet: newpet.name,
    allergies: newpet.allergies,
    personality: newpet.personality,
    image: newpet.image,
    walkingHours: newpet.walkingHours,
    medication: newpet.medication,
    mealTime: newpet.mealTime,
    allowedSnackPerDays: newpet.allowedSnackPerDays,
  });

  const handleSubmit = () => {
    petStore.updatePet(pet);
    hideModal();
  };
  // const handleSubmit = async () => {
  //   await petStore.addNewPet(pet);
  //   if (petStore.pets) navigation.navigate("Post");
  // };
  console.log(pet);

  return (
    <>
      <AuthTextInput
        value={pet.allergies}
        placeholder="Allergies"
        placeholderTextColor="white"
        onChangeText={(allergies) => setPet({ ...pet, allergies })}
      />
      <AuthTextInput
        value={pet.personality}
        placeholder="Personality?"
        placeholderTextColor="white"
        onChangeText={(personality) => setPet({ ...pet, personality })}
      />
      <AuthTextInput
        value={pet.image}
        placeholder="Image"
        placeholderTextColor="white"
        onChangeText={(image) => setPet({ ...pet, image })}
      />
      <AuthTextInput
        value={pet.walkingHours}
        placeholder="Walking Hours"
        placeholderTextColor="white"
        onChangeText={(walkingHours) => setPet({ ...pet, walkingHours })}
      />
      <AuthTextInput
        value={pet.medication}
        placeholder="Medication"
        placeholderTextColor="white"
        onChangeText={(medication) => setPet({ ...pet, medication })}
      />
      <AuthTextInput
        value={pet.mealTime}
        placeholder="Meal Time"
        placeholderTextColor="white"
        onChangeText={(mealTime) => setPet({ ...pet, mealTime })}
      />
      <AuthTextInput
        value={pet.allowedSnackPerDays}
        placeholder="Allowed Snack Per Day"
        placeholderTextColor="white"
        onChangeText={(allowedSnackPerDays) =>
          setPet({ ...pet, allowedSnackPerDays })
        }
      />
      <AuthButton onPress={handleSubmit}>
        {/* <AuthButton onPress={() => alert("go to post screen")}> */}
        <AuthButtonText>Submit Changes</AuthButtonText>
      </AuthButton>
    </>
  );
};

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #f0ba00;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  text-align: center;
  align-self: stretch;
  align-items: center;
  font-size: 18px;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: white;
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
`;

export default observer(EditPet);
