import React from "react";
import { View, Text, Image } from "react-native";
import SwiperComponent from "../../constants/Swiper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const HostDetails = ({ navigation }) => {
  return (
    <View
      style={{
        paddingBottom: 105,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
          }}
        >
          <SwiperComponent />

          <View
            style={{
              flexDirection: "row",
              marginTop: -80,
              marginHorizontal: 20,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 28,
                color: "#172A3A",
              }}
            >
              FullName
            </Text>
          </View>

          <Text
            style={{
              paddingHorizontal: 20,
              fontWeight: "bold",
              color: "#172A3A",
              paddingTop: 3,
              fontSize: 20,
            }}
          >
            Host's Bio
          </Text>
          <Text
            style={{
              paddingHorizontal: 20,
              fontWeight: "bold",
              color: "#172A3A",

              fontSize: 20,
            }}
          >
            UserName
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <View
              style={{
                width: "30%",

                backgroundColor: "#f0ba00",
                height: 50,
                marginTop: 20,
                marginBottom: 30,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontWeight: "bold",
                  fontSize: 17,
                }}
              >
                Buy Now
              </Text>
            </View>

            <View
              style={{
                width: "30%",

                backgroundColor: "#f0ba00",
                height: 50,
                marginTop: 20,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 17,
                }}
              >
                Description
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default HostDetails;
