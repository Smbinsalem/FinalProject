import React from "react";
import authStore from "../../Stores/authStore";
import { useState } from "react";
import { Icon } from "native-base";
import styled from "styled-components/native";

//Images
import Pet1 from "../../assets/images/Pet8.jpeg";

const SignUp = ({ navigation }) => {
  // if (authStore.user) navigation.replace("Home");

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    contactNumber: "",
    gender: "",
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) navigation.navigate("Tabs");
  };

  return (
    <>
      <BackgroundIMG source={Pet1}>
        <AuthContainer>
          <AuthTextInput
            placeholder="First Name"
            placeholderTextColor="white"
            onChangeText={(firstName) => setUser({ ...user, firstName })}
          />
          <AuthTextInput
            placeholder="Last Name"
            placeholderTextColor="white"
            onChangeText={(lastName) => setUser({ ...user, lastName })}
          />
          <AuthTextInput
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={(email) => setUser({ ...user, email })}
          />
          <AuthTextInput
            placeholder="Date of Birth"
            placeholderTextColor="white"
            onChangeText={(dateOfBirth) => setUser({ ...user, dateOfBirth })}
          />
          <AuthTextInput
            placeholder="Contact Number"
            placeholderTextColor="white"
            onChangeText={(contactNumber) =>
              setUser({ ...user, contactNumber })
            }
          />
          <AuthTextInput
            placeholder="Gender"
            placeholderTextColor="white"
            onChangeText={(gender) => setUser({ ...user, gender })}
          />
          <AuthTextInput
            placeholder="Username"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={(username) => setUser({ ...user, username })}
          />
          <AuthTextInput
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
          />

          <AuthButton onPress={handleSubmit}>
            <AuthButtonText>Sign Up</AuthButtonText>
          </AuthButton>
          <AuthOther onPress={() => navigation.navigate("SignIn")}>
            Click here if you already have an account!
          </AuthOther>
        </AuthContainer>
      </BackgroundIMG>
    </>
  );
};

export default SignUp;

//****************  STYLING  *************//
export const BackgroundIMG = styled.ImageBackground`
  flex: 1;
  height: 90%;
  width: 100%;
  justify-content: center;
`;
export const AuthContainer = styled.View`
  flex: 2;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const AuthTitle = styled.Text`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: red;
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

export const AuthOther = styled.Text`
  color: white;
  margin-top: 15px;
`;

export const Iconstyled = styled(Icon)`
  color: #f0ba00;
`;
