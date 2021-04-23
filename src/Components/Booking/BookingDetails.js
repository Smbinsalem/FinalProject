import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";

const BookingDetails = ({ route }) => {
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
