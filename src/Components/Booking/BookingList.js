import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import bookingStore from "../../../Stores/bookingStore";
import authStore from "../../../Stores/authStore";
import BookingItem from "./BookingItem";
import { View, Text } from "native-base";

const BookingList = ({ navigation }) => {
  useEffect(() => {
    authStore.fetchUsers();
  }, []);
  useEffect(() => {
    bookingStore.fetchBookings();
  }, []);
  const myHostId = authStore.user?.petHostId;

  const bookingList = bookingStore.bookings
    .filter((host) => host?.hostId === myHostId)
    .filter((status) => status.bookingStatus === "pending")
    .map((booking) => (
      <BookingItem navigation={navigation} booking={booking} key={booking.id} />
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
  padding: 3.5%;
  justify-content: center;
  align-items: center;
`;
