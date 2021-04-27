import React from "react";
import PetList from "../Components/Pets/PetList";
import authStore from "../../Stores/authStore";

//Styling
import styled from "styled-components/native";
import AddNewPet from "../Components/Pets/AddNewPet";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Modal, Portal, Provider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

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
      <View
        style={{
          backgroundColor: "#172A3A",
          height: "20%",
          // paddingTop: 10,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "space-between",
            marginTop: "5%",
            width: "100%",
          }}
        >
          <Text
            style={{
              top: -20,
              fontSize: 32,
              color: "#FFF",
              fontWeight: "bold",
            }}
          >
            My Pets
          </Text>
          <ViewWrapper>
            <AuthButton onPress={showModal}>
              <AuthButtonText style={{ color: "white" }}>+</AuthButtonText>
            </AuthButton>
          </ViewWrapper>
          <View style={{ marginTop: "30%", width: "50%" }}>
            <Text
              style={{
                top: -30,
                fontSize: 32,
                color: "#FFF",
                fontWeight: "bold",
              }}
            ></Text>
          </View>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(23, 42, 58,0.8)", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 100,
          marginTop: -10,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      ></LinearGradient>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <AddNewPet hideModal={hideModal} />
          </Modal>
        </Portal>
        <ScrollWrapper>
          <ScrollView>
            <PetList
              navigation={navigation}
              ownerId={authStore.user.petOwnerId}
            />
          </ScrollView>
        </ScrollWrapper>
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
  margin: 1px;
  align-items: center;
  padding: 15px;
  /* padding-bottom: 15px; */
  background-color: #f0ba00;
  margin-top: 90px;
  border-radius: 100px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 25px;
`;

export const ViewWrapper = styled.View`
  padding-bottom: 1%;
  margin: auto;
  left: 200px;
`;
export const ScrollWrapper = styled.View`
  padding-bottom: 20%;
`;
