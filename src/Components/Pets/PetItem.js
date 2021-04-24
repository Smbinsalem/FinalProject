import React from "react";
import styled from "styled-components";
import { ListItem } from "native-base";
import { observer } from "mobx-react";
import { TouchableOpacity, ScrollView } from "react-native";

// import petStore from "../../../Stores/petStore";
// import authStore from "../../../Stores/authStore";

const TextStyled = styled.Text`
  color: black;
  font-size: 10;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;

const PetItem = ({ navigation, pet }) => {
  // const { pet } = route.params;
  const mypet = pet;

  // if (authStore.loading) return <Spinner />;
  // if (petStore.loading) return <Spinner />;

  return (
    <>
      <ScrollView />
      <ListItem>
        <TouchableOpacity
          onPress={() => navigation.navigate("PetDetails", { pet: mypet })}
          // onPress={() => alert("go to pet detail")}
        >
          <TextStyled>
            Pet: {pet.name} {`\n`}
          </TextStyled>
        </TouchableOpacity>
      </ListItem>
    </>
  );
};

export default observer(PetItem);
