import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components";
import bookingStore from "../../../Stores/bookingStore";
import authStore from "../../../Stores/authStore";
import OwnerInboxList from "../../Components/OwnerInbox/OwnerInboxList";
import { Spinner } from "native-base";

const OwnerInbox = ({ navigation }) => {
  if (bookingStore.loading) return <Spinner />;

  useEffect(() => {
    authStore.fetchUsers();
  }, []);

  return (
    <>
      <OwnerInboxList navigation={navigation} />
    </>
  );
};

export default observer(OwnerInbox);

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
