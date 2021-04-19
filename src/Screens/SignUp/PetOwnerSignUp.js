import React from "react";
import { Text } from "react-native";
import authStore from "../../../Stores/authStore";
import { useState } from "react";
import styled from "styled-components/native";

//Images
import Pet1 from "../../../assets/images/Pet8.jpeg";
const PetOwnerSignUp = ({ navigation }) => {
  const [petOwner, setPetOwner] = useState({
    bio: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(petOwner);
    if (authStore.user) navigation.navigate("Tabs");
  };
  return (
    <BackgroundIMG source={Pet1}>
      <Container>
        <AuthTextInput
          placeholder="Add Pet"
          placeholderTextColor="white"
          onChangeText={(pet) => setPetOwner({ ...petOwner, pet })}
        />
        <AuthTextInput
          placeholder="Bio"
          placeholderTextColor="white"
          onChangeText={(bio) => setPetOwner({ ...petOwner, bio })}
        />
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Sign Up</AuthButtonText>
        </AuthButton>
      </Container>
    </BackgroundIMG>
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
export default PetOwnerSignUp;
