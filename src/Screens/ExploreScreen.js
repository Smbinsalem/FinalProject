import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import HostList from "../Components/Hosts/HostList";
import { observer } from "mobx-react";
const ExploreScreen = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          backgroundColor: "#172A3A",
          height: "20%",
          paddingTop: -15,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: "35%",
            width: "100%",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                top: -40,
                fontSize: 32,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Hi Petly
            </Text>
          </View>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(23, 42, 58,0.8)", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 100,
          marginTop: -50,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      ></LinearGradient>

      <ScrollView
        style={{
          backgroundColor: "#fff",
          flex: 1,
        }}
      >
        <View style={{ width: "100%" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "#172A3A",
            }}
          >
            Top Hosts
          </Text>
        </View>

        <View style={{ width: "100%", alignItems: "flex-end" }}>
          <View
            style={{
              backgroundColor: "#F0BA00",
              top: -20,
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15,
            }}
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
          </View>
        </View>
        <ScrollView
          horizontal
          style={styles.proContainer}
          showsHorizontalScrollIndicator={false}
        >
          <HostList navigation={navigation} />
        </ScrollView>

        <View style={{ width: "100%" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "#172A3A",
            }}
          >
            Featured
          </Text>
        </View>
        <View style={{ width: "100%", alignItems: "flex-end" }}>
          <View
            style={{
              backgroundColor: "#F0BA00",
              top: -20,
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15,
            }}
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
          </View>
        </View>
        <ScrollView
          horizontal
          style={styles.proContainer}
          showsHorizontalScrollIndicator={false}
        >
          <HostList navigation={navigation} />
        </ScrollView>
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
