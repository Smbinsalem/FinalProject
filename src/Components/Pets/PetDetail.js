import React from "react";
import petStore from "../../../Stores/petStore";
import { observer } from "mobx-react";
import styled from "styled-components";
import { ScrollView } from "react-native-gesture-handler";

// ********** MAIN FUNCTION *********
const PetDetail = ({ navigation, route }) => {
  const pet = petStore.pets[0];
  // const { pet } = route.params;

  return (
    <>
      <ScrollView>
        <FieldWrapper>
          <LabelStyle>Name: </LabelStyle>
          <InfoStyled>{pet.name}</InfoStyled>
          <LabelStyle>Type: </LabelStyle>
          <InfoStyled>{pet.type}</InfoStyled>
          <LabelStyle>Breed: </LabelStyle>
          <InfoStyled>{pet.breed}</InfoStyled>
          <LabelStyle>Date of Birth: </LabelStyle>
          <InfoStyled>{pet.dateOfBirth}</InfoStyled>
          <LabelStyle>Vaccinated: </LabelStyle>
          <InfoStyled> {pet.vaccinated}</InfoStyled>
          <LabelStyle>Allergies: </LabelStyle>
          <InfoStyled>{pet.allergies}</InfoStyled>
          <LabelStyle>Image: </LabelStyle>
          <InfoStyled>{pet.image}</InfoStyled>
          <LabelStyle>Walking Hours:</LabelStyle>
          <InfoStyled>{pet.walkingHours}</InfoStyled>
          <LabelStyle>Medication:</LabelStyle>
          <InfoStyled> {pet.medication}</InfoStyled>
          <LabelStyle>Meal Time:</LabelStyle>
          <InfoStyled> {pet.mealTime}</InfoStyled>
          <LabelStyle>Personality:</LabelStyle>
          <InfoStyled> {pet.personality}</InfoStyled>
          <LabelStyle>Allowed Snacks Per Day:</LabelStyle>
          <InfoStyled> {pet.allowedSnackPerDays}</InfoStyled>
        </FieldWrapper>
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
