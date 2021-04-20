import React from "react";

import { useState, useEffect } from "react";
//Mobx
import hostStore from "../../../Stores/hostStore";


//Style
import styled from "styled-components/native";

//Native content
import DropDownPicker from "react-native-dropdown-picker";

//Images
import Pet1 from "../../../assets/images/Pet8.jpeg";



const HostSignUp = ({ navigation }) => {
  //  useEffect(() => {
  //   authStore.fetchUsers();
  // }, []); 
  const [host, setHost] = useState({
    bio: "",
    location: "",
    typeOfPets: "",
  });

  const handleSubmit = async () => {
    await hostStore.createHost(host);
    if (hostStore.hosts) navigation.navigate("HostTabs");
    // if (authStore.user) navigation.navigate("Tabs");
  };
  // useEffect(() => {
  //   hostStore.fetchHost();
  // }, []); 
  return (
    <BackgroundIMG source={Pet1}>
      <Container>
        <AuthTextInput
          placeholder="Location"
          placeholderTextColor="white"
          onChangeText={(location) => setHost({ ...host, location })}
        />
        <DropDownPicker
        items={[
          { label: "Dogs", value: "Dogs" },
          { label: "Cats", value: "Cats" },
          { label: "Birds", value: "Birds" },
          { label: "Fish", value: "Fish" },
          { label: "Reptiles", value: "Reptiles" },
        
        ]}
        placeholder="Type of pets"
        containerStyle={{ height: 40, width: 320}}
        onChangeItem={(item) => setHost({ ...host, typeOfPets: item.value })}
      />
        <AuthTextInput
          placeholder="Biography"
          placeholderTextColor="white"
          onChangeText={(bio) => setHost({ ...host, bio })}
        />
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Done</AuthButtonText>
        </AuthButton>
      </Container>
    </BackgroundIMG>
  );
};

export const BackgroundIMG = styled.ImageBackground`
  flex: 1;
  height: 90%;
  width: 100%;
  justify-content: center;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #f0ba00;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
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

export const Container = styled.View`
  flex: 2;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  background-color: rgba(0, 0, 0, 0.5);
`;
export default HostSignUp;
