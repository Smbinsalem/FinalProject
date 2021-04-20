import React from "react";
import PetList from "./PetList";
import petStore from "../../../Stores/petStore";
import { observer } from "mobx-react";
import { List, Content } from "native-base";

let PetList = ({ navigation }) => {
  const PetList = petStore.pet.map((pet) => (
    <PetList navigation={navigation} pet={pet} key={pet.id} />
  ));

  return <Content>{PetList}</Content>;
};
export default observer(PetList);