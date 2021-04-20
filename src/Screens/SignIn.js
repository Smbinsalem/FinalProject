import React from "react";
import { useState } from "react";

//Mobx
import authStore from "../../Stores/authStore";
import { observer } from "mobx-react";

//Styling
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Icon } from "native-base";
//Images
import Pet1 from "../../assets/images/Pet8.jpeg";

const SignIn = ({ navigation }) => {
  // if (authStore.user) navigation.replace("Home");

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => authStore.signin(user, navigation);

  //Eye icon
  const [passwordIcon, setPasswordIcon] = useState("eye-off-outline");
  const [passwordVisibilty, setPasswordVisibilty] = useState(true);

  const handlePassword = () => {
    if (passwordIcon === "eye-off-outline") {
      setPasswordIcon("eye-outline");
      setPasswordVisibilty(false);
    } else {
      setPasswordIcon("eye-off-outline");
      setPasswordVisibilty(true);
    }
  };

  return (
    <>
      <BackgroundIMG source={Pet1}>
        <AuthContainer>
          
          <AuthTextInput
            placeholder="Username"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={(username) => setUser({ ...user, username })}
          />
          <PasswordView>
          <AuthTextInput
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor="white"
            secureTextEntry={passwordVisibilty}
            onChangeText={(password) => setUser({ ...user, password })}
          />
          <Iconstyled
            name={passwordIcon}
            type="MaterialCommunityIcons"
            onPress={handlePassword}
          />
        </PasswordView>
          <AuthButton onPress={handleSubmit}>
            <AuthButtonText>Sign in</AuthButtonText>
          </AuthButton>
          <AuthOther onPress={() => navigation.navigate("SignUp")}>
            Click here to register!
          </AuthOther>
        </AuthContainer>
      </BackgroundIMG>
    </>
  );
};

export default observer(SignIn);

//****************  STYLING  *************//
export const PasswordView= styled.View`
/* flex:1; */
flex-direction:row;
flex-wrap:wrap;
width:100%;
justify-content: space-between;
/* border-bottom-color: #f0ba00;
  border-bottom-width: 1px; */
`;
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
  width:85%;
  margin-bottom: 30px;
  color: white;
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  /* align-self: stretch; */
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

export const AuthOther = styled.Text`
  color: white;
  margin-top: 15px;
`;

export const Iconstyled = styled(Icon)`
  color: #f0ba00;
`;
