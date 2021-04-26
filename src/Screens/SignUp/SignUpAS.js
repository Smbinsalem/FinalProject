import React from "react";
import styled from "styled-components/native";
//Images
import Pet8 from "../../../assets/images/Pet8.jpeg";

const SignUpAs = ({ navigation }) => {
  return (
    <>
      <Container>
        <AuthButtonText> I'm A... </AuthButtonText>
        <AuthButton onPress={() => navigation.navigate("PetOwner")}>
          <AuthButtonText>Pet Owner</AuthButtonText>
        </AuthButton>
        <AuthButton onPress={() => navigation.navigate("Host")}>
          <AuthButtonText>Host</AuthButtonText>
        </AuthButton>
      </Container>
    </>
  );
};

export default SignUpAs;

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

export const Container = styled.View`
  flex: 2;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  background-color: rgba(0, 0, 0, 0.5);
`;
