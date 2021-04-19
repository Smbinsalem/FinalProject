import React from "react";
import { View, Text, Button, StyleSheet,TouchableOpacity } from "react-native";

const ExploreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text> Explore Screen </Text>
      <TouchableOpacity onPress={() => alert("Button Clicked !")}>
    <Text>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
