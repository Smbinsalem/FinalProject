import React from "react";

import { useState } from "react";
//Mobx
import petStore from "../../../Stores/petStore";

//Style
import styled from "styled-components/native";
import { observer } from "mobx-react";
import { ScrollView } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";

//Calendar
import DatePicker from "react-native-datepicker";

// //Native content
// import DropDownPicker from "react-native-dropdown-picker";

//Images
// import Pet1 from "../../../assets/images/Pet8.jpeg";

const EditPet = ({ navigation, newpet, hideModal }) => {
  const [pet, setPet] = useState({
    name: newpet.name,
    type: newpet.type,
    breed: newpet.breed,
    dateOfBirth: newpet.dateOfBirth,
    // vaccinated: newpet.vaccinated,
    vaccinated: Boolean,
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

  return (
    <>
      <ScrollView>
        <LabelStyle>Image</LabelStyle>
        <AuthTextInput
          value={pet.image}
          placeholder="Change Profile Photo"
          placeholderTextColor="gray"
          onChangeText={(image) => setPet({ ...pet, image })}
        />
        <LabelStyle>Name</LabelStyle>
        <AuthTextInput
          value={pet.name}
          placeholderTextColor="white"
          onChangeText={(name) => setPet({ ...pet, name })}
        />
        <LabelStyle>Type</LabelStyle>
        <AuthTextInput
          value={pet.type}
          placeholderTextColor="white"
          onChangeText={(type) => setPet({ ...pet, type })}
        />
        <LabelStyle>Breed</LabelStyle>
        <AuthTextInput
          value={pet.breed}
          placeholderTextColor="white"
          onChangeText={(breed) => setPet({ ...pet, breed })}
        />

        {/* <RadioView>
            <RadioButton
              value="PetOwner"
              status={checked === "PetOwner" ? "checked" : "unchecked"}
              onPress={() => setChecked("PetOwner")}
            />
          </RadioView> */}
        {/* </FieldView> */}
        {/* <AuthTextInput
          value={pet.vaccinated ? "Yes" : "No"}
          placeholderTextColor="white"
          onChangeText={(vaccinated) => setPet({ ...pet, vaccinated })}
        /> */}
        <LabelStyle>Vaccinated?</LabelStyle>

        <RadioButton.Group
          onValueChange={(vaccinated) => setPet({ ...pet, vaccinated })}
          value={pet.vaccinated}
        >
          <RadioButton.Item label="Yes" value="True" />
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
          placeholder="Date of Birth"
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

        <LabelStyle>Allergies</LabelStyle>
        <AuthTextInput
          value={pet.allergies}
          placeholder="e.g: Dust"
          placeholderTextColor="gray"
          onChangeText={(allergies) => setPet({ ...pet, allergies })}
        />
        <LabelStyle>Personality</LabelStyle>
        <AuthTextInput
          value={pet.personality}
          placeholder="e.g: Sleepy"
          placeholderTextColor="gray"
          onChangeText={(personality) => setPet({ ...pet, personality })}
        />
        <LabelStyle>Walking Hours</LabelStyle>
        <AuthTextInput
          value={pet.walkingHours}
          placeholder="e.g: Aspirin"
          placeholderTextColor="gray"
          onChangeText={(walkingHours) => setPet({ ...pet, walkingHours })}
        />
        <LabelStyle>Medication</LabelStyle>
        <AuthTextInput
          value={pet.medication}
          placeholder="e.g: Aspirin"
          placeholderTextColor="gray"
          onChangeText={(medication) => setPet({ ...pet, medication })}
        />
        <LabelStyle>Meal Time</LabelStyle>
        <AuthTextInput
          value={pet.mealTime}
          placeholder="e.g: 8am, 12pm, 6pm"
          placeholderTextColor="gray"
          onChangeText={(mealTime) => setPet({ ...pet, mealTime })}
        />
        <LabelStyle>Allowed Snacks Per Day</LabelStyle>
        <AuthTextInput
          value={pet.allowedSnackPerDays}
          placeholder="e.g: 3"
          placeholderTextColor="gray"
          onChangeText={(allowedSnackPerDays) =>
            setPet({ ...pet, allowedSnackPerDays })
          }
        />

        <AuthButton onPress={handleSubmit}>
          {/* <AuthButton onPress={() => alert("go to post screen")}> */}
          <AuthButtonText>Submit Changes</AuthButtonText>
        </AuthButton>
      </ScrollView>
    </>
  );
};

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 40px;
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

const LabelStyle = styled.Text`
  color: white;
  font-size: 16px;
  margin-top: 7%;
  /* padding: 1%; */
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
`;
export default observer(EditPet);
