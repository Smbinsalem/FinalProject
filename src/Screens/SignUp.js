import React from "react";
import { View, ScrollView, Button, Text } from "react-native";
import authStore from "../../Stores/authStore";
import { useState } from "react";
import { Icon, Label } from "native-base";
import styled from "styled-components/native";
import DropDownPicker from "react-native-dropdown-picker";
import { RadioButton } from "react-native-paper";
//Calendar
import DatePicker from "react-native-datepicker";
//Images
import Pet1 from "../../assets/images/Pet7.jpeg";

const theme = {
  Maincolor: "#f0ba00", // redish main font color
  backgroundColor: "#f5fffa", // white main background color
  black: "black",
  blackish: "#484848",
  grey: "#99aab5",
  blueish: "#9381ff",
  redish: "#f23d3a",
};

const SignUp = ({ navigation }) => {
  // if (authStore.user) navigation.replace("Home");
  const [checked, setChecked] = React.useState(null);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    contactNumber: "",
    gender: "",
    username: "",
    password: "",
  });

  const handleSubmit = () => authStore.signup(user, navigation, checked);

  return (
    <>
      <BackgroundIMG source={Pet1}>
        <ScrollView>
          <AuthContainer>
            {/* First Name */}
            <AuthTextInput
              placeholder="First Name"
              placeholderTextColor="white"
              onChangeText={(firstName) => setUser({ ...user, firstName })}
            />
            {/* Last Name */}
            <AuthTextInput
              placeholder="Last Name"
              placeholderTextColor="white"
              onChangeText={(lastName) => setUser({ ...user, lastName })}
            />
            {/* Email  */}
            <AuthTextInput
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor="white"
              onChangeText={(email) => setUser({ ...user, email })}
            />
            <TextStyle>Date Of Birth</TextStyle>
            <DatePicker
              style={{
                width: 340,
                margin: "auto",
                // paddingRight: 40,
              }}
              date={user.dateOfBirth}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              // minDate="2016-05-01"
              maxDate="2003-06-01"
              confirmBtnText="Confirm"
              showIcon={false}
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  color: "red",
                },
              }}
              onDateChange={(date) => setUser({ ...user, dateOfBirth: date })}
            />
            {/* Contact Number */}
            <AuthTextInput
              placeholder="Contact Number"
              placeholderTextColor="white"
              onChangeText={(contactNumber) =>
                setUser({ ...user, contactNumber })
              }
            />

            {/* Gender */}
            <DropDownPicker
              items={[
                { label: "Female", value: "Female" },
                { label: "Male", value: "Male" },
              ]}
              backgroundColor="rgba(23, 42, 58, 0.6)"
              placeholder="Gender"
              containerStyle={{ height: 40, width: 320 }}
              onChangeItem={(item) => setUser({ ...user, gender: item.value })}
            />
            {/*   Username   */}
            <AuthTextInput
              placeholder="Username"
              autoCapitalize="none"
              placeholderTextColor="white"
              onChangeText={(username) => setUser({ ...user, username })}
            />

            {/* Password */}
            <AuthTextInput
              placeholder="Password"
              autoCapitalize="none"
              placeholderTextColor="white"
              secureTextEntry={true}
              onChangeText={(password) => setUser({ ...user, password })}
            />
            <TextStyle>Become:</TextStyle>
            <FieldView>
              <TextStyle>HOST</TextStyle>
              <RadioView>
                <RadioButton
                  value="Host"
                  status={checked === "Host" ? "checked" : "unchecked"}
                  onPress={() => setChecked("Host")}
                />
              </RadioView>

              <TextStyle>Owner</TextStyle>
              <RadioView>
                <RadioButton
                  value="PetOwner"
                  status={checked === "PetOwner" ? "checked" : "unchecked"}
                  onPress={() => setChecked("PetOwner")}
                />
              </RadioView>
            </FieldView>
            <AuthButton onPress={handleSubmit}>
              <AuthButtonText>Next</AuthButtonText>
            </AuthButton>
            <AuthOther onPress={() => navigation.navigate("SignIn")}>
              Click here if you already have an account!
            </AuthOther>
          </AuthContainer>
        </ScrollView>
      </BackgroundIMG>
    </>
  );
};

export default SignUp;

//****************  STYLING  *************//
export const BackgroundIMG = styled.ImageBackground`
  flex: 1;
  height: 90%;
  width: 100%;
  justify-content: center;
`;
export const AuthContainer = styled.View`
  flex: 1;
  padding-top: 30%;
  padding-bottom: 20%;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  background-color: rgba(225, 225, 255, 0.3);
`;

export const AuthTitle = styled.Text`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: red;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: white;
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
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

export const AuthOther = styled.Text`
  color: white;
  margin-top: 15px;
`;

export const Iconstyled = styled(Icon)`
  color: #f0ba00;
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
export const TextStyle = styled.Text`
  color: white;
  font-weight: bold;
  margin-top: 10px;
  align-self: auto;
  /* font-style: bold; */
`;
