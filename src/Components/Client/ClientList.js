import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Text, List, ScrollView } from "react-native";
import bookingStore from "../../../Stores/bookingStore";
import authStore from "../../../Stores/authStore";
import ClientItem from "./ClientItem";
import { Spinner } from "native-base";

const ClientList = ({ navigation, booking }) => {
  if (authStore.loading) return <Spinner />;

  const myHostId = authStore.user.petHostId;

  const bookingList = bookingStore.bookings
    .filter((host) => host.hostId === myHostId)
    .filter((status) => status.bookingStatus === "approved")
    .map((booking) => (
      <>
        <ClientItem
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

export default observer(ClientList);

//Styling
const HomeWrapper = styled.View`
  flex: 1;
  padding: 3.5%;
  justify-content: center;
  align-items: center;
`;
