import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components";
import { completeImgPath } from "../../../util";
import bookingStore from "../../../Stores/bookingStore";
import { Spinner } from "native-base";
import CancelBooking from "./CancelBooking";
import { Modal } from "react-native-paper";

const OwnerInboxDetails = ({ route, navigation }) => {
  if (bookingStore.loading) return <Spinner />;
  const { booking } = route.params;
  const { owner } = route.params;
  const { pet } = route.params;
  const { host } = route.params;

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
    <ViewWrapper>
      <ImageWrapper>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("PetDetails", {
              pet: pet,
            })
          }
        >
          <StatusText>Booking Details </StatusText>
          <ProfileImage source={{ uri: completeImgPath(pet.image) }} />
        </TouchableOpacity>
      </ImageWrapper>

      <ContentWrapper>
        <LabelStyle>Pet Name</LabelStyle>
        <StatusText>{pet.name} </StatusText>
        <LabelStyle>Host Name </LabelStyle>
        <StatusText>
          {host.firstName} {host.lastName}
        </StatusText>
        <LabelStyle> From </LabelStyle>
        <StatusText>
          {booking.dateFrom} To {booking.dateTo}
        </StatusText>
        <LabelStyle>Booking status</LabelStyle>
        <StatusText>{booking.bookingStatus}</StatusText>
        <FieldView>
          <EditPetStyled onPress={showModal}>
            <Text>Cancel Booking?</Text>
          </EditPetStyled>
        </FieldView>
      </ContentWrapper>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <CancelBooking
          hideModal={hideModal}
          pet={pet}
          navigation={navigation}
        />
      </Modal>
    </ViewWrapper>
  );
};

export default observer(OwnerInboxDetails);

//Styling

export const ViewWrapper = styled.View`
  flex: 1;
  margin-bottom: 300;
`;
const ImageWrapper = styled.View`
  flex: 0.5;
  padding-top: 10%;
  background-color: rgba(23, 42, 58, 1);
`;
const ContentWrapper = styled.View`
  flex: 1;
  padding: 10%;
`;

const StatusText = styled.Text`
  color: #172a3a;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  padding-left: 2%;
  align-self: auto;
  /* font-style: bold; */
`;

export const ProfileImage = styled.Image`
  width: 125px;
  height: 125px;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 100px;
`;

export const FieldView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;

export const AuthButton = styled.TouchableOpacity`
  align-items: center;
  padding: 20px;
  margin: 12px;
  background-color: #f0ba00;
  margin-top: 45px;
  border-radius: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

const EditPetStyled = styled.TouchableOpacity`
  align-items: center;
  padding: 20px;
  margin: 12px;
  background-color: #f0ba00;
  margin-top: 45px;
  border-radius: 30px;
`;
export const LabelStyle = styled.Text`
  color: gray;
  font-size: 20px;
  margin-top: 7%;
  padding: 1%;
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
`;
