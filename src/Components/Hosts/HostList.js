import React, { useEffect } from "react";
import HostItem from "./HostItem";
import styled from "styled-components";
import { Spinner } from "native-base";
import hostStore from "../../../Stores/hostStore";
import authStore from "../../../Stores/authStore";

import { observer } from "mobx-react";
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Animated,
} from "react-native";

const HostList = ({ navigation }) => {
  useEffect(() => {
    authStore.fetchUsers();
  }, []);
  if (!authStore.allUsers) return <Spinner />;
  const hostList = authStore.allUsers
    .filter((user) => user.petHost)
    .map((user) => (
      <HostItem navigation={navigation} user={user} key={user.id} />
    ));

  return (
    <StyledView>
      <ActivityIndicator size="large" color="#f0ba00" />
      <Animated.View style={styles.card}>{hostList}</Animated.View>
    </StyledView>
  );
};
export default observer(HostList);
const styles = StyleSheet.create({
  card: {
    // marginLeft: 400,
    width: 400,
    flexDirection: "row",
  },

  proContainer: {
    marginRight: 20,
    alignSelf: "center",
  },
});

const StyledView = styled.View`
  flex-direction: row-reverse;
`;
