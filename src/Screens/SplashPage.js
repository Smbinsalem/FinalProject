import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
//Images
import Pet8 from "../../assets/images/Pet8.jpeg";

const SplashPage = ({ navigation }) => {
  return (
    <BackgroundIMG source={Pet8}>
      <Container>
        <AuthButton onPress={() => navigation.navigate("SignIn")}>
          <AuthButtonText>Sign In</AuthButtonText>
        </AuthButton>
        <AuthButton onPress={() => navigation.navigate("SignUp")}>
          <AuthButtonText>Sign Up</AuthButtonText>
        </AuthButton>
      </Container>
    </BackgroundIMG>
  );
};

export default SplashPage;

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
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #f0ba00;
  margin-top: 30px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
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
