import React from "react";
import { observer } from "mobx-react";
import { Text } from "react-native";
import styled from "styled-components";
import { completeImgPath } from "../../../util";
import { ListItem } from "native-base";
import petStore from "../../../Stores/petStore";

const ClientContact = ({ route }) => {
  // const pet = petStore.pets[0];
  const { pet } = route.params;
  const { client } = route.params;
  return (
    <HomeWrapper>
      <ProfileImage source={{ uri: completeImgPath(pet.image) }} />
      <StatusText>{pet.name}</StatusText>
      <StatusText>{client.username}</StatusText>
      <StatusText>{pet.type}</StatusText>
      <StatusText>{pet.type}</StatusText>
      <StatusText>{pet.breed}</StatusText>
      <StatusText>{pet.dateOfBirth}</StatusText>
      <StatusText>{pet.vaccinated}</StatusText>
      <StatusText>{pet.allergies}</StatusText>
      <StatusText>{pet.personality}</StatusText>
      <StatusText>{pet.walkingHours}</StatusText>
      <StatusText>{pet.medication}</StatusText>
      <StatusText>{pet.mealTime}</StatusText>
      <StatusText>{pet.allowedSnackPerDays}</StatusText>
    </HomeWrapper>
  );
};

export default observer(ClientContact);
//Styling
const HomeWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StatusText = styled.Text`
  color: red;
`;
export const ProfileImage = styled.Image`
  width: 125px;
  height: 125px;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 100px;
`;
