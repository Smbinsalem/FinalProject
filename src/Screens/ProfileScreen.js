import React from "react";

//styles
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Modal } from "react-native-paper";
import { Spinner } from "native-base";

//stores
import authStore from "../../Stores/authStore";
import ownerStore from "../../Stores/ownerStore";
//navigation
import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";
//images
import { completeImgPath } from "../../util";

//component
import EditProfile from "../Components/User/EditUser";

//Component
import EditOwner from "../Components/User/EditOwner";

// Menu Function
const MenuButton = () => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const SettingStyle = {
    backgroundColor: "#2b4f60",
    height: 380,
    margin: "auto",
  };

  const navigation = useNavigation();

  const handlePress = async () => {
    navigation.replace("onBoarding");
    await authStore.signout();
  };

  return (
    <>
      <MenuButtonStyled onPress={showModal}>
        <Text>Settings</Text>
      </MenuButtonStyled>
      <MenuButtonStyled onPress={handlePress}>
        <Text>Switch Account</Text>
      </MenuButtonStyled>
      <MenuButtonStyled onPress={handlePress}>
        <SignoutTextStyled>Sign Out</SignoutTextStyled>
      </MenuButtonStyled>

      {/* EDIT MODAL */}
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={SettingStyle}
      >
        <EditOwner hideModal={hideModal} />
      </Modal>
    </>
  );
};

//**************  MAIN FUNCTION ****************

const ProfileScreen = ({ navigation, route }) => {
  //************ SPINNER ************
  if (ownerStore.loading) return <Spinner />;
  //************ EDIT MODAL ************
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "#2b4f60",
    height: "87%",
    width: "77%",
    padding: 10,
    margin: 60,
  };
  //************ MENU MODAL ************
  const [_visible, _setVisible] = React.useState(false);
  const _showModal = () => _setVisible(true);
  const _hideModal = () => _setVisible(false);
  const _containerStyle = {
    backgroundColor: "#2b4f60",
    height: "37%",
    width: "77%",
    padding: 20,
    margin: 60,
  };
  //************ OWNER IMAGE ************

  const owner = ownerStore.owners.find(
    (user) => user.userId === authStore.user?.id
  );

  //************ RETURN ************

  return (
    <View>
      <View
        style={{
          backgroundColor: "#172A3A",
          height: "15%",
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
            width: "100%",
          }}
        >
          <View style={{ marginLeft: "40%", width: "30%" }}>
            <Text
              style={{
                marginTop: 20,
                fontSize: 30,
                top: -30,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Hi {authStore.user?.username}
            </Text>
          </View>
          <View style={{ marginTop: "30%", width: "50%" }}>
            <Image
              source={{ uri: completeImgPath(owner.image) }}
              style={{
                top: -85,
                height: 60,
                width: 60,
                marginLeft: 60,
                borderRadius: 30,
              }}
            />
          </View>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(23, 42, 58,0.8)", "transparent"]}
        style={{
          height: 40,
        }}
      ></LinearGradient>
      {/* PROFILE DETAILS */}
      <ScrollView>
        <FieldWrapper>
          <LabelStyle>Biography:</LabelStyle>
          <ProfileInfoStyled>{owner.bio}</ProfileInfoStyled>

          <LabelStyle>Full name:</LabelStyle>
          <FullNameWrapper>
            <ProfileInfoStyled>{authStore.user?.firstName}</ProfileInfoStyled>
            <ProfileInfoStyled> {authStore.user?.lastName}</ProfileInfoStyled>
          </FullNameWrapper>
          <LabelStyle>Phone number:</LabelStyle>
          <ProfileInfoStyled>{authStore.user?.contactNumber}</ProfileInfoStyled>
          <LabelStyle>Date of Birth:</LabelStyle>
          <ProfileInfoStyled> {authStore.user?.dateOfBirth}</ProfileInfoStyled>
          <LabelStyle>Email:</LabelStyle>
          <ProfileInfoStyled>
            {authStore.user?.email} {`\n`}
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
        {/* <EditOwner/> */}
        <EditProfile />
      </Modal>
      {/* BURGER MENU */}
      <Modal
        visible={_visible}
        onDismiss={_hideModal}
        contentContainerStyle={_containerStyle}
      >
        <MenuButton />
      </Modal>
    </View>
  );
};

export default ProfileScreen;

//************ PROFILE STYLING ************
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

//************ MENU STYLING ************

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
  left: 20px;
  top: 60px;
`;
