import React from "react";
import { View, ScrollView, Button, Text } from "react-native";
import authStore from "../../Stores/authStore";
import { useState } from "react";
import { Icon, Label } from "native-base";
import styled, { withTheme } from "styled-components/native";
import DropDownPicker from "react-native-dropdown-picker";
import { RadioButton } from "react-native-paper";
//Calendar
import { Calendar } from "react-native-calendars";
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

            {/* Manually  adding a date */}
            {/* <AuthTextInput
            placeholder="Date of Birth"
            placeholderTextColor="white"
            onChangeText={(dateOfBirth) => setUser({ ...user, dateOfBirth })}
          /> */}

            {/* A Whole calender */}
            <TextStyle>Date Of Birth</TextStyle>
            {/* <Calendar
              current={"2003-12-31"}
              minDate={"1921-01-01"}
              maxDate={"2003-12-31"}
              onDayPress={(value) => {
                setUser({
                  ...user,
                  dateOfBirth: value.dateString, //***it was value but i added .dateString cuz of BE datatype issue*** BY SAlWA
                });
                // console.log("selected day", value);
              }}
              markedDates={{
                [user.dateOfBirth]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedDotColor: "orange",
                },
              }}
              // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
              monthFormat={"yyyy-MM-dd"}
              // Do not show days of other months in month page. Default = false
              hideExtraDays={true}
              // day from another month that is visible in calendar page. Default = false

              disableMonthChange={false}
              // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
              firstDay={1}
              // Hide day names. Default = false
              hideDayNames={true}
              // Handler which gets executed when press arrow icon left. It receive a callback can go back month
              onPressArrowLeft={(subtractMonth) => subtractMonth()}
              // Handler which gets executed when press arrow icon right. It receive a callback can go next month
              onPressArrowRight={(addMonth) => addMonth()}
              // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
              disableAllTouchEventsForDisabledDays={true}
              // Enable the option to swipe between months. Default = false
              enableSwipeMonths={true}
              // Specify style for calendar container element. Default = {}
              style={{
                borderWidth: 2,
                borderColor: "gray",
                height: 310,
                width: 310,
              }}
              // Specify theme properties to override specific styles for calendar parts. Default = {}
              theme={{
                selectedColor: theme.Maincolor,
                backgroundColor: "#ffffff",
                calendarBackground: "#ffffff",
                textSectionTitleColor: theme.Maincolor,
                textSectionTitleDisabledColor: "#d9e1e8",
                selectedDayBackgroundColor: theme.Maincolor,
                selectedDayTextColor: "#ffffff",
                todayTextColor: theme.Maincolor,
                dayTextColor: "#2d4150",
                textDisabledColor: "#d9e1e8",
                dotColor: theme.Maincolor,
                selectedDotColor: theme.Maincolor,
                arrowColor: theme.Maincolor,
                disabledArrowColor: "#d9e1e8",
                monthTextColor: theme.blackish,
                indicatorColor: theme.blackish,
                textDayFontWeight: "300",
                textMonthFontWeight: "bold",
                textDayHeaderFontWeight: "300",
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16,
              }}
            /> */}

            <DatePicker
              style={{ width: 310, color: "white" }}
              date={"2016-05-01"}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              // minDate="2016-05-01"
              // maxDate="2016-06-01"
              confirmBtnText="Confirm"
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
                },
                // ... You can check the source to find the other keys.
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
  background-color: rgba(225, 225, 255, 0.65);
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
