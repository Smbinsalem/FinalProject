import React from "react";

//styles
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Modal } from "react-native-paper";

//stores
import authStore from "../../Stores/authStore";
//navigation
import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";
//images
import BurgerOptions from "../../assets/images/1.png";

//component
import EditProfile from "../Components/User/EditUser";
//Profile
export const ProfileWrapper = styled.View`
  margin-top: 23%;
  /* margin-bottom: 20px; */
  background-color: rgba(23, 42, 58, 1);
  padding: 1%;
`;
export const FieldWrapper = styled.View`
  background-color: rgba(23, 42, 58, 0);
  padding: 1%;
`;

export const ProfileImage = styled.Image`
  width: 175px;
  height: 175px;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 100px;
`;

export const ProfileUsernameStyled = styled.Text`
  color: #f0ba00;

  font-weight: bold;
  font-size: 30px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
`;
export const ProfileInfoStyled = styled.Text`
  color: black;
  font-size: 20px;
  /* margin-top: 7%; */
  padding: 1%;
`;
export const FullNameWrapper = styled.View`
  flex-direction: row;
  margin-top: 1%;
`;
export const LabelStyle = styled.Text`
  color: gray;
  font-size: 20px;
  margin-top: 7%;
  padding: 1%;
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
`;
export const EditProfileStyled = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 10px;
  background-color: #f0ba00;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
`;

// Menu Function
const MenuButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    authStore.signout();
    navigation.navigate("SplashPage");
  };

  return (
    <>
      <MenuButtonStyled onPress={handlePress}>
        <Text>Switch Account</Text>
      </MenuButtonStyled>
      <MenuButtonStyled onPress={handlePress}>
        <SignoutTextStyled>Sign Out</SignoutTextStyled>
      </MenuButtonStyled>
    </>
  );
};

// hostStore.hosts.image

// const {hosts} = route.params;
// const owner = ownerStore.owners.find(
//   (user) => user.userId === authStore.user.id
// );
// console.log(owner);

//**************  MAIN FUNCTION ****************

const ProfileScreen = ({ navigation, route }) => {
  const [visible, setVisible] = React.useState(false);
  const [_visible, _setVisible] = React.useState(false);

  //Update modal
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  //Burger Menu
  const _showModal = () => _setVisible(true);
  const _hideModal = () => _setVisible(false);
  const containerStyle = {
    backgroundColor: "#2b4f60",
    height: "87%",
    width: "77%",
    padding: 10,
    margin: 60,
  };
  const _containerStyle = {
    backgroundColor: "#2b4f60",
    height: "37%",
    width: "77%",
    padding: 20,
    margin: 60,
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: "#172A3A",
          height: "30%",
          // borderBottomLeftRadius: 30,
          // borderBottomRightRadius: 30,
          paddingHorizontal: 20,
        }}
      >
        <StyledView>
          <TouchableOpacity onPress={_showModal}>
            <MenutICONStyled name="menu" type="Feather" />
          </TouchableOpacity>
        </StyledView>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: "18%",
            width: "100%",
          }}
        >
          <View style={{ marginTop: "30%", width: "50%" }}>
            <Text
              style={{
                top: -70,
                fontSize: 28,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Hi {authStore.user.username}
            </Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <Image
              source={require("../../assets/images/Pet6.png")}
              style={{
                top: -10,
                height: 60,
                width: 60,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
          </View>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(23, 42, 58,0.8)", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 100,
          marginTop: -50,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      ></LinearGradient>
      {/* PROFILE DETAILS */}
      <ScrollView>
        <FieldWrapper>
          <LabelStyle>Full name:</LabelStyle>
          <FullNameWrapper>
            <ProfileInfoStyled>{authStore.user.firstName}</ProfileInfoStyled>
            <ProfileInfoStyled> {authStore.user.lastName}</ProfileInfoStyled>
          </FullNameWrapper>
          <LabelStyle>Phone number:</LabelStyle>
          <ProfileInfoStyled> {authStore.user.contactNumber}</ProfileInfoStyled>
          <LabelStyle>Date of Birth:</LabelStyle>
          <ProfileInfoStyled> {authStore.user.dateOfBirth}</ProfileInfoStyled>
          <LabelStyle>Email:</LabelStyle>
          <ProfileInfoStyled>
            {" "}
            {authStore.user.email} {`\n`}
          </ProfileInfoStyled>
          {/* EDIT BUTTON */}
          <EditProfileStyled onPress={showModal}>
            <Text>Edit Profile</Text>
          </EditProfileStyled>
        </FieldWrapper>
        {/* <PetList ownerId={authStore.user.petOwnerId} /> */}
      </ScrollView>

      {/* EDIT MODAL */}
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <EditProfile />
      </Modal>
      {/* BURGER MENU */}
      <Modal
        visible={_visible}
        onDismiss={_hideModal}
        contentContainerStyle={_containerStyle}
        // modalAnimation={
        //   new SlideAnimation({
        //     slideFrom: "bottom",
        //   })
        // }
      >
        <MenuButton />
      </Modal>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

const MenuButtonStyled = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 10px;
  background-color: #f0ba00;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10%;
  width: 90%;
  color: red;
`;
const MenutICONStyled = styled(Icon)`
  color: white;
`;
const SignoutTextStyled = styled.Text`
  color: red;
`;

const StyledView = styled.View`
  position: absolute;
  right: 20;
  top: 60;
`;
