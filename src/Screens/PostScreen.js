import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import PetList from "../Components/Pets/PetList";
import authStore from "../../Stores/authStore";
import ownerStore from "../../Stores/ownerStore";
//Styling
import styled from "styled-components/native";

export const PostWrapper = styled.View`
  margin-top: 23%;
  margin-bottom: 20px;
  font-size: 25px;
  padding: 1%;
`;

const PostScreen = ({ navigation }) => {
  // const {hosts} = route.params;

  return (
    <PostWrapper>
      <PetList ownerId={authStore.user.petOwnerId} />
    </PostWrapper>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
