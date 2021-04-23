import React, { useEffect } from "react";
import { ListItem } from "native-base";
import { observer } from "mobx-react";
import styled from "styled-components";
import authStore from "../../../Stores/authStore";
import petStore from "../../../Stores/petStore";
import { Spinner } from "native-base";
import { TouchableOpacity } from "react-native";
import ownerStore from "../../../Stores/ownerStore";
import { completeImgPath } from "../../../util";

const BookingItem = ({ booking, navigation }) => {
  useEffect(() => {
    authStore.fetchUsers();
  }, []);
  if (authStore.loading) return <Spinner />;
  if (petStore.loading) return <Spinner />;
  if (ownerStore.loading) return <Spinner />;

  // petOwnerId sets a default value of 0 if owner.petOwner.id is undefined
  const requester = authStore.allUsers.find((owner) => {
    const petOwnerId = owner.petOwner.id || 0;
    if (petOwnerId === booking.petOwnerId) {
      return petOwnerId;
    }
  });
  const petOwner = ownerStore.owners.find(
    (owner) => owner.id === booking.petOwnerId
  );
  const bookPet = petStore.pets.find((pet) => pet.id === booking.petId);
  return (
    <>
      <ListItem>
        <HomeWrapper>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("BookingDetails", {
                booking: booking,
                requester: requester,
                bookPet: bookPet,
              })
            }
          >
            <ProfileImage source={{ uri: completeImgPath(petOwner.image) }} />
          </TouchableOpacity>

          <StatusText>
            You recieved a request from {requester.firstName}
          </StatusText>
          <StatusText>to take care of {bookPet.name}</StatusText>
          <NoteText>click anywhere for more details</NoteText>
        </HomeWrapper>
      </ListItem>
    </>
  );
};
export default observer(BookingItem);

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
