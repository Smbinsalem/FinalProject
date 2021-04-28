import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import SwiperComponent from "../../constants/Swiper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import hostStore from "../../../Stores/hostStore";
import { Modal } from "react-native-paper";
import AddBooking from "../Booking/AddBooking";
import authStore from "../../../Stores/authStore";
import ownerStore from "../../../Stores/ownerStore";
import petStore from "../../../Stores/petStore";
import reviewStore from "../../../Stores/reviewStore";
import { AirbnbRating } from "react-native-ratings";
import Constants from "expo-constants";

const HostDetails = ({ navigation, route }) => {
  const { user } = route.params;
  const hostProfile = hostStore.hosts?.find((host) => host.userId === user.id);
  const pets = petStore.pets.filter(
    (pet) => pet.petOwnerId === authStore.user?.petOwnerId
  );
  const hostRevs = reviewStore.reviews.find((review) => review.hostId);
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
              {user.firstName} {user.lastName}
            </Text>
          </View>
          <Text
            style={{
              paddingHorizontal: 20,
              fontWeight: "bold",
              color: "#172A3A",
              left: 18,
            }}
          >
            <AirbnbRating
              count={hostStore?.average}
              showRating={false}
              size={30}
            />
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
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("AddBooking", {
                    petHost: user,
                    pets: pets,
                  })
                }
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontWeight: "bold",
                    fontSize: 17,
                  }}
                >
                  Book Now
                </Text>
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ReviewList", { host: user })
                }
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
export default HostDetails;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     marginHorizontal: 20,
//     backgroundColor: "white",
//   },
// });
