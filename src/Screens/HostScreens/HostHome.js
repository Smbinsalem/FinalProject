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

  return (
    <>
      <View
        style={{
          backgroundColor: "#172A3A",
          height: "12%",
          // paddingTop: "%",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 145,
          }}
        >
          <View style={{ marginTop: "30%", width: "50%" }}>
            <Text
              style={{
                top: -20,
                fontSize: 24,
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
          height: 100,
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
  font-size: 12px;
  padding: -1%;
`;
