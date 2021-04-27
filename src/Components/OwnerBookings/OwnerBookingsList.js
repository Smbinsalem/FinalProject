import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import bookingStore from "../../../Stores/bookingStore";
import authStore from "../../../Stores/authStore";
import OwnerBookingsItem from "./OwnerBookingsItem";
import { Spinner, Text } from "native-base";

const OwnerBookingsList = ({ navigation }) => {
  authStore.fetchUsers();
  if (authStore.loading) return <Spinner />;
  if (bookingStore.loading) return <Spinner />;

  const ownerBookingsList = bookingStore.bookings
    .filter((owner) => owner.petOwnerId === authStore.user?.petOwnerId)
    .filter((status) => status.bookingStatus === "approved")
    .map((booking) => (
      <OwnerBookingsItem
        navigation={navigation}
        booking={booking}
        key={booking.id}
      />
    ));

  return (
    <ScrollView>
      <HomeWrapper>
        <Text>Who is taking care of my pet?</Text>
      </HomeWrapper>
      <HomeWrapper>{ownerBookingsList}</HomeWrapper>
    </ScrollView>
  );
};

export default observer(OwnerBookingsList);

//Styling

const HomeWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
