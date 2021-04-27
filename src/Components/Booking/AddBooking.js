import React, { useState } from "react";
//Mobx
import DropDownPicker from "react-native-dropdown-picker";
import bookingStore from "../../../Stores/bookingStore";

//Style
import styled from "styled-components";
import { observer } from "mobx-react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const AddBooking = ({ navigation, route }) => {
  const { petHost } = route.params;
  const { pets } = route.params;

  const dropDownList = pets.map((pet) => ({
    label: pet.name,
    value: pet.name,
  }));
  const [booking, setBooking] = useState({
    dateFrom: null,
    dateTo: null,
    host: petHost.username,
    petName: "",
  });

  const handleSubmit = async () => {
    await bookingStore.createBooking(booking);
    alert("Booking Confirmed! Waiting for host reply");
    navigation.replace("Explore");
  };

  return (
    <>
      <HomeWrapper>
        <LabelStyle>choose your pet</LabelStyle>
        <DropDownPicker
          items={dropDownList}
          onChangeItem={(item) =>
            setBooking({ ...booking, petName: item.value })
          }
          containerStyle={{ height: 40, width: 300 }}
          style={{ backgroundColor: "#c1c3d7" }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
        />
        <LabelStyle>from</LabelStyle>
        <AuthTextInput
          placeholder="date from"
          placeholderTextColor="black"
          onChangeText={(dateFrom) => setBooking({ ...booking, dateFrom })}
        />
        <LabelStyle>to</LabelStyle>
        <AuthTextInput
          placeholder="date to"
          placeholderTextColor="black"
          onChangeText={(dateTo) => setBooking({ ...booking, dateTo })}
        />
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Confirm Booking</AuthButtonText>
        </AuthButton>
      </HomeWrapper>
    </>
  );
};

export default observer(AddBooking);

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #f0ba00;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: black;
  text-align: center;
  align-self: stretch;
  align-items: center;
  font-size: 18px;
`;

export const AuthTextInput = styled.TextInput`
  color: black;
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
`;

const LabelStyle = styled.Text`
  color: black;
  font-size: 16px;
  margin-top: 7%;
  /* padding: 1%; */
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "black",
  },

  Title: {
    backgroundColor: "#fcfdff",

    width: 300,
    height: 100,
    fontSize: 20,
    marginBottom: 20,
    alignItems: "center",
    textAlign: "center",
    borderRadius: 6,
  },

  SubmitButton: {
    justifyContent: "center",
    fontSize: 20,

    color: "#fcfdff",
    borderRadius: 5,
    alignSelf: "center",
    textAlign: "center",
  },
});

const HomeWrapper = styled.View`
  flex: 1;
  padding: 3.5%;
  justify-content: center;
  align-items: center;
`;
