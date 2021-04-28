import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { RadioButton } from "react-native-paper";
import { completeImgPath } from "../../../util";
import bookingStore from "../../../Stores/bookingStore";
import { Spinner } from "native-base";

const BookingDetails = ({ route, navigation }) => {
  if (bookingStore.loading) return <Spinner />;
  const { booking } = route.params;
  const { requester } = route.params;
  const { bookPet } = route.params;
  const [checked, setChecked] = React.useState(null);
  const [status, setStatus] = useState({
    bookingStatus: booking.bookingStatus,
    petName: bookPet.name,
    ownerUser: requester.username,
  });
  useEffect(() => setStatus({ ...status, bookingStatus: checked }), [checked]);
  const handleSubmit = async () => {
    await bookingStore.updateHostBooking(status, navigation);
    await navigation.replace(
      status.booking === "approved" ? "ClientScreen" : "Inbox"
    );
  };
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
          <View>
            <TextStyle
              style={{
                fontWeight: "bold",
                color: "gray",
              }}
            >
              Booking: {`\n`}
            </TextStyle>
            <FieldView>
              <TextStyle>Accept</TextStyle>
              <RadioView>
                <RadioButton
                  value="Accept"
                  status={checked === "approved" ? "checked" : "unchecked"}
                  onPress={() => setChecked("approved")}
                />
              </RadioView>
              <TextStyle>Decline</TextStyle>
              <RadioView>
                <RadioButton
                  value="Decline"
                  status={checked === "decline" ? "checked" : "unchecked"}
                  onPress={() => setChecked("decline")}
                />
              </RadioView>
            </FieldView>
          </View>
        </ContentWrapper>
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Next</AuthButtonText>
        </AuthButton>
      </ViewWrapper>
    </>
  );
};

export default observer(BookingDetails);

//Styling
const ImageWrapper = styled.View`
  flex: 0.5;
  padding-top: 10%;
  background-color: rgba(23, 42, 58, 1);
`;
const ContentWrapper = styled.View`
  flex: 1;
  padding: 10%;
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
  color: black;
  /* font-weight: bold; */
  font-size: 20px;
  margin-top: 13px;
  align-self: auto;
`;
export const FieldView = styled.View`
  flex-direction: row;
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
export const AuthButton = styled.TouchableOpacity`
  align-items: center;
  padding: 20px;
  margin: 12px;
  top: -100;
  background-color: #f0ba00;
  margin-top: -4px;
  border-radius: 100px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;
export const ViewWrapper = styled.View`
  flex: 0.9;
  /* margin-top: 20%; */
`;
