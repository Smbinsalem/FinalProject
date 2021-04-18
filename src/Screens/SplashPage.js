import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const SplashPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
      <Text>SignIn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
      <Text>SignUp</Text>
</TouchableOpacity>
    </View>
  );
};

export default SplashPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});