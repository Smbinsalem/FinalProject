import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components";
import OwnerChatList from "../../Components/OwnerChat/OwnerChatList";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const OwnerChat = ({ navigation }) => {
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
            marginTop: "20%",
            width: "50%",
            justifyContent: "center",
            marginLeft: 165,
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
            Bookings
          </Text>
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
        <OwnerChatList navigation={navigation} />
      </PostWrapper>
    </>
  );
};

export default observer(OwnerChat);

//Styling
export const PostWrapper = styled.View`
  margin-top: -10%;
  margin-bottom: 10px;
  font-size: 25px;
  padding: -1%;
`;
