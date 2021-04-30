import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Screens
import onBoarding from "./src/Screens/Onboarding";
import SplashPage from "./src/Screens/SplashPage";
import SignIn from "./src/Screens/SignIn";
import SignUp from "./src/Screens/SignUp";
import PetOwner from "./src/Screens/SignUp/PetOwnerSignUp";
import Host from "./src/Screens/SignUp/HostSignUp";
import SignUpAs from "./src/Screens/SignUp/SignUpAS";
import AddPet from "./src/Screens/SignUp/AddPet";

//Ignore all warnings 
import { LogBox } from 'react-native';
import {YellowBox} from 'react-native';

//Tab Screens
import Tabs from "./src/Navigation/Tabs";
import HostTabs from "./src/Navigation/HostTabs";

const { Navigator, Screen } = createStackNavigator();
console.disableYellowBox = true; 
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

console.ignoredYellowBox = ['Warning: ReactNative.createElement'];
LogBox.ignoreLogs(['Warning: ...']);
export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        {/* <Screen
          name="ImagePicker"
          component={ImagePicker}
          options={{
            headerShown: false,
          }}
        /> */}
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
            headerShown: false,
          }}
        />
        <Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="SignUpAs"
          component={SignUpAs}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="PetOwner"
          component={PetOwner}
          options={{
            headerTransparent: true,
            headerBackTitle: " ",
            headerTintColor: "white",
            headerTitle: "",
          }}
        />
        <Screen
          name="Host"
          component={Host}
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
        <Screen
          name="HostTabs"
          component={HostTabs}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="AddPet"
          component={AddPet}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
