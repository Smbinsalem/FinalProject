import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components";
import bookingStore from "../../../Stores/bookingStore";
import authStore from "../../../Stores/authStore";
import BookingList from "../../Components/Booking/BookingList";
import { Spinner } from "native-base";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HostHome = ({ navigation, route }) => {
  if (bookingStore.loading) return <Spinner />;

  const myHostId = authStore.user.petHostId;

  return (
    <>
      <View
        style={{
          backgroundColor: "#172A3A",
          height: "20%",
          // paddingTop: "%",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: "10%",
            width: "100%",
          }}
        >
          <View style={{ marginTop: "30%", width: "50%" }}>
            <Text
              style={{
                top: -40,
                fontSize: 32,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Inbox
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
          marginTop: -10,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      ></LinearGradient>
      <PostWrapper>
        <BookingList navigation={navigation} />
      </PostWrapper>
    </>
  );
};

export default observer(HostHome);

//Styling
export const PostWrapper = styled.View`
  margin-top: -10%;
  margin-bottom: 10px;
  font-size: 25px;
  padding: -1%;
`;
