import React from "react";
import styled from "styled-components";
import { ListItem } from "native-base";
import { observer } from "mobx-react";
import { TouchableOpacity,ScrollView } from "react-native";

const TextStyled = styled.Text`
  color: black;
  font-size: 10;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;

const PetItem = ({ pet, navigation }) => {
  return (
    <>
    <ScrollView/>
      <ListItem>
        <TouchableOpacity onPress={() => navigation.navigate("PetDetail")}>
          <TextStyled>
           Pet: {pet.name} {`\n`}
            Type: {pet.type}{`\n`}
            Breed: {pet.breed}{`\n`}
          </TextStyled>
        </TouchableOpacity>
      </ListItem>
    </>
  );
};

export default observer(PetItem);
