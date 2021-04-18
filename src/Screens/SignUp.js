import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text> Startup page </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
    <Text>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
