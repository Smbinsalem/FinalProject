import React from "react";

import { useState } from "react";
//Mobx
import petStore from "../../../Stores/petStore";

//Style
import styled from "styled-components/native";

// //Native content
// import DropDownPicker from "react-native-dropdown-picker";

//Images
import Pet1 from "../../../assets/images/Pet8.jpeg";
import { TouchableNativeFeedback } from "react-native";

const AddPet = ({ navigation }) => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    breed: "",
    dateOfBirth: "",
    vaccinated: "",
    allergies: "",
    personality: "",
    // image: "",
    // walkingHours: "",
    // medication: "",
    // mealTime: "",
    // allowedSnackPerDays: "",
  });

  // NOTE *** the original handle submit
  // const handleSubmit = async () => {
  //   await petStore.addPet(pet);
  //   if (petStore.pets) navigation.navigate("Tabs");
  // };

  const handleSubmit = () => petStore.addPet(pet, navigation);

  return (
    <>
      <Container>
        <AuthTextInput
          placeholder="Pet Name *"
          placeholderTextColor="white"
          onChangeText={(name) => setPet({ ...pet, name })}
        />
        <AuthTextInput
          placeholder="Type *"
          placeholderTextColor="white"
          onChangeText={(type) => setPet({ ...pet, type })}
        />
        <AuthTextInput
          placeholder="Breed *"
          placeholderTextColor="white"
          onChangeText={(breed) => setPet({ ...pet, breed })}
        />
        <AuthTextInput
          placeholder="Vaccinated? *"
          placeholderTextColor="white"
          onChangeText={(vaccinated) => setPet({ ...pet, vaccinated })}
        />
        <AuthTextInput
          placeholder="Date of Birth"
          placeholderTextColor="white"
          onChangeText={(dateOfBirth) => setPet({ ...pet, dateOfBirth })}
        />
        <AuthTextInput
          placeholder="Allergies"
          placeholderTextColor="white"
          onChangeText={(allergies) => setPet({ ...pet, allergies })}
        />
        <AuthTextInput
          placeholder="Personality"
          placeholderTextColor="white"
          onChangeText={(personality) => setPet({ ...pet, personality })}
        />
        {/* <AuthTextInput
          placeholder="Image"
          placeholderTextColor="white"
          onChangeText={(image) => setPet({ ...pet, image })}
        />
        <AuthTextInput
          placeholder="Walking Hours"
          placeholderTextColor="white"
          onChangeText={(walkingHours) => setPet({ ...pet, walkingHours })}
        />
        <AuthTextInput
          placeholder="Medication"
          placeholderTextColor="white"
          onChangeText={(medication) => setPet({ ...pet, medication })}
        />
        <AuthTextInput
          placeholder="Meal Time"
          placeholderTextColor="white"
          onChangeText={(mealTime) => setPet({ ...pet, mealTime })}
        />
        <AuthTextInput
          placeholder="Allowed Snack Per Day"
          placeholderTextColor="white"
          onChangeText={(allowedSnackPerDays) =>
            setPet({ ...pet, allowedSnackPerDays })
          }
        /> */}
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Sign Up</AuthButtonText>
        </AuthButton>
      </Container>
    </>
  );
};

export const BackgroundIMG = styled.ImageBackground`
  flex: 1;
  height: 90%;
  width: 100%;
  justify-content: center;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #f0ba00;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
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

export const Container = styled.View`
  flex: 2;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  background-color: rgba(0, 0, 0, 0.5);
`;
export default AddPet;
