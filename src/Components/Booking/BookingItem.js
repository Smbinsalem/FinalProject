import React, { useEffect } from "react";
import { ListItem, View } from "native-base";
import { observer } from "mobx-react";
import styled from "styled-components/native";
import authStore from "../../../Stores/authStore";
import petStore from "../../../Stores/petStore";
import { Spinner } from "native-base";
import { Touchable, TouchableOpacity, Image } from "react-native";
import ownerStore from "../../../Stores/ownerStore";

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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("BookingDetails", {
              booking: booking,
              requester: requester,
              bookPet: bookPet,
            })
          }
        >
          <ProfileImage source={{ uri: petOwner.image }} />
          <StatusText>
            You recieved a request from {requester.firstName}
          </StatusText>

          <StatusText>to take care of {bookPet.name}</StatusText>
          <StatusText>Click Here For Booking Details</StatusText>
          <StatusText> </StatusText>
        </TouchableOpacity>
      </ListItem>
    </>
  );
};
export default observer(BookingItem);

//Styling
const HomeWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StatusText = styled.Text`
  color: red;
`;

const ImageStyling = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProfileImage = styled.Image`
  width: 125px;
  height: 125px;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 100px;
`;
