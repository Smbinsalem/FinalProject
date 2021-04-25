import React from "react";

import { useState } from "react";
import { observer } from "mobx-react";
import { completeImgPath } from "../../../util";
import { Spinner } from "native-base";

//Style
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import hostStore from "../../../Stores/hostStore";

const EditHost = () => {
  if (hostStore.loading) return <Spinner />;

  const [host, setHost] = useState({
    // image: completeImgPath(host.image),
    location: hostStore.hosts.location,
    bio: hostStore.hosts.bio ? hostStore.hosts.bio : "Bio",
  });
  const handleSubmit = () => hostStore.updateHost(host);

  return (
    <>
      <ScrollView>
        {/* Image */}

        {/*   Location   */}
        <AuthTextInput
          onChangeText={(location) => setHost({ ...host, location })}
          value={host.location}
          //   placeholder={host.location}
          autoCapitalize="none"
          placeholderTextColor="white"
        />
        {/* Bio */}
        <AuthTextInput
          value={host.bio}
          //   placeholder={host.bio}
          placeholderTextColor="white"
          onChangeText={(bio) => setHost({ ...host, bio })}
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

export default observer(EditHost);
