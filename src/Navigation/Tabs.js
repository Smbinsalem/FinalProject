import React from "react";

// Importing React-Native Components from its Library
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Importing Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importing Screens
import ExploreScreen from "../Screens/ExploreScreen";
import PostScreen from "../Screens/PostScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import HostDetails from "../Components/Hosts/HostDetails";
import PetDetails from "../Components/Pets/PetDetail";
// Owner Screens
import OwnerInbox from "../Screens/OwnerScreens/OwnerInbox";
import OwnerInboxDetails from "../Components/OwnerInbox/OwnerInboxDetails";

import OwnerChat from "../Screens/OwnerScreens/OwnerChat";
import OwnerChatDetails from "../Components/OwnerChat/OwnerChatDetails";
import HostProfileDetails from "../Components/OwnerChat/HostProfileDetails";
import ReviewList from "../Components/Review/ReviewList";
import AddBooking from "../Components/Booking/AddBooking";
import MoreHosts from "../Components/Hosts/MoreHosts";
//images

const Tab = createBottomTabNavigator();
const ExploreStack = createStackNavigator();

const ExploreNavigator = () => {
  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Explore"}
    >
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="HostDetails" component={HostDetails}/>
      <ExploreStack.Screen name="ReviewList" component={ReviewList} />
      <ExploreStack.Screen name="AddBooking" component={AddBooking} />
      <ExploreStack.Screen name="MoreHosts" component={MoreHosts} />
    </ExploreStack.Navigator>
  );
};

const PetStack = createStackNavigator();

const PetNavigator = () => {
  return (
    <PetStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Pets"}
    >
      <PetStack.Screen name="Pets" component={PostScreen} />
      <PetStack.Screen name="PetDetails" component={PetDetails} />
    </PetStack.Navigator>
  );
};

const OwnerInboxStack = createStackNavigator();
const OwnerInboxNavigator = () => {
  return (
    <OwnerInboxStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Inbox"}
    >
      <OwnerInboxStack.Screen name="Inbox" component={OwnerInbox} />
      <OwnerInboxStack.Screen name="PetDetails" component={PetDetails} />
      <OwnerInboxStack.Screen
        name="OwnerInboxDetails"
        component={OwnerInboxDetails}
      />
    </OwnerInboxStack.Navigator>
  );
};

const OwnerChatStack = createStackNavigator();
const OwnerChatNavigator = () => {
  return (
    <OwnerChatStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Chat"}
    >
      <OwnerChatStack.Screen name="Chat" component={OwnerChat} />
      <OwnerChatStack.Screen
        name="HostProfileDetails"
        component={HostProfileDetails}
      />
      <OwnerChatStack.Screen name="PetDetails" component={PetDetails} />
      <OwnerChatStack.Screen
        name="OwnerChatDetails"
        component={OwnerChatDetails}
      />
      <OwnerChatStack.Screen name="Reviews" component={ReviewList} />
    </OwnerChatStack.Navigator>
  );
};

const CustomeTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: "#F0BA00",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 10,
          right: 10,

          backgroundColor: "#172A3A",
          borderRadius: 10,
          paddingTop: 20,
          height: 80,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../assets/icons/explore.png")}
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
                EXPLORE
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={OwnerInboxNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
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
      <Tab.Screen
        name="Pets"
        component={PetNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/post.png")}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? "#172A3A" : "#FFF",
              }}
            />
          ),
          tabBarButton: (props) => <CustomeTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Chat"
        component={OwnerChatNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
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
                BOOKINGS
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTransparent: true,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
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
export default Tabs;
