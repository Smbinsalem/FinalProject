import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import bookingStore from "../../../Stores/bookingStore";
import authStore from "../../../Stores/authStore";
import OwnerInboxItem from "./OwnerInboxItem";
import { Spinner, Text } from "native-base";

const OwnerInboxList = ({ navigation }) => {
  authStore.fetchUsers();
  if (authStore.loading) return <Spinner />;
  if (bookingStore.loading) return <Spinner />;

  //New Method
  const ownerInboxList = bookingStore.bookings
    .filter((owner) => owner.petOwnerId === authStore.user?.petOwnerId)
    .filter((status) => status.bookingStatus === "pending")
    .map((booking) => (
      <OwnerInboxItem
        navigation={navigation}
        booking={booking}
        key={booking.id}
      />
    ));

  return (
    <ScrollView>
      <HomeWrapper>
        <Text>Requests</Text>
      </HomeWrapper>
      <HomeWrapper>{ownerInboxList}</HomeWrapper>
    </ScrollView>
  );
};

export default observer(OwnerInboxList);

//Styling

const HomeWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
