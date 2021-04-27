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

      <DatePicker
        style={{
          width: 240,
          margin: "auto",
          right: 25,
        }}
        date={pet.dateOfBirth}
        mode="date"
        placeholder="Date of Birth *"
        format="YYYY-MM-DD"
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
      <LabelStyle>Vaccinated? *</LabelStyle>
      <RadioButton.Group
        onValueChange={(vaccinated) => setPet({ ...pet, vaccinated })}
        value={pet.vaccinated}
      >
        <FieldView>
          <TextStyle>Yes</TextStyle>
          <RadioView>
            <RadioButton label="Yes" value="True" />
          </RadioView>
        </FieldView>
        <FieldView>
          <TextStyle>No</TextStyle>
          <RadioView>
            <RadioButton label="No" value="False" />
          </RadioView>
        </FieldView>
      </RadioButton.Group>
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
  color: white;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10px;
  justify-content: space-evenly;
`;
export const RadioView = styled.View`
  background-color: rgba(225, 225, 225, 0.3);
  flex-wrap: wrap;
  flex-direction: row;
  border-radius: 50px;
  padding: 1px;
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
  font-size: 17px;
  height: 40px;
  width: 110%;
  margin-bottom: 30px;
  right: 10;
  color: white;
  padding: 3%;
  border-color: #f0ba00;
  border-width: 1px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

export default observer(AddNewPet);
