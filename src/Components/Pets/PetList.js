import React, { useEffect } from "react";
import PetItem from "./PetItem";
import petStore from "../../../Stores/petStore";
import { observer } from "mobx-react";
import { View } from "native-base";
import authStore from "../../../Stores/authStore";
const PetList = ({ navigation, ownerId }) => {
  //Loading page

  useEffect(() => {
    petStore.fetchPets();
  }, [authStore.user]);

  const petList = petStore.pets
    .filter((mypet) => mypet.petOwnerId === +ownerId)
    .map((pet) => <PetItem navigation={navigation} pet={pet} key={pet.id} />);

  return (
    <>
      {/* <ScrollView> */}
      <View>{petList}</View>
      {/* </ScrollView> */}
    </>
  );
};
export default observer(PetList);
