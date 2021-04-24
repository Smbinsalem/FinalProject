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
// import PetDetail from "./src/Components/Pets/PetDetail";

//Tab Screens
import Tabs from "./src/Navigation/Tabs";
import HostTabs from "./src/Navigation/HostTabs";

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
        <Screen name="SignUpAs" component={SignUpAs} />
        <Screen name="PetOwner" component={PetOwner} />
        <Screen name="Host" component={Host} />

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
        {/* <Screen
          name="PetDetail"
          component={PetDetail}
          options={{
            headerShown: false,
          }}
        /> */}
      </Navigator>
    </NavigationContainer>
  );
}
