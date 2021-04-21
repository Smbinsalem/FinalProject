import React from "react";
import { View, ScrollView, Button } from "react-native";
import authStore from "../../Stores/authStore";
import { useState } from "react";
import { Icon, Label } from "native-base";
import styled from "styled-components/native";
import DropDownPicker from "react-native-dropdown-picker";

//Calendar
import { Calendar } from "react-native-calendars";
import DatePicker from "react-native-date-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

//Images
import Pet1 from "../../assets/images/Pet8.jpeg";

const theme = {
  Maincolor: "#9381ff", // redish main font color
  backgroundColor: "#f5fffa", // white main background color
  black: "black",
  blackish: "#484848",
  grey: "#99aab5",
  blueish: "#9381ff",
  redish: "#f23d3a",
};

const SignUp = ({ navigation }) => {
  // if (authStore.user) navigation.replace("Home");

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

  const handleSubmit = () => authStore.signup(user, navigation);

  // Date example
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
    setUser({ ...user, dateOfBirth });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  // const showTimepicker = () => {
  //   showMode("time");
  // };
  return (
    <>
      <BackgroundIMG source={Pet1}>
        <ScrollView>
          <AuthContainer>
            <AuthTextInput
              placeholder="First Name"
              placeholderTextColor="white"
              onChangeText={(firstName) => setUser({ ...user, firstName })}
            />
            <AuthTextInput
              placeholder="Last Name"
              placeholderTextColor="white"
              onChangeText={(lastName) => setUser({ ...user, lastName })}
            />
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
            {/* <Label>Date Of Birth</Label>
            <Calendar
              minDate={"1921-01-01"}
              // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
              maxDate={"2021-12-31"}
              // Handler which gets executed on day press. Default = undefined
              onDayPress={(value) => {
                setUser({
                  ...user,
                  dateOfBirth: value.dateString, //***it was value but i added .dateString cuz of BE datatype issue*** BY SAlWA
                }),
                  console.log("selected day", value);
              }}
              markedDates={{
                [user.dateOfBirth]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedDotColor: "orange",
                },
              }}
              // Handler which gets executed on day long press. Default = undefined
              onDayLongPress={(day) => {
                console.log("selected long press day", day);
              }}
              // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
              monthFormat={"yyyy-MM-dd"}
              // Handler which gets executed when visible month changes in calendar. Default = undefined
              onMonthChange={(month) => {
                console.log("month changed", month);
              }}
              // Do not show days of other months in month page. Default = false
              hideExtraDays={true}
              // day from another month that is visible in calendar page. Default = false
              disableMonthChange={true}
              // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
              firstDay={1}
              // Hide day names. Default = false
              hideDayNames={false}
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
                borderWidth: 1,
                borderColor: "gray",
                height: 300,
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
                // textDayFontFamily: "HelveticaNeue-Medium",
                // textMonthFontFamily: "HelveticaNeue-Medium",
                // textDayHeaderFontFamily: "HelveticaNeue-Medium",
                textDayFontWeight: "300",
                textMonthFontWeight: "bold",
                textDayHeaderFontWeight: "300",
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16,
              }}
            /> */}

            <View>
              <View>
                <Button onPress={showDatepicker} title="Show date picker!" />
              </View>

              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
            <AuthTextInput
              placeholder="Contact Number"
              placeholderTextColor="white"
              onChangeText={(contactNumber) =>
                setUser({ ...user, contactNumber })
              }
            />
            {/* <AuthTextInput
            placeholder="Gender"
            placeholderTextColor="white"
            onChangeText={(gender) => setUser({ ...user, gender })}
          /> */}

            {/* Ex */}
            <DropDownPicker
              items={[
                { label: "Female", value: "Female" },
                { label: "Male", value: "Male" },
              ]}
              placeholder="Gender"
              containerStyle={{ height: 40, width: 320 }}
              onChangeItem={(item) => setUser({ ...user, gender: item.value })}
            />
            <AuthTextInput
              placeholder="Username"
              autoCapitalize="none"
              placeholderTextColor="white"
              onChangeText={(username) => setUser({ ...user, username })}
            />
            <AuthTextInput
              placeholder="Password"
              autoCapitalize="none"
              placeholderTextColor="white"
              secureTextEntry={true}
              onChangeText={(password) => setUser({ ...user, password })}
            />

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
  padding-top: 27%;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  background-color: rgba(0, 0, 0, 0.5);
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
  margin-top: 30px;
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
