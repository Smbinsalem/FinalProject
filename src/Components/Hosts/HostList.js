import React, { useEffect } from "react";
import HostItem from "./HetItem";
import hostStore from "../../../Stores/hostStore";

import { observer } from "mobx-react";
import { List, Content, Text, View } from "native-base";

const HostList = ({ navigation, ownerId }) => {
  //   useEffect(() => {
  //     hostsStore.fetchPets();
  //   }, []);

  const hostList = hostStore.hosts.map((host) => (
    <HostItem navigation={navigation} host={host} key={host.id} />
  ));

  return (
    <View>
      {/* <Text>Oscar </Text> */}
      {hostList}
    </View>
  );
};
export default observer(HostList);
