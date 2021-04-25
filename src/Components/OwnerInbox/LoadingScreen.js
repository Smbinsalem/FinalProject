import React from "react";
import paws from "../../../assets/images/Paws.gif";
import { ImageBackground } from "react-native";
import { Spinner } from "native-base";

const LoadingScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("Inbox");
  }, 7000);

  return <Spinner />;
};

export default LoadingScreen;
