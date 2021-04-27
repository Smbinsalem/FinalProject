import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import bookingStore from "../../../Stores/bookingStore";
import authStore from "../../../Stores/authStore";
import OwnerChatItem from "./OwnerChatItem";
import { Spinner, Text } from "native-base";

const OwnerChatList = ({ navigation }) => {
  authStore.fetchUsers();
  if (authStore.loading) return <Spinner />;
  if (bookingStore.loading) return <Spinner />;

  const ownerChatList = bookingStore.bookings
    .filter((owner) => owner.petOwnerId === authStore.user?.petOwnerId)
    .filter((status) => status.bookingStatus === "approved")
    .map((booking) => (
      <OwnerChatItem
        navigation={navigation}
        booking={booking}
        key={booking.id}
      />
    ));

  return (
    <ScrollView>
      <HomeWrapper>{ownerChatList}</HomeWrapper>
    </ScrollView>
  );
};

export default observer(OwnerChatList);

//Styling

const HomeWrapper = styled.View`
  flex: 1;
  padding: 3.5%;
  justify-content: center;
  align-items: center;
`;
