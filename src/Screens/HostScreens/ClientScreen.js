import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components";
import bookingStore from "../../../Stores/bookingStore";
import authStore from "../../../Stores/authStore";
import ClientList from "../../Components/Client/ClientList";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ClientScreen = ({ navigation, route }) => {
  const myHostId = authStore.user?.petHostId;
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
            marginLeft: 130,
          }}
        >
          <View style={{ marginTop: "30%", width: "50%" }}>
            <Text
              style={{
                top: -40,
                fontSize: 24,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Reservations
            </Text>
          </View>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(23, 42, 58,0.8)", "transparent"]}
        style={{
          height: 100,
          marginTop: -10,
        }}
      ></LinearGradient>
      <PostWrapper>
        <ClientList navigation={navigation} />
      </PostWrapper>
    </>
  );
};

export default observer(ClientScreen);

//Styling
export const PostWrapper = styled.View`
  margin-top: -11%;
  margin-bottom: 10px;
  font-size: 25px;
  padding: -1%;
`;
