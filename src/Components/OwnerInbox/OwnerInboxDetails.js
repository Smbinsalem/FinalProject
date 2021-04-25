import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components";
import { completeImgPath } from "../../../util";
import bookingStore from "../../../Stores/bookingStore";
import { Spinner } from "native-base";
import CancelBooking from "./CancelBooking";
import { Modal } from "react-native-paper";

const OwnerInboxDetails = ({ route, navigation }) => {
  if (bookingStore.loading) return <Spinner />;
  const { booking } = route.params;
  const { owner } = route.params;
  const { pet } = route.params;
  const { host } = route.params;

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "#2b4f60",
    height: "87%",
    width: "77%",
    padding: 10,
    margin: 60,
  };

  return (
    <HomeWrapper>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("PetDetails", {
            pet: pet,
          })
        }
      >
        <StatusText>Booking Details </StatusText>
        <ProfileImage source={{ uri: completeImgPath(pet.image) }} />
        <StatusText>Pet Name: {pet.name} </StatusText>
      </TouchableOpacity>
      <StatusText>
        Host Name: {host.firstName} {host.lastName}
      </StatusText>
      <StatusText>
        From: {booking.dateFrom} to: {booking.dateTo}
      </StatusText>
      <TextStyle>Booking status is {booking.bookingStatus}</TextStyle>
      <EditPetStyled onPress={showModal}>
        <Text>Cancel Booking?</Text>
      </EditPetStyled>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <CancelBooking
          hideModal={hideModal}
          pet={pet}
          navigation={navigation}
        />
      </Modal>
    </HomeWrapper>
  );
};

export default observer(OwnerInboxDetails);

//Styling
const HomeWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const ChoiceView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StatusText = styled.Text`
  color: red;
`;

const ChoiceText = styled.Text`
  color: blue;
  background-color: yellow;
  margin: 10px;
  padding: 5px;
`;
export const ProfileImage = styled.Image`
  width: 125px;
  height: 125px;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 100px;
`;
export const TextStyle = styled.Text`
  color: white;
  font-weight: bold;
  margin-top: 10px;
  align-self: auto;
  /* font-style: bold; */
`;
export const FieldView = styled.View`
  flex-direction: row;
  /* color: white; */
  /* background-color: rgba(255, 255, 255, 0.3); */

  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;
export const RadioView = styled.View`
  background-color: rgba(23, 42, 58, 0.6);
  flex-wrap: wrap;
  flex-direction: row;
  border-radius: 20px;
  padding: 7px;
`;
export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #f0ba00;
  margin-top: 40px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

const EditPetStyled = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 50px;
  background-color: #f0ba00;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
`;
