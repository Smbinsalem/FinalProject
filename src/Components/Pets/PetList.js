import React from "react";
import PetItem from "./PetItem";
import petStore from "../../../Stores/petStore";

import { observer } from "mobx-react";
import { List, Content, Text, View } from "native-base";

const PetList = ({ navigation, ownerId }) => {
  // const filteredPets= petStore.pets.filter((ownerId) =>(pets.petOwnerId === ownerId));

  console.log(ownerId);
  console.log(petStore.pets);
  const petList = petStore.pets
    .filter((pet) => pet.petOwnerId === +ownerId)
    .map((pet) => <PetItem navigation={navigation} pet={pet} key={pet.id} />);
  console.log(petList);

  return (
    <View>
      {/* <Text>Oscar </Text> */}
      {petList}
    </View>
  );
};
export default observer(PetList);
