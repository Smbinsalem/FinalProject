import React from "react";

import { useState, useEffect } from "react";
//Mobx
import hostStore from "../../../Stores/hostStore";

//Style
import styled from "styled-components/native";

//Native content
import DropDownPicker from "react-native-dropdown-picker";

//Images

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
    <>
      <Container>
        <AuthTextInput
          placeholder="Location"
          placeholderTextColor="white"
          onChangeText={(location) => setHost({ ...host, location })}
        />
        <DropDownView>
          <DropDownPicker
            items={[
              { label: "Dogs", value: "Dogs" },
              { label: "Cats", value: "Cats" },
              { label: "Birds", value: "Birds" },
              { label: "Fish", value: "Fish" },
              { label: "Reptiles", value: "Reptiles" },
            ]}
            placeholder="Type of pets"
            containerStyle={{ height: 40, width: 295 }}
            onChangeItem={(item) =>
              setHost({ ...host, typeOfPets: item.value })
            }
          />
        </DropDownView>
        <AuthTextInput
          placeholder="Biography"
          placeholderTextColor="white"
          onChangeText={(bio) => setHost({ ...host, bio })}
        />
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Sign Up</AuthButtonText>
        </AuthButton>
      </Container>
    </>
  );
};

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #f0ba00;
  margin-top: 30px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  font-size: 17px;
  height: 40px;
  width: 95%;
  margin-bottom: 30px;
  color: white;
  padding: 3%;
  border-color: #f0ba00;
  border-width: 1px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Container = styled.View`
  flex: 4;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  background-color: #172a3a;
`;
export const DropDownView = styled.View`
  right: 9.5;
  padding-bottom: 10%;
`;
export default HostSignUp;
