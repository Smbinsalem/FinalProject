import React, { useState } from "react";
//Mobx
import reviewStore from "../../../Stores/reviewStore";

//Style
import styled from "styled-components/native";
import { observer } from "mobx-react";
import { ScrollView } from "react-native-gesture-handler";
import { AirbnbRating } from "react-native-ratings";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import pawRating from "../../../assets/icons/post.png";

const AddReview = ({ petHost, hideModal }) => {
  const [review, setReview] = useState({
    comment: "",
    rating: 0,
    host: petHost.username,
  });

  const handleSubmit = async () => {
    await reviewStore.addReview(review);
    hideModal();
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <AirbnbRating
            count={5}
            size={15}
            onFinishRating={(count) => setReview({ ...review, rating: count })}
            reviews={["Awful", "OK", "Good", "Very Good", "Exceptional"]}
          />
        </View>
        <LabelStyle>Comment</LabelStyle>
        <AuthTextInput
          placeholder="Enter your review"
          placeholderTextColor="white"
          onChangeText={(comment) => setReview({ ...review, comment })}
        />
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Confirm Review</AuthButtonText>
        </AuthButton>
      </ScrollView>
    </>
  );
};

export default observer(AddReview);

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
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
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: white;
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
`;

const LabelStyle = styled.Text`
  color: white;
  font-size: 16px;
  margin-top: 7%;
  /* padding: 1%; */
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "black",
  },

  Title: {
    backgroundColor: "#fff",

    width: 300,
    height: 100,
    fontSize: 20,
    marginBottom: 20,
    alignItems: "center",
    textAlign: "center",
    borderRadius: 6,
  },

  SubmitButton: {
    justifyContent: "center",
    fontSize: 20,

    color: "white",
    borderRadius: 5,
    alignSelf: "center",
    textAlign: "center",
  },
});
