import React from "react";

import { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { completeImgPath } from "../../../util";
import { Spinner } from "native-base";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
//Style
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import hostStore from "../../../Stores/hostStore";

const EditHost = ({ hideModal }) => {
  if (hostStore.loading) return <Spinner />;

  const [host, setHost] = useState({
    // image: completeImgPath(host.image),
    location: hostStore.hosts.location ? hostStore.hosts.location : "Location",
    bio: hostStore.hosts.bio ? hostStore.hosts.bio : "Bio",
  });

  //IMAGE PICKER
  const handleSubmit = () => {
    hostStore.updateHost(host);
    hideModal();
  };
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      // ImagePicker saves the taken photo to disk and returns a local URI to it
      let localUri = result.uri;
      let filename = localUri.split("/").pop();

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      setHost({ ...host, image: { uri: localUri, name: filename, type } });
    }
  };

  return (
    <>
      <ScrollView>
        <Body>
          {/* Image */}
          <Button title="Change profile image" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ flex: 1, width: 200, height: 200 }}
            />
          )}
          {/*   Location   */}
          <AuthTextInput
            value={host.location}
            //   placeholder={host.location}
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={(location) => setHost({ ...host, location })}
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
        </Body>
      </ScrollView>
    </>
  );
};

const Body = styled.View`
  padding-top: 45px;
  margin: auto;
`;
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
