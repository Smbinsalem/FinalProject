import React from "react";
import styled from "styled-components";
import { completeImgPath } from "../../../util";
import { observer } from "mobx-react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import hostStore from "../../../Stores/hostStore";

const TextStyled = styled.Text`
  color: black;
  font-size: 10;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;

const HostItem = ({ user, navigation }) => {
  const hostProfile = hostStore.hosts.find((host) => host.userId === user.id);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("HostDetails", { user: user })}
      style={{
        height: 250,
        elevation: 2,
        backgroundColor: "#F0BA00",
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 15,
        marginBottom: 10,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        width: 160,
      }}
    >
      <Image
        source={
          hostProfile?.image
            ? { uri: completeImgPath(hostProfile?.image) }
            : null
        }
        style={{
          width: 160,
          height: 190,
          borderTopLeftRadius: 30,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          borderTopRightRadius: 30,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          paddingTop: 10,
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "#ffff",
          }}
        >
          {user.firstName} {user.lastName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default observer(HostItem);
