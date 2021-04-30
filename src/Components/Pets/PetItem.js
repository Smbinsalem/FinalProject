import React from "react";
import styled from "styled-components";
import { ListItem } from "native-base";
import { Image, View} from "react-native";
import { observer } from "mobx-react";
import { TouchableOpacity, ScrollView } from "react-native";

//images
import { completeImgPath } from "../../../util";

const PetItem = ({ navigation, pet }) => {
  const mypet = pet;


  return (
    <ScrollView>
      <ListItem>
        <TouchableOpacity
          onPress={() => navigation.navigate("PetDetails", { pet: mypet })}
          style={{
            height: 100,
            backgroundColor: "rgba(23, 42, 58, 1)",
            borderRadius: 15,
            marginBottom: 5,
            borderRadius: 15,
            width: "100%",
          }}
        >
          <View style={{ width: "92%", alignItems: "flex-end" }}>
            <Image
              source={{ uri: completeImgPath(pet.image) }}
              style={{
                top: 20,
                height: 60,
                width: 60,
                borderRadius: 30,
              }}
            />
          </View>
          <TextStyled>
            {pet.name} {`\n`}
            <SubTextStyled> {pet.type}</SubTextStyled>
          </TextStyled>
        </TouchableOpacity>
      </ListItem>
    </ScrollView>
  );
};

export default observer(PetItem);

// Styling

const TextStyled = styled.Text`
  font-size: 17px;
  margin-top: -10%;
  margin-left: 20px;
  font-weight: bold;
  width: 100%;
  color: white;
`;
const SubTextStyled = styled.Text`
  font-size: 15px;
  margin-top: -10%;
  margin-left: 3%;
  font-weight: normal !important;
  width: 100%;
  color: white;
`;
