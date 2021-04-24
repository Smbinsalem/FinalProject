import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components";
import bookingStore from "../../../Stores/bookingStore";
import authStore from "../../../Stores/authStore";
import BookingList from "../../Components/Booking/BookingList";

const HostHome = ({ navigation, route }) => {
  useEffect(() => {
    authStore.fetchUsers();
  }, []);
  const myHostId = authStore.user.petHostId;
  //   const allOwners = authStore.allUsers.filter(
  //     (owners) => owners.petOwner !== null
  //   );
  //   console.log(allOwners);
  //////

  return (
    <>
      <BookingList navigation={navigation} />
    </>
  );
};

export default observer(HostHome);

//Styling

const HomeWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const StatusText = styled.Text`
  color: red;
`;
