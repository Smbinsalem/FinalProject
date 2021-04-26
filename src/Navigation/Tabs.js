import React from "react";

// Importing React-Native Components from its Library
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Importing Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importing Screens
import HomeScreen from "../Screens/HomeScreen";
import ExploreScreen from "../Screens/ExploreScreen";
import ChatScreen from "../Screens/ChatScreen";
import PostScreen from "../Screens/PostScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import HostDetails from "../Components/Hosts/HostDetails";
import PetDetails from "../Components/Pets/PetDetail";
// Owner Inbox Screens
import OwnerInbox from "../Screens/OwnerScreens/OwnerInbox";
import OwnerInboxDetails from "../Components/OwnerInbox/OwnerInboxDetails";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Explore"}
    >
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen
        name="HostDetails"
        component={HostDetails}
        style={{ headerShown: true, headerTransparent: true }}
      />
      {/* <Stacks.Screen name="PetDetails" component={PetDetail} />
      <Stacks.Screen name="Client" component={ClientScreen} /> */}
    </Stack.Navigator>
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
          width: 110,
          height: 110,
          borderRadius: 60,
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
        component={OwnerInboxNavigator}
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
                source={require("../../assets/icons/home.png")}
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
        name="Explore"
        component={Stacks}
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
                Explore
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
        component={ChatScreen}
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
                source={require("../../assets/icons/chat.png")}
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
                CHAT
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
export default Tabs;
