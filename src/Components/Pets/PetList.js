import React from "react";
import PetItem from "./PetItem";
import petStore from "../../../Stores/petStore";
import { observer } from "mobx-react";
import { List, Content } from "native-base";

let PetList = ({ navigation }) => {
  const PetList = petStore.pets.map((pet) => (
    <PetItem navigation={navigation} pet={pet} key={pet.id} />
  ));

  return <Content>{PetList}</Content>;
};
export default observer(PetList);
