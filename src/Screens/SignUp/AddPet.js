import React from "react";

import { useState } from "react";
//Mobx
import petStore from "../../../Stores/petStore";

//Style
import styled from "styled-components/native";

// //Native content

//Images

import OwnerPet from "../../../assets/images/OwnerPet.png";
import Pet1 from "../../../assets/images/Pet8.jpeg";
import { RadioButton } from "react-native-paper";
import { View,Image } from "react-native";
//Calendar
import DatePicker from "react-native-datepicker";





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
        <Image
          source={OwnerPet}
          style={{
            top: -20,
            right: 0,
            height: 90,
            width: 120,
          }}
        />
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
        <LabelStyle>Vaccinated? *</LabelStyle>
        <RadioButton.Group
          onValueChange={(vaccinated) => setPet({ ...pet, vaccinated })}
          value={pet.vaccinated}
        >
          <RadioButton.Item labelColor="red" label="Yes" value="True" />
          <RadioButton.Item label="No" value="False" />
        </RadioButton.Group>
        <DatePicker
          style={{
            width: 340,
            margin: "auto",
            // paddingRight: 40,
          }}
          date={pet.dateOfBirth}
          mode="date"
          placeholder="Date of Birth *"
          format="YYYY-MM-DD"
          // minDate="2016-05-01"
          maxDate="2003-06-30"
          confirmBtnText="Confirm"
          showIcon={false}
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              right: 20,
              borderColor: "#f0ba00",
              color: "white",
              marginLeft: 36,
              marginBottom: 20,
              width: 120,
              fontSize: "100px",
              borderRadius: 10,
            },
          }}
          onDateChange={(date) => setPet({ ...pet, dateOfBirth: date })}
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

const LabelStyle = styled.Text`
  color: white;
  font-size: 16px;
  margin-top: 7%;
  /* padding: 1%; */
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
`;

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
  right: 5;
  margin-top: 30px;
  align-self: stretch;
  align-items: center;
  background-color: #f0ba00;
  margin-top: 30px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  font-size: 17px;
  height: 40px;
  width: 95%;
  margin-bottom: 30px;
  color: white;
  padding: 3%;
  border-color: #f0ba00;
  border-width: 1px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Container = styled.View`
  flex: 2;
  align-self: stretch;
  justify-content: center;
  /* align-items: center; */
  padding-right: 60px;
  padding-left: 60px;
  background-color: #172a3a;
`;
export default AddPet;
