import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components";
import bookingStore from "../../../Stores/bookingStore";
import authStore from "../../../Stores/authStore";
import ClientList from "../../Components/Client/ClientList";

const ClientScreen = ({ navigation, route }) => {
  const myHostId = authStore.user.petHostId;
  return (
    <>
      <ClientList navigation={navigation} />
    </>
  );
};

export default observer(ClientScreen);

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
