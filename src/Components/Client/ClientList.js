import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Text, List, ScrollView } from "react-native";
import bookingStore from "../../../Stores/bookingStore";
import authStore from "../../../Stores/authStore";
import ClientItem from "./ClientItem";

const ClientList = ({ navigation, booking }) => {
  useEffect(() => {
    authStore.fetchUsers();
  }, []);

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
      <HomeWrapper>
        <Text>My Clients</Text>
      </HomeWrapper>
      <HomeWrapper>{bookingList}</HomeWrapper>
    </ScrollView>
  );
};

export default observer(ClientList);

//Styling

const HomeWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StatusText = styled.Text`
  color: red;
`;
