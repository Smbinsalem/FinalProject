import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

const SwiperComponent = () => {
  return (
    <Swiper
      style={StyleSheet.wrapper}
      dotStyle={{
        marginTop: -200,
        width: 15,
        height: 6,
        borderRadius: 30,
        backgroundColor: "#172A3A",
      }}
      activeDotColor="#172A3A"
      activeDotStyle={{
        marginTop: -200,
        width: 30,
        height: 7,
        borderRadius: 10,
        backgroundColor: "#172A3A",
        activeDotColor: "#172A3A",
      }}
    >
      <View style={styles.slide}>
        <Image
          source={require("../../assets/images/Pet13.jpg")}
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
          source={require("../../assets/images/Pet14.jpg")}
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
          source={require("../../assets/images/Pet15.jpg")}
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
  wrapper: {},
  slide: {
    flex: 1,
    marginBottom: 150,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#172A3A",
  },
});
export default SwiperComponent;
