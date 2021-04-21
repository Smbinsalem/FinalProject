import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
//styles
import styled from "styled-components/native";
//stores
import authStore from "../../Stores/authStore";
//navigation
import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";
//images
import Pet1 from "../../assets/images/Pet8.jpeg";
import hostStore from "../../Stores/hostStore";
import ownerStore from "../../Stores/ownerStore";

//component
import PetList from "../Components/Pets/PetList";

//Profile
export const ProfileWrapper = styled.View`
  margin-top: 23%;
  margin-bottom: 20px;
  background-color: rgba(138, 165, 188, 0.4);
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
  margin-top: 7%;
`;
export const FullNameWrapper = styled.View`
  flex-direction: row;
  margin-top: 1%;
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

const SignoutButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    authStore.signout();
    navigation.navigate("SplashPage");
  };
  return (
    <SignoutButtonStyled name="logout" type="AntDesign" onPress={handlePress} />
  );
};
// hostStore.hosts.image

// const {hosts} = route.params;
// const owner = ownerStore.owners.find(
//   (user) => user.userId === authStore.user.id
// );
// console.log(owner);
const ProfileScreen = ({ navigation, route }) => {


  return (
    <View>
      <StyledView>
        <SignoutButton />
      </StyledView>
      <ProfileWrapper>
        {/* <Text> PROFILE </Text> */}
        <ProfileUsernameStyled>
          {authStore.user.firstName}
        </ProfileUsernameStyled>
        <ProfileImage source={Pet1} accessibilityLabel="Profile pic" />

        <FullNameWrapper>
          <ProfileInfoStyled> {authStore.user.firstName}</ProfileInfoStyled>
          <ProfileInfoStyled> {authStore.user.lastName}</ProfileInfoStyled>
        </FullNameWrapper>
        <ProfileInfoStyled> {authStore.user.contactNumber}</ProfileInfoStyled>
        <ProfileInfoStyled> {authStore.user.dateOfBirth}</ProfileInfoStyled>
        <ProfileInfoStyled> {authStore.user.email}</ProfileInfoStyled>
        <EditProfileStyled onPress={() => alert("Button Clicked !")}>
          <Text>Edit Profile</Text>
        </EditProfileStyled>


        <PetList ownerId={authStore.user.petOwnerId} />

      </ProfileWrapper>
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

const SignoutButtonStyled = styled(Icon)`
  color: red;
`;

const StyledView = styled.View`
  position: absolute;
  right: 20;
  top: 60;
`;
