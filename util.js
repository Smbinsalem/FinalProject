import env from "./env";
import { Linking, Alert, Platform } from "react-native";

export const completeImgPath = (imgurl) => {
  if (imgurl.toLowerCase().startsWith("http")) return imgurl;

  return `${env.SERVER}${imgurl}`;
};

export const callNumber = (phone) => {
  console.log("callNumber ----> ", phone);
  let phoneNumber = phone;
  if (Platform.OS !== "android") {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      if (!supported) {
        Alert.alert("Phone number is not available");
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch((err) => console.log(err));
};
