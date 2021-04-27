import React from "react";

import { useState } from "react";
import authStore from "../../../Stores/authStore";
import { observer } from "mobx-react";
import { completeImgPath } from "../../../util";
import { Spinner } from "native-base";

//Component
import EditHost from "./EditHost";

//Style
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import ownerStore from "../../../Stores/ownerStore";

const EditProfile = () => {
  if (ownerStore.loading) return <Spinner />;

  const [user, setUser] = useState({
    firstName: authStore.user?.firstName,
    lastName: authStore.user?.lastName,
    contactNumber: authStore.user?.contactNumber,
    username: authStore.user?.username,
    email: authStore.user?.email,
  });

  const handleSubmit = () => authStore.updateUser(user);

  return (
    <>
      <ScrollView>
        {/* Image */}
        <EditHost />
        {/*   Username   */}
        <AuthTextInput
          onChangeText={(username) => setUser({ ...user, username })}
          value={user.username}
          placeholder={user.username}
          autoCapitalize="none"
          placeholderTextColor="white"
        />
        {/* First Name */}
        <AuthTextInput
          value={user.firstName}
          placeholder={user.firstName}
          placeholderTextColor="white"
          onChangeText={(firstName) => setUser({ ...user, firstName })}
        />
        {/* Last Name */}
        <AuthTextInput
          value={user.lastName}
          placeholder={user.lastName}
          placeholderTextColor="white"
          onChangeText={(lastName) => setUser({ ...user, lastName })}
        />

        {/* Contact Number */}
        <AuthTextInput
          value={user.contactNumber}
          placeholder={user.contactNumber}
          placeholderTextColor="white"
          onChangeText={(contactNumber) => setUser({ ...user, contactNumber })}
        />
        <AuthTextInput
          value={user.email}
          placeholder={user.email}
          placeholderTextColor="white"
          onChangeText={(email) => setUser({ ...user, email })}
        />
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Update</AuthButtonText>
        </AuthButton>
      </ScrollView>
    </>
  );
};

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  margin: 30px;
  background-color: #f0ba00;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  text-align: center;
  align-self: stretch;
  align-items: center;
  font-size: 18px;
`;

export const AuthTextInput = styled.TextInput`
  /* align-self: stretch; */
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  margin: 20px;
  color: white;
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
`;

export default observer(EditProfile);
