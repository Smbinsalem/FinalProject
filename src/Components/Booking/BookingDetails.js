import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { RadioButton } from "react-native-paper";
import { completeImgPath } from "../../../util";
import bookingStore from "../../../Stores/bookingStore";
import { Spinner } from "native-base";

const BookingDetails = ({ route, navigation }) => {
  if (bookingStore.loading) return <Spinner />;

  // const handleSubmit = () => authStore.signup(user, navigation, checked);
  // const handleDecline = async () => {
  //   setStatus({ ...status, bookingStatus: "declined" });
  //   await bookingStore.booking.updateBooking(status);
  //   navigation.navigate("HostHome");
  // };
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
  const handleSubmit = () => {
    console.log(status);
    bookingStore.updateHostBooking(status, navigation);
  };
  return (
    <HomeWrapper>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("PetDetails", {
            pet: bookPet,
          })
        }
      >
        <ProfileImage source={{ uri: completeImgPath(bookPet.image) }} />
        <StatusText>Pet Name: {bookPet.name} </StatusText>
      </TouchableOpacity>
      <StatusText>
        Client Name: {requester.firstName} {requester.lastName}
      </StatusText>
      <StatusText>
        From: {booking.dateFrom} to: {booking.dateTo}
      </StatusText>
      <TextStyle>Become:</TextStyle>
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
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Next</AuthButtonText>
      </AuthButton>
    </HomeWrapper>
  );
};

export default observer(BookingDetails);

//Styling
const HomeWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const ChoiceView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StatusText = styled.Text`
  color: red;
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
