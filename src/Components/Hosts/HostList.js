import React, { useEffect } from "react";
import HostItem from "./HostItem";
import hostStore from "../../../Stores/hostStore";
import authStore from "../../../Stores/authStore";

import { observer } from "mobx-react";
import { List, Content, Text, ScrollView, View } from "native-base";

const HostList = ({ navigation }) => {
  useEffect(() => {
    authStore.fetchAllUsers();
  }, []);
  console.log(authStore.allusers);
  const hostList = authStore.allusers
    .filter((user) => user.petHost)
    .map((user) => (
      <HostItem navigation={navigation} user={user} key={user.id} />
    ));

  return (
    <View>
      {/* <ScrollView> */}
      {/* <Text>Oscar </Text> */}
      <View>{hostList}</View>
      {/* </ScrollView> */}
    </View>
  );
};
export default observer(HostList);
