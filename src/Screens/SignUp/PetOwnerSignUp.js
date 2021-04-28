import React from "react";
import { Text } from "react-native";
import ownerStore from "../../../Stores/ownerStore";
import { useState } from "react";
import styled from "styled-components/native";
import PetOwner from "../../../assets/images/PetOwner.png";
import { Image } from "react-native";
//Images
const PetOwnerSignUp = ({ navigation }) => {
  const [petOwner, setPetOwner] = useState({
    bio: "",
  });

  const handleSubmit = async () => {
    await ownerStore.createOwner(petOwner);
    if (ownerStore.owners) navigation.navigate("AddPet");
  };
  return (
    <>
      <Container>
        <Image
          source={PetOwner}
          style={{
            top: -20,
            right: 0,
            height: 120,
            width: 300,
          }}
        />
        <AuthTextInput
          placeholder="Type Your Bio Here"
          placeholderTextColor="white"
          onChangeText={(bio) => setPetOwner({ ...petOwner, bio })}
        />
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Next</AuthButtonText>
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
  right: 5;
  margin-top: 30px;
  align-self: stretch;
  align-items: center;
  background-color: #f0ba00;
  margin-top: 30px;
  border-radius:100px;
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
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  background-color: #172a3a;
`;
export default PetOwnerSignUp;
