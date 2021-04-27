import React from "react";

import { useState } from "react";
//Mobx
import petStore from "../../../Stores/petStore";

//Style
import styled from "styled-components/native";
import { Alert } from "react-native";
import { observer } from "mobx-react";
import { RadioButton } from "react-native-paper";

//Calendar
import DatePicker from "react-native-datepicker";

// //Native content
// import DropDownPicker from "react-native-dropdown-picker";

//Images
// import Pet1 from "../../../assets/images/Pet8.jpeg";

const AddNewPet = ({ navigation, hideModal }) => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    breed: "",
    dateOfBirth: "",
    vaccinated: "",
    allergies: "",
    personality: "",
  });

  const [checked, setChecked] = React.useState(null);

  const handleSubmit = () => {
    petStore.addNewPet(pet);
    hideModal();
  };

  // const handleSubmit = async () => {
  //   await petStore.addNewPet(pet);
  //   if (petStore.pets) navigation.navigate("Post");
  // };

  return (
    <>
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
        <RadioButton.Item label="Yes" value="True" />
        <RadioButton.Item label="No" value="False" />
      </RadioButton.Group>

      {/* Taiba's Radio Button */}

      {/* <LabelStyle>Vaccinated? *</LabelStyle>
      <FieldView>
        <TextStyle>Yes</TextStyle>
        <RadioView>
          <RadioButton
            onValueChange={(vaccinated) => setPet({ ...pet, vaccinated })}
            value={pet.vaccinated}
            status={checked === "True" ? "checked" : "unchecked"}
            onPress={() => setChecked("True")}
          />
        </RadioView>

        <TextStyle>No</TextStyle>
        <RadioView>
          <RadioButton
            onValueChange={(vaccinated) => setPet({ ...pet, vaccinated })}
            value={pet.vaccinated}
            status={checked === "False" ? "checked" : "unchecked"}
            onPress={() => setChecked("False")}
          />
        </RadioView>
      </FieldView> */}

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

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Add</AuthButtonText>
      </AuthButton>
    </>
  );
};

export const TextStyle = styled.Text`
  color: white;
  font-weight: bold;
  margin-top: 10px;
  align-self: auto;
  /* font-style: bold; */
`;
export const TextTitleStyle = styled.Text`
  color: #f0ba00;
  font-weight: bold;
  margin: 10px;
  text-align: left;
  font-size: 20px;
`;

export const FieldView = styled.View`
  flex-direction: row;
  /* color: white; */
  /* background-color: rgba(255, 255, 255, 0.3); */
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;
export const RadioView = styled.View`
  background-color: rgba(225, 225, 225, 0.6);
  flex-wrap: wrap;
  flex-direction: row;
  border-radius: 20px;
  padding: 7px;
`;

const LabelStyle = styled.Text`
  color: white;
  font-size: 16px;
  margin-top: 7%;
  /* padding: 1%; */
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
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

export default observer(AddNewPet);
