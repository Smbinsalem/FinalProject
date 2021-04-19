import React from "react";

// Importing React-Native Components from its Library
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Importing Navigation
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importing Screens
import HomeScreen from "../Screens/HomeScreen";
import ExploreScreen from "../Screens/ExploreScreen";
import ChatScreen from "../Screens/ChatScreen";
import PostScreen from "../Screens/PostScreen";
import ProfileScreen from "../Screens/ProfileScreen";

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
        name="Home"
        component={HomeScreen}
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
                HOME
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
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
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require("../../assets/icons/post.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
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
