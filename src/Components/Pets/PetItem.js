import React from "react";
import styled from "styled-components";
import { ListItem } from "native-base";
import { Image, View, Text } from "react-native";
import { observer, Spinner } from "mobx-react";
import { TouchableOpacity, ScrollView } from "react-native";
import pet6 from "../../../assets/images/Pet6.png";

const TextStyled = styled.Text`
  font-size: 17px;
  margin-top: -10%;
  margin-left: 3%;
  margin-bottom: 3%;
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

const PetItem = ({ pet, navigation }) => {
  // const {pet}= route.params;

  // if (authStore.loading) return <Spinner />;
  // if (petStore.loading) return <Spinner />;

  return (
    <>
      <ScrollView />
      <ListItem>
        <TouchableOpacity
          // onPress={() => navigation.navigate("PetDetail", { pet: pet })}
          onPress={() => alert("go to pet detail")}
          style={{
            height: 100,
            elevation: 2,
            backgroundColor: "rgba(23, 42, 58, 1)",
            marginLeft: 9,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 30,
            width: "99%",
          }}
        >
          <View style={{ width: "92%", alignItems: "flex-end" }}>
            <Image
              source={pet6}
              style={{
                top: 10,
                height: 60,
                width: 60,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
          </View>
          <TextStyled>
            {pet.name} {`\n`}
            <SubTextStyled> {pet.type}</SubTextStyled>
          </TextStyled>
        </TouchableOpacity>
      </ListItem>
    </>
  );
};

export default observer(PetItem);
