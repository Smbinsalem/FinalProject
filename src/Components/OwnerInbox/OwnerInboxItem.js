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
import { TouchableOpacity } from "react-native";

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
      <ListItem>
        <HomeWrapper>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("OwnerInboxDetails", {
                booking: booking,
                owner: requester,
                pet: bookPet,
                host: hostDetails,
              })
            }
          >
            <ProfileImage source={{ uri: completeImgPath(petHost.image) }} />
          </TouchableOpacity>

          <StatusText>You made a request to </StatusText>
          <StatusText>to take care of {bookPet.name}</StatusText>
          <NoteText>Waiting for reply {hostDetails.username} </NoteText>
        </HomeWrapper>
      </ListItem>
    </>
  );
};
export default observer(OwnerInboxItem);

//Styling
const HomeWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const StatusText = styled.Text`
  color: blue;
  align-self: center;
`;

const NoteText = styled.Text`
  font-size: 10px;
  color: grey;
  align-self: center;
`;
export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 100px;
`;
