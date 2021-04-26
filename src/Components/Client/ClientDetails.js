import { observer } from "mobx-react";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { completeImgPath } from "../../../util";

const ClientDetails = ({ route, navigation }) => {
  const { booking } = route.params;
  const { requester } = route.params;
  const { bookPet } = route.params;
  return (
    <>
      <ViewWrapper>
        <ImageWrapper>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PetDetails", {
                petId: bookPet.id,
              })
            }
          >
            <ProfileImage source={{ uri: completeImgPath(bookPet.image) }} />
          </TouchableOpacity>
        </ImageWrapper>
        <ContentWrapper>
          <TextStyle
            style={{
              color: "#172A3A",
            }}
          >
            <TextStyle
              style={{
                fontWeight: "bold",
                color: "gray",
              }}
            >
              Name: {`\n`}
            </TextStyle>
            {bookPet.name}
          </TextStyle>

          <TextStyle>
            <TextStyle
              style={{
                fontWeight: "bold",
                color: "gray",
              }}
            >
              owner: {`\n`}
            </TextStyle>
            {requester.firstName} {requester.lastName}
          </TextStyle>
          <TextStyle>
            {" "}
            <TextStyle
              style={{
                fontWeight: "bold",
                color: "gray",
              }}
            >
              From: {`\n`}
            </TextStyle>{" "}
            {booking.dateFrom}
          </TextStyle>
          <TextStyle>
            {" "}
            <TextStyle
              style={{
                fontWeight: "bold",
                color: "gray",
              }}
            >
              To: {`\n`}
            </TextStyle>{" "}
            {booking.dateTo}
          </TextStyle>
          <TextStyle>
            <TextStyle
              style={{
                fontWeight: "bold",
                color: "gray",
              }}
            >
              Contact Number: {`\n`}
            </TextStyle>
            {requester.contactNumber}
          </TextStyle>
        </ContentWrapper>

        <ChoiceView>
          <ChoiceText>Call </ChoiceText>
        </ChoiceView>
      </ViewWrapper>
    </>
  );
};

export default observer(ClientDetails);

//Styling
const ChoiceView = styled.View`
  align-items: center;
  padding: 15px;
  margin: 30px;
  background-color: #f0ba00;
  margin-top: 45px;
  border-radius: 30px;
`;
const ChoiceText = styled.Text`
  color: #ffff;
  font-weight: bold;
  font-size: 17px;
  margin: 10px;
  padding: 5px;
`;
const ImageWrapper = styled.View`
  flex: 0.5;
  padding-top: 10%;
  background-color: rgba(23, 42, 58, 1);
`;
const ContentWrapper = styled.View`
  /* flex: 0.4; */
  /* padding-top: 10%; */
  /* background-color: rgba(23, 42, 58, 1); */
`;

export const ProfileImage = styled.Image`
  width: 160px;
  height: 160px;
  margin: auto;
  border-radius: 100px;
`;
export const TextStyle = styled.Text`
  color: black;
  /* font-weight: bold; */
  font-size: 20px;
  margin-top: 13px;
  align-self: auto;
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
export const ViewWrapper = styled.View`
  flex: 1;
  /* margin-top: 20%; */
`;
