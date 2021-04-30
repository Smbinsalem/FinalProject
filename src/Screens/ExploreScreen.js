import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  ScrollView,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import HostList from "../Components/Hosts/HostList";
import { observer } from "mobx-react";
import ImageSlider from "react-native-image-slider";
import { LogBox } from 'react-native';
import {YellowBox} from 'react-native';
const ExploreScreen = ({ navigation }) => {
  console.disableYellowBox = true; 
  YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

// RN < 0.52
console.ignoredYellowBox = ['Warning: ReactNative.createElement'];
  LogBox.ignoreLogs(['Warning: ...']);

  const images = [
    "https://images.unsplash.com/photo-1601890706207-fc44ed4305e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1565486019940-10cfb255721d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1615652997634-055866fc1f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1557431518-1f8e3d83c2b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  ];
  return (
    <>
      <View
        style={{
          backgroundColor: "#172A3A",
          height: "12%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: "20%",
              width: "50%",
              justifyContent: "center",
              marginLeft: 170,
            }}
          >
            <Text
              style={{
                top: -40,
                fontSize: 24,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Explore
            </Text>
          </View>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(23, 42, 58,0.8)", "transparent"]}
        style={{
          height: 50,
          marginTop: -10,
        }}
      ></LinearGradient>

      <ScrollView
        style={{
          backgroundColor: "#fff",
          flex: 1,
        }}
      >
        <View
          style={{
            padding: "1%",
            width: "100%",
            height: "100%",
            alignItems: "flex-end",
          }}
        >
          <ImageSlider
            images={images}
            style={{ height: "100%", width: "100%" }}
          />
        </View>

        <View style={{ width: "100%", height: "10%", margin: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "#172A3A",
            }}
          >
            Hosts
          </Text>
        </View>
        <View style={{ width: "100%", alignItems: "flex-end" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#F0BA00",
              top: -40,
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15,
            }}
            onPress={() => navigation.navigate("MoreHosts")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              More
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%",right:25,top:-10, height:"100%", margin:-9, }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <ScrollView
            horizontal
            style={styles.proContainer}
            showsHorizontalScrollIndicator={false}
          >
            <HostList navigation={navigation} />
          </ScrollView>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};
export default observer(ExploreScreen);

const styles = StyleSheet.create({
  proContainer: {
    marginLeft: "auto",
    alignSelf: "auto",
  },
});



