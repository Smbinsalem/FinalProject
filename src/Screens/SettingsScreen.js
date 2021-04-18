import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";




const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
      <Text> PROFILE </Text>
      <Text> Settings Screen </Text>
      <TouchableOpacity onPress={() => alert("Button Clicked !")}>
    <Text>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
