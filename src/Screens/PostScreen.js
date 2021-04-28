import React from "react";
import PetList from "../Components/Pets/PetList";
import authStore from "../../Stores/authStore";

//Styling
import styled from "styled-components/native";
import AddNewPet from "../Components/Pets/AddNewPet";
import { View, Text, Image } from "react-native";
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
          height: "10%",

          // paddingTop: "%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: "20%",
              width: "50%",
              justifyContent: "center",
              marginLeft: 165,
            }}
          >
            <Text
              style={{
                top: -40,
                fontSize: 24,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              My Pets
            </Text>
          </View>
        </View>

        <View style={{ marginTop: "30%", width: "50%" }}>
          <Text
            style={{
              fontSize: 32,
              color: "#FFF",
              fontWeight: "bold",
            }}
          ></Text>
        </View>
      </View>

      <LinearGradient
        colors={["rgba(23, 42, 58,0.8)", "transparent"]}
        style={{
          height: 100,
          marginTop: -10,
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
        <ViewWrapper>
          <AuthButton onPress={showModal}>
            <Image
              source={require("../../assets/icons/pos.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: "#fff",
              }}
            />
          </AuthButton>
        </ViewWrapper>
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
  align-self: center;
  align-items: center;
  padding: 15px;
  width: 60px;
  height: 60px;
  background-color: #f0ba00;
  border-radius: 100px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 50px;
`;

export const ViewWrapper = styled.View`
  border-radius: 50px;
`;
export const ScrollWrapper = styled.View`
  padding-bottom: 20%;
`;
