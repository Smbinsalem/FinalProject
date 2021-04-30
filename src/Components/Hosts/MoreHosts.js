import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components";
import { View, Text, List } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import authStore from "../../../Stores/authStore";


import { ScrollView } from "react-native-gesture-handler";
import MoreHostItem from "./MoreHostItem";

const MoreHosts = ({ navigation }) => {
  useEffect(() => {
    authStore.fetchUsers();
  }, []);
  
  
  
  if (!authStore.allUsers) return <Spinner />;
  const hostList = authStore.allUsers
  .filter((user) => user.petHost)
  .map((user) => (
    <MoreHostItem navigation={navigation} user={user} key={user.id} />
    ));
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
            All Hosts
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
      <ScrollView>
      <PostWrapper>
             {hostList}
      </PostWrapper>
      </ScrollView>
    </>
  );
};

export default observer(MoreHosts);

//Styling
export const PostWrapper = styled.View`
/* padding-left:27%; */
padding-bottom:20%;
  /* align-content: space-between; */
  /* flex-direction: column; */
`;
