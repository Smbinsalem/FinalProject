import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const HostHome = ({ navigation, route }) => {
  return (
    <HomeWrapper>
      <Text>Host Home and my Clients should appear here</Text>
    </HomeWrapper>
  );
};

export default observer(HostHome);

//Styling

const HomeWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
