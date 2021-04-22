import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import bookingStore from "../../../Stores/bookingStore";
import authStore from "../../../Stores/authStore";
import petStore from "../../../Stores/petStore";
import ownerStore from "../../../Stores/ownerStore";
import { ListItem } from "native-base";
import { defineAnimation } from "react-native-reanimated";

const BookingDetails = ({ route, navigation }) => {
  const { booking } = route.params;
  const { requester } = route.params;
  const { bookPet } = route.params;
  return (
    <HomeWrapper>
      <StatusText>
        Client Name: {requester.firstName} {requester.lastName}
      </StatusText>
      <StatusText>Pet: {bookPet.name} </StatusText>
      <StatusText>
        From: {booking.dateFrom} to: {booking.dateTo}
      </StatusText>
      <StatusText>Approve</StatusText>
      <StatusText>Decline</StatusText>
    </HomeWrapper>
  );
};

export default observer(BookingDetails);

//Styling
const HomeWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StatusText = styled.Text`
  color: red;
`;
