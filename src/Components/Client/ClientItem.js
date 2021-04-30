import React, { useEffect } from "react";
import { ListItem } from "native-base";
import { observer } from "mobx-react";
import styled from "styled-components";
import authStore from "../../../Stores/authStore";
import petStore from "../../../Stores/petStore";
import { Spinner } from "native-base";
import ownerStore from "../../../Stores/ownerStore";
import { completeImgPath } from "../../../util";
import { TouchableOpacity, Image, View, ScrollView } from "react-native";

const ClientItem = ({ booking, navigation }) => {
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
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ClientDetails", {
            booking: booking,
            requester: requester,
            bookPet: bookPet,
          })
        }
        style={{
          height: 100,
          backgroundColor: "rgba(23, 42, 58, 1)",
          marginLeft: 3,
          borderRadius: 15,
          marginBottom: 20,
          borderRadius: 10,
          width: "99%",
        }}
      >
        <View style={{ width: "92%", alignItems: "flex-end" }}>
          <Image
            source={{ uri: completeImgPath(petOwner.image) }}
            style={{
              top: 15,
              height: 60,
              width: 60,
              borderRadius: 20,
            }}
          />
        </View>

        <TextStyled>
          {requester.firstName} {requester.lastName} {`\n`}
        </TextStyled>
        <SubTextStyled>Pet: {bookPet.name}</SubTextStyled>
      </TouchableOpacity>
    </>
  );
};
export default observer(ClientItem);

//Styling
const TextStyled = styled.Text`
  font-size: 15px;
  padding: 1%;
  margin-top: -10%;
  margin-left: 1%;
  margin-bottom: 5%;
  align-self: center;
  font-weight: bold;
  width: 100%;
  color: white;
`;

const SubTextStyled = styled.Text`
  font-size: 12px;
  margin-top: -10%;
  margin-left: 3%;
  font-weight: normal !important;
  align-self: center;
  width: 100%;
  color: white;
`;
