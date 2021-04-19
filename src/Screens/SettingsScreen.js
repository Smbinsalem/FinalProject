import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
//styles
import styled from "styled-components/native";
//stores
import authStore from "../../Stores/authStore";
//navigation
import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";

const SignoutButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    authStore.signout();
    navigation.navigate("SplashPage");
  };
  return (
    <SignoutButtonStyled name="logout" type="AntDesign" onPress={handlePress} />
  );
};

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text> PROFILE </Text>
      <Text> Settings Screen </Text>
      <TouchableOpacity onPress={() => alert("Button Clicked !")}>
        <Text>Click Here</Text>
      </TouchableOpacity>
      <StyledView>
        <SignoutButton />
      </StyledView>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

const SignoutButtonStyled = styled(Icon)`
  color: red;
`;

const StyledView = styled.View`
  position: absolute;
  right: 20;
  top: 60;
`;
