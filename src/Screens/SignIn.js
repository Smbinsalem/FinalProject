import React from "react";
import { useState } from "react";

//Mobx
import authStore from "../../Stores/authStore";
import { observer } from "mobx-react";

//Styling
import { Image } from "react-native";
import styled from "styled-components/native";
import { Icon } from "native-base";

//Images
import Pet2 from "../../assets/images/Logo10.png";
import Pet5 from "../../assets/images/Logo12.png";

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
      <AuthContainer>
        <Image
          source={Pet2}
          style={{
            top: -20,
            right: 10,
            height: 200,
            width: 300,
          }}
        />
        <Image
          source={Pet5}
          style={{
            top: -20,
            right: 10,
            height: 100,
            width: 150,
          }}
        />

        <FieldView>
          <AuthTextInput
            placeholder="Username"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={(username) => setUser({ ...user, username })}
          />
        </FieldView>
        <FieldView>
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
        </FieldView>
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Sign in</AuthButtonText>
        </AuthButton>
        <AuthOther onPress={() => navigation.navigate("SignUp")}>
          Click here to register!
        </AuthOther>
      </AuthContainer>
    </>
  );
};

export default observer(SignIn);

//****************  STYLING  *************//
export const FieldView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;
export const BackgroundIMG = styled.ImageBackground`
  flex: 1;
  height: 90%;
  width: 100%;
  justify-content: center;
`;
export const AuthContainer = styled.View`
  flex: 4;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  background-color: #172a3a;
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
  font-size: 17px;
  height: 40px;
  width: 90%;
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

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 15px;
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

export const AuthOther = styled.Text`
  color: white;
  margin-top: 15px;
`;

export const Iconstyled = styled(Icon)`
  margin-top: 5;
  color: #f0ba00;
`;
