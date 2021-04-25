import React from "react";
import LoadingScreen from "./LoadingScreen";

import { useState } from "react";
import { observer } from "mobx-react";
import { Spinner } from "native-base";

//Style
import styled from "styled-components";
import { ScrollView } from "react-native-gesture-handler";
import bookingStore from "../../../Stores/bookingStore";

const CancelBooking = ({ pet, hideModal, navigation }) => {
  if (bookingStore.loading) return <Spinner />;

  const handleSubmit = () => {
    bookingStore.deleteOwnerBooking(pet.name, pet.id, navigation);
    hideModal();
    return <LoadingScreen navigation={navigation} />;
  };

  return (
    <>
      <ScrollView>
        <AuthButtonText>
          Are you sure you want to cancel your booking?
        </AuthButtonText>

        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Cancel Booking!</AuthButtonText>
        </AuthButton>
      </ScrollView>
    </>
  );
};
export default observer(CancelBooking);

// Styling

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  margin: 30px;
  background-color: #f0ba00;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  text-align: center;
  align-self: stretch;
  align-items: center;
  font-size: 18px;
`;

export const AuthTextInput = styled.TextInput`
  /* align-self: stretch; */
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  margin: 20px;
  color: white;
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
`;
