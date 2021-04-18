import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const ChatScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text> Chat Screen </Text>
      <TouchableOpacity onPress={() => alert("Button Clicked !")}>
    <Text>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
