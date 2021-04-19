import React from "react";
import authStore from "../../Stores/authStore";
import { useState } from "react";
import { Icon } from "native-base";
import { observer } from "mobx-react";
import styled from "styled-components/native";


//Images 
import Pet1 from "../../assets/images/Pet8.jpeg"


const SignIn = ({ navigation }) => {
  if (authStore.user) navigation.replace("Home");

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

const handleSubmit = async () => {
    await authStore.signin(user);
  };

  //Eye icon 
const [passwordIcon, setPasswordIcon] = useState("eye");
const [passwordVisibilty, setPasswordVisibilty] = useState(true);

    const handlePassword = () => {
    if (passwordIcon === "eye") {
      setPasswordIcon("eye-off");
      setPasswordVisibilty(false);
    } else {
      setPasswordIcon("eye");
      setPasswordVisibilty(true);
    }
  };

  return (
    <>
     <BackgroundIMG source={Pet1}>
        <AuthContainer>
          <AuthTextInput
            placeholder="Username"
            placeholderTextColor="white"
            onChangeText={(username) => setUser({ ...user, username })}
          />
          <AuthTextInput
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={passwordVisibilty}
            onChangeText={(password) => setUser({ ...user, password })}
          />
           <Iconstyled
      name={passwordIcon}
      type="MaterialCommunityIcons"
        onPress={handlePassword}
             />
          <AuthButton onPress={handleSubmit}>
            <AuthButtonText>Sign in</AuthButtonText>
          </AuthButton>
          <AuthOther onPress={() => navigation.navigate("signup")}>
            Click here to register!
          </AuthOther>
        </AuthContainer>
        </BackgroundIMG>
    </>
  );
};

export default observer(SignIn);

//****************  STYLING  *************//
export const BackgroundIMG= styled.ImageBackground`
flex: 1;
height:90%;
width:100%;
justify-content:center;
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
  border-bottom-color: #F0BA00;
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #F0BA00;
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
  color: #F0BA00;
`;

