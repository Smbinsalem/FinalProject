import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Text, List, ScrollView } from "react-native";
import bookingStore from "../../../Stores/bookingStore";
import authStore from "../../../Stores/authStore";
import BookingItem from "./BookingItem";

const BookingList = ({ navigation, booking }) => {
  useEffect(() => {
    authStore.fetchUsers();
  }, []);
  const myHostId = authStore.user.petHostId;

  const bookingList = bookingStore.bookings
    .filter((host) => host.hostId === myHostId)
    .map((booking) => (
      <>
        <BookingItem
          navigation={navigation}
          booking={booking}
          key={booking.id}
        />
      </>
    ));

  return (
    <ScrollView>
      <HomeWrapper>{bookingList}</HomeWrapper>
    </ScrollView>
  );
};

export default observer(BookingList);

//Styling

const HomeWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StatusText = styled.Text`
  color: red;
`;
