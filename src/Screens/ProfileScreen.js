import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
//styles
import styled from "styled-components/native";
//stores
import authStore from "../../Stores/authStore";
//navigation
import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";
//images
import Pet1 from "../../assets/images/Pet8.jpeg";
import BurgerOptions from "../../assets/images/1.png";
import hostStore from "../../Stores/hostStore";
import ownerStore from "../../Stores/ownerStore";

//component
import PetList from "../Components/Pets/PetList";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

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
          <SignoutButton />
        </StyledView>
        <Image
          source={BurgerOptions}
          style={{
            marginTop: "10%",
            height: 20,
            width: 20,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: "15%",
            width: "100%",
          }}
        >
          <View style={{ marginTop: "10%", width: "50%" }}>
            <Text
              style={{
                top: -40,
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
      >
        {/* <View
          style={{
            backgroundColor: "#FFF",
            paddingVertical: 8,
            paddingHorizontal: 20,
            marginHorizontal: 20,
            borderRadius: 15,
            marginTop: 25,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/icons/find.png")}
            style={{ height: 20, width: 20 }}
          />
        </View> */}
      </LinearGradient>

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
          <ProfileInfoStyled> {authStore.user.email}</ProfileInfoStyled>
          <EditProfileStyled onPress={() => alert("Button Clicked !")}>
            <Text>Edit Profile</Text>
          </EditProfileStyled>
        </FieldWrapper>
        {/* <PetList ownerId={authStore.user.petOwnerId} /> */}
      </ScrollView>
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
