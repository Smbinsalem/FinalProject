import React from "react";
import { Text } from "react-native";
import authStore from "../../../Stores/authStore";
import { useState } from "react";
import styled from "styled-components/native";

//Images
import Pet1 from "../../../assets/images/Pet8.jpeg";
const HostSignUp = ({ navigation }) => {
  const [host, setHost] = useState({
    bio: "",
    location: "",
    typeOfPets: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(host);
    if (authStore.user) navigation.navigate("Tabs");
    // if (authStore.user) navigation.navigate("Tabs");
  };
  return (
    <BackgroundIMG source={Pet1}>
      <Container>
        <AuthTextInput
          placeholder="Location"
          placeholderTextColor="white"
          onChangeText={(location) => setHost({ ...host, location })}
        />
        <AuthTextInput
          placeholder="Type of Pets"
          placeholderTextColor="white"
          onChangeText={(typeOfPets) => setHost({ ...host, typeOfPets })}
        />
        <AuthTextInput
          placeholder="Bio"
          placeholderTextColor="white"
          onChangeText={(Bio) => setHost({ ...host, Bio })}
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
export default HostSignUp;
