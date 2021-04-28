import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components";
import { completeImgPath, callNumber } from "../../../util";
import bookingStore from "../../../Stores/bookingStore";
import { Spinner } from "native-base";
import { Modal } from "react-native-paper";
import AddReview from "../Review/AddReview";

const OwnerChatDetails = ({ route, navigation }) => {
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
    <>
      <ImageWrapper>
        <ProfileImage source={{ uri: completeImgPath(pet.image) }} />
      </ImageWrapper>
      <ContentWrapper>
        <LabelStyle>Pet Name</LabelStyle>
        <StatusText> {pet.name} </StatusText>
        <LabelStyle>Host Name</LabelStyle>
        <StatusText>
          {host.firstName} {host.lastName}
        </StatusText>
        <LabelStyle> From:</LabelStyle>
        <StatusText>{booking.dateFrom}</StatusText>
        <LabelStyle> To:</LabelStyle>
        <StatusText>{booking.dateFrom}</StatusText>

        <ChoiceView>
          <CallStyled onPress={() => callNumber(host.contactNumber)}>
            <AuthButtonText style={{ margin: 5 }}>
              Call {host.firstName}
            </AuthButtonText>
          </CallStyled>
          <CallStyled
            onPress={() =>
              navigation.navigate("HostProfileDetails", {
                host: host,
              })
            }
          >
            <View>
              <AuthButtonText style={{ margin: 5 }}>
                {host.firstName}'s Profile
              </AuthButtonText>
            </View>
          </CallStyled>
        </ChoiceView>
        <ChoiceView>
          <ReviewButton onPress={showModal}>
            <AuthButtonText>Add Review</AuthButtonText>
          </ReviewButton>
        </ChoiceView>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <AddReview hideModal={hideModal} petHost={host} />
        </Modal>
      </ContentWrapper>
    </>
  );
};

export default observer(OwnerChatDetails);

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
const ChoiceView = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-left: -90px;
  margin-right: -90px;
  align-items: center;
`;

const StatusText = styled.Text`
  color: #172a3a;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  padding-left: 2%;
  align-self: auto;
`;

const ChoiceText = styled.Text`
  color: blue;
  background-color: yellow;
  margin: 10px;
  padding: 5px;
`;
export const ProfileImage = styled.Image`
  width: 125px;
  height: 125px;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 100px;
`;
export const TextStyle = styled.Text`
  color: white;
  font-weight: bold;
  margin-top: 10px;
  align-self: auto;
  /* font-style: bold; */
`;
export const FieldView = styled.View`
  flex-direction: row;
  /* color: white; */
  /* background-color: rgba(255, 255, 255, 0.3); */

  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;
export const RadioView = styled.View`
  background-color: rgba(23, 42, 58, 0.6);
  flex-wrap: wrap;
  flex-direction: row;
  border-radius: 20px;
  padding: 7px;
`;
const ContentWrapper = styled.View`
  flex: 1.4;
  padding: 10%;
`;
export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #f0ba00;
  margin-top: 40px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

const CallStyled = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 10px;
  background-color: #f0ba00;
  margin-right: 3%;
  margin-top: 8;
  width: 33%;
  border-radius: 10px;
`;

const ReviewButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 11px;
  background-color: #f0ba00;
  padding-left: 121px;
  padding-right: 121px;
  right: 5;
  margin-top: 8;
  width: 68.9%;
  border-radius: 10px;
`;
export const LabelStyle = styled.Text`
  color: gray;
  font-size: 20px;
  margin-top: 7%;
  padding: 1%;
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
`;
