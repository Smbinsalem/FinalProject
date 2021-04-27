import React, { useEffect } from "react";
import PetItem from "./PetItem";
import petStore from "../../../Stores/petStore";
import { Spinner } from "native-base";
import { observer } from "mobx-react";
import { View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const PetList = ({ navigation, ownerId }) => {
  //Loading page

  // useEffect(() => {
  //   petStore.fetchPets();
  // }, []);

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
