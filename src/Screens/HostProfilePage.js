import React from "react";
import { StyleSheet } from "react-native";
import PetList from "../Components/Pets/PetList";
import authStore from "../../Stores/authStore";

//Styling
import styled from "styled-components/native";
import AddNewPet from "../Components/Pets/AddNewPet";

import { Modal, Portal, Provider } from "react-native-paper";

const PostScreen = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "#2b4f60",
    padding: 20,
    margin: 60,
    paddingTop: 50,
    paddingBottom: 50,
    paddingRight: 60,
    paddingLeft: 60,
  };

  return (
    <>
      <PostWrapper>
        <PetList ownerId={authStore.user.petOwnerId} />
      </PostWrapper>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <AddNewPet />
          </Modal>
        </Portal>
        <AuthButton onPress={showModal}>
          <AuthButtonText style={{ color: "white" }}>
            Add New Pet
          </AuthButtonText>
        </AuthButton>
      </Provider>
    </>
  );
};

export default PostScreen;

export const PostWrapper = styled.View`
  margin-top: 23%;
  margin-bottom: 20px;
  font-size: 25px;
  padding: 1%;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  margin: auto;
  align-items: center;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #f0ba00;
  margin-top: 30px;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-top-right-radius: 13px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 19px;
`;
