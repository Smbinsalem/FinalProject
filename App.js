import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import onBoarding from "./src/Screens/Onboarding";
import SplashPage from "./src/Screens/SplashPage";
import SignIn from "./src/Screens/SignIn";
import SignUp from "./src/Screens/SignUp";
import Tabs from "./src/Navigation/Tabs";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="onBoarding"
          component={onBoarding}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="SplashPage"
          component={SplashPage}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerBackTitle: true,
            headerTintColor: "white",
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerBackTitle: true,
            headerTintColor: "white",
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
