import React from "react";
import petStore from "../../../Stores/petStore";
import { observer } from "mobx-react";
import styled from "styled-components";
import { ScrollView } from "react-native-gesture-handler";
import EditPet from "./EditPet";
import { Modal } from "react-native-paper";
import { Text } from "react-native";

// ********** MAIN FUNCTION *********
const PetDetail = ({ navigation, route }) => {
  console.log(route);
  // const pet = petStore.pets[0];
  const { petId } = route.params;
  const pet = petStore.pets.find((pet) => pet.id === petId);

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "#2b4f60",
    height: "87%",
    width: "77%",
    padding: 10,
    margin: 60,
  };

  return (
    <>
      <ScrollView>
        <FieldWrapper>
          <LabelStyle>Image: </LabelStyle>
          <InfoStyled>{pet.image}</InfoStyled>
          <LabelStyle>Name: </LabelStyle>
          <InfoStyled>{pet.name}</InfoStyled>
          <LabelStyle>Type: </LabelStyle>
          <InfoStyled>{pet.type}</InfoStyled>
          <LabelStyle>Breed: </LabelStyle>
          <InfoStyled>{pet.breed}</InfoStyled>
          <LabelStyle>Vaccinated: </LabelStyle>
          <InfoStyled> {pet.vaccinated ? "Yes" : "No"}</InfoStyled>
          <LabelStyle>Date of Birth: </LabelStyle>
          <InfoStyled>{pet.dateOfBirth}</InfoStyled>
          <LabelStyle>Allergies: </LabelStyle>
          <InfoStyled>{pet.allergies}</InfoStyled>
          <LabelStyle>Personality:</LabelStyle>
          <InfoStyled> {pet.personality}</InfoStyled>
          <LabelStyle>Walking Hours:</LabelStyle>
          <InfoStyled>{pet.walkingHours}</InfoStyled>
          <LabelStyle>Medication:</LabelStyle>
          <InfoStyled> {pet.medication}</InfoStyled>
          <LabelStyle>Meal Time:</LabelStyle>
          <InfoStyled> {pet.mealTime}</InfoStyled>
          <LabelStyle>Allowed Snacks Per Day:</LabelStyle>
          <InfoStyled> {pet.allowedSnackPerDays}</InfoStyled>

          {/* EDIT BUTTON */}
          <EditPetStyled onPress={showModal}>
            <Text>Edit Pet Details</Text>
          </EditPetStyled>
        </FieldWrapper>

        {/* EDIT MODAL */}
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <EditPet hideModal={hideModal} newpet={pet} />
        </Modal>
      </ScrollView>
    </>
  );
};

export default observer(PetDetail);

// ********** STYLE **********
const InfoStyled = styled.Text`
  color: black;
  font-size: 15px;
  /* margin-top: 7%; */
  padding: 1%;
`;

const LabelStyle = styled.Text`
  color: gray;
  font-size: 16px;
  margin-top: 7%;
  /* padding: 1%; */
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
`;

const FieldWrapper = styled.View`
  background-color: rgba(23, 42, 58, 0);
  padding: 3%;
`;

const EditPetStyled = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 50px;
  background-color: #f0ba00;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
`;
