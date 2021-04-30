import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

const SwiperComponent = () => {
  return (
    <Swiper
      style={StyleSheet.wrapper}
      dotStyle={{
        width: 15,
        height: 4,
        borderRadius: 30,
        backgroundColor: "gray",
      }}
      activeDotColor="black"
      activeDotStyle={{
        width: 30,
        height: 7,
        borderRadius: 10,
        backgroundColor: "black",
        activeDotColor: "#172A3A",
      }}
    >
      <View style={styles.slide}>
        <Image
          source={require("../../assets/images/Room2.jpeg")}
          resizeMode="contain"
          style={{
            marginBottom: 60,
            borderRadius: 15,
            height: 400,
            width: 400,
            marginTop: 60,
            resizeMode: "contain",
          }}
        />
      </View>

      <View style={styles.slide}>
        <Image
          source={require("../../assets/images/Room1.jpeg")}
          resizeMode="contain"
          style={{
            marginBottom: 60,
            borderRadius: 15,
            height: 400,
            width: 400,
            marginTop: 60,
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../../assets/images/Home.jpeg")}
          resizeMode="contain"
          style={{
            marginBottom: 60,
            borderRadius: 15,
            height: 400,
            width: 400,
            marginTop: 60,
            resizeMode: "contain",
          }}
        />
      </View>
    </Swiper>
  );
};
const styles = StyleSheet.create({
  wrapper: {
//  top:-100,
  },
  slide: {
    flex: 0.6,
    marginBottom: 280,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
export default SwiperComponent;
