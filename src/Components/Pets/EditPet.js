import React from "react";

import { useState, useEffect } from "react";
//Mobx
import petStore from "../../../Stores/petStore";

//Style
import styled from "styled-components/native";
import { observer } from "mobx-react";
import { ScrollView } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import { Spinner } from "native-base";

//Image
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { completeImgPath } from "../../../util";

//Calendar
import DatePicker from "react-native-datepicker";

// //Native content
// import DropDownPicker from "react-native-dropdown-picker";

//Images
// import Pet1 from "../../../assets/images/Pet8.jpeg";

const EditPet = ({ navigation, newpet, hideModal }) => {
  if (petStore.loading) return <Spinner />;

  const [pet, setPet] = useState({
    oldPet: newpet.name,
    name: newpet.name ? newpet.name : "",
    type: newpet.type ? newpet.type : "",
    breed: newpet.breed ? newpet.breed : "",
    dateOfBirth: newpet.dateOfBirth ? newpet.dateOfBirth : "",
    // vaccinated: newpet.vaccinated,
    vaccinated: Boolean,
    allergies: newpet.allergies ? newpet.allergies : "",
    personality: newpet.personality ? newpet.personality : "",
    // image: newpet.image,
    walkingHours: newpet.walkingHours ? newpet.walkingHours : "",
    medication: newpet.medication ? newpet.medication : "",
    mealTime: newpet.mealTime ? newpet.mealTime : "",
    allowedSnackPerDays: newpet.allowedSnackPerDays
      ? newpet.allowedSnackPerDays
      : "",
  });

  const handleSubmit = () => {
    petStore.updatePet(pet);
    hideModal();
  };

  //Image Picker
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      // ImagePicker saves the taken photo to disk and returns a local URI to it
      let localUri = result.uri;
      let filename = localUri.split("/").pop();

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      setPet({ ...pet, image: { uri: localUri, name: filename, type } });
    }
  };

  return (
    <>
      <ScrollView>
        <AuthContainer>
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                flex: 1,
                width: 150,
                height: 150,
                marginLeft: "auto",
                marginRight: "auto",
                margin: "auto",
                borderRadius: "100%",
                marginBottom: 10,
                marginTop: 10,
              }}
            />
          )}
          <Button title="Change Profile Image" onPress={pickImage} />
          <LabelStyle>Name</LabelStyle>
          <AuthTextInput
            value={pet.name ? pet.name : ""}
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
          <LabelStyle>Vaccinated?</LabelStyle>
          <RadioButton.Group
            onValueChange={(vaccinated) => setPet({ ...pet, vaccinated })}
            value={pet.vaccinated}
          >
            <FieldView>
              <TextStyle>Yes</TextStyle>
              <RadioView>
                <RadioButton label="Yes" value="True" />
              </RadioView>
              <TextStyle>No</TextStyle>
              <RadioView>
                <RadioButton label="No" value="False" />
              </RadioView>
            </FieldView>
          </RadioButton.Group>
          {/* <RadioButton.Group
            onValueChange={(vaccinated) => setPet({ ...pet, vaccinated })}
            value={pet.vaccinated}
          >
            <RadioButton.Item label="Yes" value="True" />
            <RadioButton.Item label="No" value="False" />
          </RadioButton.Group> */}
          <LabelStyle>Date of Birth</LabelStyle>
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
                // right: 20,
                borderColor: "#f0ba00",
                // backgroundColor: "#f0ba00",
                color: "white",
                // marginLeft: 36,
                // marginBottom: 20,
                width: "100%",
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
        </AuthContainer>
      </ScrollView>
    </>
  );
};

export const AuthContainer = styled.View`
  flex: 4;
  align-self: stretch;
  /* justify-content: center; */
  /* align-items: center; */

  /* background-color: #172a3a; */
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  margin-top: 30px;
  align-self: stretch;
  align-items: center;
  padding: 20px;
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
  width: 100%;
  margin-bottom: 10px;
  color: white;
  padding: 3%;
  border-color: #f0ba00;
  border-width: 1px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

const LabelStyle = styled.Text`
  color: white;
  font-size: 16px;
  margin-top: 7%;
  /* padding: 1%; */
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
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

export const TextStyle = styled.Text`
  color: white;
  font-weight: bold;
  margin-top: 10px;
  align-self: auto;
`;
export default observer(EditPet);
