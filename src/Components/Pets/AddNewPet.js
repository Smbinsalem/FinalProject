import React from "react";

import { useState } from "react";
//Mobx
import petStore from "../../../Stores/petStore";

//Style
import styled from "styled-components/native";
import { Alert } from "react-native";

// //Native content
// import DropDownPicker from "react-native-dropdown-picker";

//Images
// import Pet1 from "../../../assets/images/Pet8.jpeg";

const AddNewPet = ({ navigation }) => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    breed: "",
    dateOfBirth: "",
  });

  const handleSubmit = () => petStore.addNewPet(pet);

  // const handleSubmit = async () => {
  //   await petStore.addNewPet(pet);
  //   if (petStore.pets) navigation.navigate("Post");
  // };

  return (
    <>
      <AuthTextInput
        placeholder="Pet Name"
        placeholderTextColor="white"
        onChangeText={(name) => setPet({ ...pet, name })}
      />
      <AuthTextInput
        placeholder="Type"
        placeholderTextColor="white"
        onChangeText={(type) => setPet({ ...pet, type })}
      />
      <AuthTextInput
        placeholder="Breed"
        placeholderTextColor="white"
        onChangeText={(breed) => setPet({ ...pet, breed })}
      />
      <AuthTextInput
        placeholder="Date of Birth"
        placeholderTextColor="white"
        onChangeText={(dateOfBirth) => setPet({ ...pet, dateOfBirth })}
      />
      {/* <AuthButton onPress={handleSubmit}> */}
      <AuthButton onPress={() => alert("go to post screen")}>
        <AuthButtonText>Add</AuthButtonText>
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

export default AddNewPet;
