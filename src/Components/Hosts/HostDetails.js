import React from "react";
import { View, Text,Image } from "react-native";
import SwiperComponent from "../../constants/Swiper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import hostStore from "../../../Stores/hostStore";
import authStore from "../../../Stores/authStore";
import petStore from "../../../Stores/petStore";
import reviewStore from "../../../Stores/reviewStore";
import { completeImgPath } from "../../../util";

import { AirbnbRating } from "react-native-ratings";


const HostDetails = ({ navigation, route }) => {
  const { user } = route.params;
  
  const hostProfile = hostStore.hosts?.find((host) => host.userId === user.id);
  const pets = petStore.pets.filter(
    (pet) => pet.petOwnerId === authStore.user?.petOwnerId
  );
  const hostRevs = reviewStore.reviews.find((review) => review.hostId);
  hostStore.averageReview(hostProfile.id);

  return (
    <>
        <ScrollView>
    <View
      style={{
        backgroundColor:"#172A3A",
      }}
    >
      <Image
        source={
          hostProfile?.image
            ? { uri: completeImgPath(hostProfile?.image) }
            : null
        }
        style={{
          flex: 1,
          width: 150,
          height: 150,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 100,
          marginBottom: -100,
          marginTop: 50,

        }}
      />
        <View
          style={{
            flex:1,
            marginTop:200,
            
          }}
        >
      
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
                marginLeft:"auto",
                marginRight:"auto",
                color: "#fff",
              }}
            >
              {user.firstName} {user.lastName}
            </Text>
          </View>
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
      
    </View>
            <SwiperComponent />
            </ScrollView>
    </>
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
