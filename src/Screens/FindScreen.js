import React from "react";
import { View, Text, Button, StyleSheet,TouchableOpacity } from "react-native";

const FindScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text> Find Screen </Text>
      <TouchableOpacity onPress={() => alert("Button Clicked !")}>
    <Text>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FindScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
