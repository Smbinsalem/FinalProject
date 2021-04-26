import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components";
import bookingStore from "../../../Stores/bookingStore";
import authStore from "../../../Stores/authStore";
import OwnerChatList from "../../Components/OwnerChat/OwnerChatList";
import { Spinner } from "native-base";

const OwnerChat = ({ navigation }) => {
  return <OwnerChatList navigation={navigation} />;
};

export default observer(OwnerChat);

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
