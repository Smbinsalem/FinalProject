import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import SwiperComponent from "../../constants/Swiper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import hostStore from "../../../Stores/hostStore";

const HostProfileDetails = ({ navigation, route }) => {
  const { host } = route.params;
  const hostProfile = hostStore.hosts.find((user) => (user.userId = host.id));
  hostStore.averageReview(hostProfile.id);
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
              Average Rating: {hostStore.average}
            </Text>
          </View>
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
              {host.firstName} {host.lastName}
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
            {hostProfile.bio}
          </Text>
          <Text
            style={{
              paddingHorizontal: 20,
              fontWeight: "bold",
              color: "#172A3A",

              fontSize: 20,
            }}
          >
            {host.username}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            {/* <View
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
                Meow
              </Text>
            </View> */}

            <View
              style={{
                width: "30%",

                backgroundColor: "#f0ba00",
                height: 50,
                marginBottom: 100,
                marginLeft: 350,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Reviews", { host: host })}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 17,
                  }}
                >
                  Reviews
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default HostProfileDetails;
