import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import SwiperComponent from "../../constants/Swiper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import hostStore from "../../../Stores/hostStore";
import { AirbnbRating } from "react-native-ratings";


const HostProfileDetails = ({ navigation, route }) => {
  const { host } = route.params;
  const hostProfile = hostStore.hosts?.find((user) => (user.userId = host.id));
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
              marginBottom: -80,
              alignItems: "center",
            }}
          >
         
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: -50,
              marginHorizontal: 20,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                top:20,
                fontSize: 28,
                color: "#172A3A",
              }}
            >
              {host.firstName} {host.lastName} {`\n`}
            </Text>
          </View>
            <Text
              style={{
                fontWeight: "bold",
                left:10,
                
                fontSize: 28,
                color: "#172A3A",
              }}
            >
               <AirbnbRating
              count={hostStore?.average}
              showRating={false}
              
              selectedColor="#f0ba00"
              UnSelectedColor="#f0ba00"
              size={25}
            />
            </Text>

          <Text
            style={{
              paddingHorizontal: 30,
              fontWeight: "bold",
              color: "#172A3A",
              paddingBottom: 5,
              fontSize: 20,
            }}>
            {hostProfile.bio}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
          </View>
            <View
              style={{
                width: "30%",
                backgroundColor: "#f0ba00",
                height: 50,
                top:40,
                left:150,
                marginBottom: 100,
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
      </ScrollView>
    </View>
  );
};
export default HostProfileDetails;
