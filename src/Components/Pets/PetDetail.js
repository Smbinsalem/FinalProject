import React from "react";
import petStore from "../../../Stores/petStore";
import { observer } from "mobx-react";
import styled from "styled-components";
import { ScrollView } from "react-native-gesture-handler";
import EditPet from "./EditPet";
import { Modal } from "react-native-paper";
import { Text } from "react-native";
import { completeImgPath } from "../../../util";
import authStore from "../../../Stores/authStore";

// ********** MAIN FUNCTION *********
const PetDetail = ({ navigation, route }) => {

  const { pet } = route.params;

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleDelete = () => {
    petStore.deletePet(pet.name);
    navigation.replace("Pets");
  };

  const containerStyle = {
    backgroundColor: "#2b4f60",
    padding: 20,
    margin: "auto",
    marginBottom: "50%",
    marginTop: "100%",
    marginLeft: "5%",
    marginRight: "5%",
  };

  return (
    <>
      <ScrollView>
        <ImageWrapper>
          <ProfileImage
            source={pet?.image ? { uri: completeImgPath(pet?.image) } : null}
          />
        </ImageWrapper>
        <FieldWrapper>
          <LabelStyle>Name</LabelStyle>
          <InfoStyled>{pet?.name}</InfoStyled>
          <LabelStyle>Type</LabelStyle>
          <InfoStyled>{pet?.type}</InfoStyled>
          <LabelStyle>Breed</LabelStyle>
          <InfoStyled>{pet?.breed}</InfoStyled>
          <LabelStyle>Vaccinated?</LabelStyle>
          <InfoStyled> {pet?.vaccinated ? "Yes" : "No"}</InfoStyled>
          <LabelStyle>Date of Birth</LabelStyle>
          <InfoStyled>{pet?.dateOfBirth}</InfoStyled>
          <LabelStyle>Allergies</LabelStyle>
          <InfoStyled>{pet?.allergies}</InfoStyled>
          <LabelStyle>Personality</LabelStyle>
          <InfoStyled> {pet?.personality}</InfoStyled>
          <LabelStyle>Walking Hours</LabelStyle>
          <InfoStyled>{pet?.walkingHours}</InfoStyled>
          <LabelStyle>Medication</LabelStyle>
          <InfoStyled> {pet?.medication}</InfoStyled>
          <LabelStyle>Meal Time</LabelStyle>
          <InfoStyled> {pet?.mealTime}</InfoStyled>
          <LabelStyle>Allowed Snacks Per Day</LabelStyle>
          <InfoStyled> {pet?.allowedSnackPerDays}</InfoStyled>

          {/* EDIT BUTTON */}
          {authStore.user?.petOwnerId === pet?.petOwnerId ? (
            <AuthButton onPress={showModal}>
              <AuthButtonText>Edit Pet Details</AuthButtonText>
            </AuthButton>
          ) : null}

          {/* DELETE BUTTON */}
          {authStore.user?.petOwnerId === pet?.petOwnerId ? (
            <AuthButton onPress={handleDelete}>
              <AuthButtonText>Delete Pet</AuthButtonText>
            </AuthButton>
          ) : null}
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
  flex: 0.5;
  background-color: rgba(23, 42, 58, 0);
  padding: 3%;
  padding-bottom: 35%;
`;

const EditPetStyled = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 50px;
  background-color: #f0ba00;
  margin-right: auto;
  margin-left: auto;
  margin: 30px;
  width: 90%;
`;
export const ProfileImage = styled.Image`
  width: 125px;
  height: 125px;
  margin-top: auto;
  margin-right: auto;
  margin-left: auto;
  border-radius: 100px;
`;
const ImageWrapper = styled.View`
  flex: 1;
  padding-top: 10%;
  background-color: rgba(23, 42, 58, 1);
`;
export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #f0ba00;
  margin-top: 20px;
  border-radius: 100px;
`;
export const AuthButtonText = styled.Text`
  color: #fcfdff;
  text-align: center;
  align-self: stretch;
  font-weight: bold;
  align-items: center;
  font-size: 18px;
`;
