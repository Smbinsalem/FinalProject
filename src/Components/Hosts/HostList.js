import React, { useEffect } from "react";
import HostItem from "./HostItem";
import hostStore from "../../../Stores/hostStore";
import authStore from "../../../Stores/authStore";

import { observer, Spinner } from "mobx-react";
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Animated,
} from "react-native";

const HostList = ({ navigation }) => {
  useEffect(() => {
    authStore.fetchAllUsers();
  }, []);

  console.log(authStore.allUsers);
  const hostList = authStore.allUsers
    .filter((user) => user.petHost)
    .map((user) => (
      <HostItem navigation={navigation} user={user} key={user.id} />
    ));
  // if (authStore.loading) return <Spinner />;
  // if (hostStore.loading) return <Spinner />;
  return (
    <>
      <ActivityIndicator size="large" color="#f0ba00" />
      <Animated.View style={styles.card}>{hostList}</Animated.View>
    </>
  );
};
export default observer(HostList);
const styles = StyleSheet.create({
  card: {
    marginLeft: 400,
    width: 400,
    flexDirection: "row",
  },

  proContainer: {
    marginRight: 20,
    alignSelf: "center",
  },
});
