import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashPage from "./src/Screens/SplashPage"
import Tabs from "./src/Navigation/Tabs";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
      <Screen
            name="SplashPage"
            component={SplashPage}
            options={{
              headerShown: false,
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
