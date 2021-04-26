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
  const handleSubmit = () => {
    bookingStore.updateHostBooking(status, navigation);
  };
  return (
    <>
      <View
        style={{
          paddingBottom: 105,
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("PetDetails", {
              petId: bookPet.id,
            })
          }
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
            }}
          >
            <ProfileImage source={{ uri: completeImgPath(bookPet.image) }} />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: -80,
          marginHorizontal: 20,
          alignItems: "center",
        }}
      >
        <TextStyle
          style={{
            fontWeight: "bold",
            fontSize: 28,
            color: "#172A3A",
          }}
        >
          Pet Name: {bookPet.name}
        </TextStyle>
      </View>
      <TextStyle
        style={{
          paddingHorizontal: 20,
          fontWeight: "bold",
          color: "#172A3A",
          paddingTop: 3,
          fontSize: 20,
        }}
      >
        Client Name: {requester.firstName} {requester.lastName}
      </TextStyle>
      <TextStyle
        style={{
          paddingHorizontal: 20,
          fontWeight: "bold",
          color: "#172A3A",

          fontSize: 20,
        }}
      >
        From: {booking.dateFrom} to: {booking.dateTo}
      </TextStyle>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <View
          style={{
            width: "30%",

            backgroundColor: "#f0ba00",
            height: 50,
            marginTop: 20,
            marginBottom: 30,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        ></View>
      </View>
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
    </>
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
