import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components";
import OwnerInboxList from "../../Components/OwnerInbox/OwnerInboxList";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const OwnerInbox = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          backgroundColor: "#172A3A",
          height: "10%",

          // paddingTop: "%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: "20%",
              width: "50%",
              justifyContent: "center",
              marginLeft: 180,
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
              Inbox
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
        <OwnerInboxList navigation={navigation} />
      </PostWrapper>
    </>
  );
};

export default observer(OwnerInbox);
//Styling
export const PostWrapper = styled.View`
  margin-top: -10%;
  margin-bottom: 10px;
  font-size: 25px;
  padding: -1%;
`;
