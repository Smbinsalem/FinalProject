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
import { TouchableOpacity, View, Image } from "react-native";

import { completeImgPath } from "../../../util";

const OwnerInboxItem = ({ booking, navigation }) => {
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
  const requester = authStore.allUsers.find((owner) => {
    const petOwnerId = owner.petOwner.id || 0;
    if (petOwnerId === booking.petOwnerId) {
      counter++;
      return petOwnerId;
    }
  });

  // Getting Host Details
  const petHostId = hostStore.hosts.find((user) => user.id === booking.hostId);
  const hostDetails = authStore.allUsers.find(
    (hostUser) => hostUser.id === petHostId.userId
  );
  // for Pet Owner profile img
  const petOwner = ownerStore.owners.find(
    (owner) => owner.id === booking.petOwnerId
  );

  // for Pet Host profile img
  const petHost = hostStore.hosts.find((host) => host.id === booking.hostId);
  const bookPet = petStore.pets.find((pet) => pet.id === booking.petId);

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("OwnerInboxDetails", {
            booking: booking,
            owner: requester,
            pet: bookPet,
            host: hostDetails,
          })
        }
        style={{
          height: 100,
          backgroundColor: "rgba(23, 42, 58, 1)",
          marginBottom: 20,
          borderRadius: 15,
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
              borderRadius: 30,
            }}
          />
        </View>

        <TextStyled>You made a request to {`\n`}</TextStyled>
        <TextStyled>
          to take care of {bookPet.name}
          {`\n`}
        </TextStyled>
        <SubTextStyled>
          Waiting for reply {hostDetails.username}
          {`\n`}
        </SubTextStyled>
      </TouchableOpacity>
    </>
  );
};
export default observer(OwnerInboxItem);

//Styling

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 100px;
`;

const TextStyled = styled.Text`
  font-size: 15px;
  padding: 1%;
  margin-top: -10%;
  margin-left: 50px;
  margin-bottom: 5%;
  align-self: center;
  font-weight: bold;
  width: 100%;
  color: white;
`;

const SubTextStyled = styled.Text`
  font-size: 12px;
  padding: 1%;
  margin-top: -10%;
  margin-left: 60px;
  font-weight: normal;
  align-self: center;
  width: 100%;
  color: #f0ba00;
`;
