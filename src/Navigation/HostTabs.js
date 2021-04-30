import React from "react";

// Importing React-Native Components from its Library
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Importing Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importing Screens
import HostProfilePage from "../Screens/HostProfilePage";
import HostHome from "../Screens/HostScreens/HostHome";
import BookingDetails from "../Components/Booking/BookingDetails";
import PetDetail from "../Components/Pets/PetDetail";

//Client Import Screen
import ClientScreen from "../Screens/HostScreens/ClientScreen";
import ClientDetails from "../Components/Client/ClientDetails";
import ClientContact from "../Components/Client/ClientContact";

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// Inbox Tab Stack
const InboxStack = createStackNavigator();
const InboxNavigator = () => {
  return (
    <InboxStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Inbox"}
    >
      <InboxStack.Screen name="Inbox" component={HostHome} />
      <InboxStack.Screen name="BookingDetails" component={BookingDetails} />
      <InboxStack.Screen name="PetDetails" component={PetDetail} />
      <InboxStack.Screen name="Client" component={ClientScreen} />
    </InboxStack.Navigator>
  );
};

// Clients Tab Stack
const ClientStack = createStackNavigator();
const ClientNavigator = () => {
  return (
    <ClientStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Client"}
    >
      <ClientStack.Screen name="Client" component={ClientScreen} />
      <ClientStack.Screen name="ClientDetails" component={ClientDetails} />
      <ClientStack.Screen name="ClientContact" component={ClientContact} />
    </ClientStack.Navigator>
  );
};

const CustomeTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -25,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 100,
          borderRadius: 35,
          backgroundColor: "#F0BA00",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const HostTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#172A3A",
          borderRadius: 15,
          height: 80,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Inbox"
        component={InboxNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../../assets/icons/Inbox.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#F0BA00" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#F0BA00" : "#748c94", fontSize: 12 }}
              >
                INBOX
              </Text>
            </View>
          ),
        }}
      />
      {/* Hosts are not able to explore other hosts */}
      <Tab.Screen
        name="Clients"
        component={ClientNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../../assets/icons/Booking.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#F0BA00" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#F0BA00" : "#748c94", fontSize: 12 }}
              >
                RESERVATIONS
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="HostProfile"
        component={HostProfilePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../../assets/icons/profile.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#F0BA00" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#F0BA00" : "#748c94", fontSize: 12 }}
              >
                PROFILE
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default HostTabs;
