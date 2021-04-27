import React, { useState } from "react";
//Mobx
import DropDownPicker from "react-native-dropdown-picker";
import bookingStore from "../../../Stores/bookingStore";

//Style
import DatePicker from "react-native-datepicker";
import styled from "styled-components";
import { observer } from "mobx-react";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import hostStore from "../../../Stores/hostStore";

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
      <View
        style={{
          backgroundColor: "#172A3A",
          height: "20%",
          paddingTop: -15,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: "10%",
            width: "100%",
          }}
        >
          <View style={{ marginTop: "30%", width: "50%" }}>
            <Text
              style={{
                top: -40,
                fontSize: 32,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Book Now
            </Text>
          </View>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(23, 42, 58,0.8)", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 100,
          marginTop: -10,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      ></LinearGradient>
      <PostWrapper>
        <LabelStyle>Choose your pet</LabelStyle>
        <DropDownPicker
          items={dropDownList}
          onChangeItem={(item) =>
            setBooking({ ...booking, petName: item.value })
          }
          containerStyle={{ height: 40, width: 300, left: 15 }}
          style={{ backgroundColor: "#fff" }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
        />
        <View>
          <LabelStyle>From</LabelStyle>

          <DatePicker
            style={{
              width: 340,
              margin: "auto",
              // paddingRight: 40,
            }}
            date={booking?.dateFrom}
            mode="date"
            placeholder="Date of Birth *"
            format="YYYY-MM-DD"
            minDate="2021-04-27"
            // maxDate="2003-06-30"
            confirmBtnText="Confirm"
            showIcon={false}
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                right: 20,
                // borderColor: "#f0ba00",
                color: "white",
                marginLeft: 36,
                marginBottom: 20,
                width: 120,
                fontSize: "100px",
                borderRadius: 10,
                backgroundColor: "#fff",
              },
            }}
            onDateChange={(date) => setBooking({ ...booking, dateFrom: date })}
          />
        </View>
        <View>
          <LabelStyle>To</LabelStyle>
          <DatePicker
            style={{
              width: 340,
              margin: "auto",
              // paddingRight: 40,
            }}
            date={booking?.dateTo}
            mode="date"
            placeholder="Date of Birth *"
            format="YYYY-MM-DD"
            minDate="2021-04-27"
            confirmBtnText="Confirm"
            showIcon={false}
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                right: 20,
                // borderColor: "#f0ba00",
                color: "white",
                marginLeft: 36,
                marginBottom: 20,
                width: 120,
                fontSize: "100px",
                borderRadius: 10,
                backgroundColor: "#fff",
              },
            }}
            onDateChange={(date) => setBooking({ ...booking, dateTo: date })}
          />
        </View>
      </PostWrapper>
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Confirm Booking</AuthButtonText>
      </AuthButton>
    </>
  );
};

export default observer(AddBooking);

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  margin: 10%;
  background-color: #f0ba00;
  border-radius: 100px;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: black;
  text-align: center;
  align-self: stretch;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 30px;
  color: white;
  padding: 3%;
  border-color: #f0ba00;
  border-width: 1px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

const LabelStyle = styled.Text`
  color: gray;
  font-size: 20px;
  margin-top: 0.5%;
  padding: 5%;
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
`;

export const PostWrapper = styled.View`
  left: 40;
  align-content: center;
  padding: 1%;
`;
