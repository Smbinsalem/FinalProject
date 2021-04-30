import React, { useEffect } from "react";
import { ListItem } from "native-base";
import { observer } from "mobx-react";
import styled from "styled-components";
// Stores
import ownerStore from "../../../Stores/ownerStore";
import authStore from "../../../Stores/authStore";
import petStore from "../../../Stores/petStore";
import hostStore from "../../../Stores/hostStore";

import { Spinner } from "native-base";
import { TouchableOpacity, Image, View } from "react-native";

import { completeImgPath } from "../../../util";

const OwnerChatItem = ({ booking, navigation }) => {
  let counter = 0;
  useEffect(() => {
    authStore.fetchUsers();
  }, [counter]);

  if (authStore.loading) return <Spinner />;
  // if (authStore.loading) return <Spinner />;
  // if (petStore.loading) return <Spinner />;
  // if (ownerStore.loading) return <Spinner />;
  // if (hostStore.loading) return <Spinner />;

  //Getting Pet Owner Details
  const requester = authStore.allUsers?.find((owner) => {
    const petOwnerId = owner.petOwner.id || 0;
    if (petOwnerId === booking.petOwnerId) {
      counter++;
      return petOwnerId;
    }
  });

  // Getting Host Details
  const petHostId = hostStore.hosts?.find((user) => user.id === booking.hostId);
  const hostDetails = authStore.allUsers?.find(
    (hostUser) => hostUser.id === petHostId.userId
  );
  // for Pet Owner profile img
  // const petOwner = ownerStore.owners.find(
  //   (owner) => owner.id === booking.petOwnerId
  // );

  // for Pet Host profile img
  const petHost = hostStore.hosts?.find((host) => host.id === booking.hostId);

  const bookPet = petStore.pets?.find((pet) => pet.id === booking.petId);

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("OwnerChatDetails", {
            booking: booking,
            owner: requester,
            pet: bookPet,
            host: hostDetails,
          })
        }
        style={{
          height: 100,
          elevation: 2,
          backgroundColor: "rgba(23, 42, 58, 1)",
          marginLeft: 3,
          borderRadius: 15,
          marginBottom: 20,
          borderRadius: 30,
          width: "99%",
        }}
      >
        <View style={{ width: "92%", alignItems: "flex-end" }}>
          <Image
            source={{ uri: completeImgPath(petHost.image) }}
            style={{
              top: 15,
              height: 60,
              width: 60,
              borderRadius: 20,
            }}
          />
        </View>

        <TextStyled>
          {hostDetails.firstName} {`\n`}{" "}
        </TextStyled>
        <SubTextStyled>is taking care of {bookPet.name}</SubTextStyled>
      </TouchableOpacity>
    </>
  );
};
export default observer(OwnerChatItem);

//Styling
const TextStyled = styled.Text`
  font-size: 18px;
  padding: -10%;
  margin-top: -10%;
  margin-left: 10%;
  margin-bottom: 5%;
  align-self: center;
  font-weight: bold;
  width: 100%;
  color: white;
`;

const SubTextStyled = styled.Text`
  font-size: 14px;
  margin-top: -10%;
  margin-left: 10%;
  font-weight: normal !important;
  align-self: center;
  width: 100%;
  color: white;
`;
