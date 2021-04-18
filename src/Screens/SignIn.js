import React from "react";
import authStore from "../../Stores/authStore";
import { useState } from "react";
import { Icon } from "native-base";

import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

import styled from "styled-components/native";

//Styles compounents
export const HubLogoImage = styled.Image`
  flex: 1;
  /* resizemode: contain; */
  justify-content: center;
`;

export const HomeBackground = styled.ImageBackground`
  flex: 2;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
export const TextStyled = styled.Text`
  color: #ded9fe;
`;
export const InputStyled = styled.TextInput`
  color: white;
`;

export const Iconstyled = styled(Icon)`
  color: red;
`;

const SignIn = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [passwordIcon, setPasswordIcon] = useState("eye");
  const [passwordVisibilty, setPasswordVisibilty] = useState(true);

  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.navigate("Tabs");
  };

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
    <View style={styles.container}>
      <InputStyled
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
      />

      <InputStyled
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={passwordVisibilty}
        onChangeText={(password) => setUser({ ...user, password })}
      />

      <Iconstyled
        name={passwordIcon}
        type="MaterialCommunityIcons"
        onPress={handlePassword}
      />

      <TouchableOpacity
        style={styles.submitButton}
        // onPress={() => navigation.navigate("Dashboard")}
        onPress={handleSubmit}
      >
        <TextStyled style={styles.submitButtonText}> Sign In </TextStyled>
      </TouchableOpacity>
      <TextStyled> Create a New Account </TextStyled>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <TextStyled style={styles.text}> Sign Up </TextStyled>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    // paddingTop:"25%",
    justifyContent: "center",
    backgroundColor: "rgba(222, 217, 254, 0.4)",
    alignItems: "center",
    fontSize: 35,
  },
  text: {
    textDecorationLine: "underline",
  },
  input: {
    textAlign: "center",

    margin: "5%",
    height: "14%",
    width: "80%",
    borderColor: "rgba(239, 236, 253, 0.8)",
    backgroundColor: "rgba(239, 236, 253, 0.8)",
    borderWidth: 0.5,
    fontSize: 18,
    borderRadius: 100,
  },
  submitButton: {
    backgroundColor: "#BDB2FF",
    padding: "3%",
    color: "white",
    margin: "1%",
    height: "10%",
    width: "30%",
    borderRadius: 20,
  },
  submitButtonText: {},
});

// import React from "react";
// import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

// const SignIn = ({ navigation }) => {
//   return (
//     <View style={styles.container}>

//       <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
//     <Text>Click Here</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SignIn;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#8fcbbc",
//   },
// });
