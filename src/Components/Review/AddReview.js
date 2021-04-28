import React, { useState } from "react";
//Mobx
import reviewStore from "../../../Stores/reviewStore";

//Style
import styled from "styled-components";
import { observer } from "mobx-react";
import { ScrollView } from "react-native-gesture-handler";
import { AirbnbRating } from "react-native-ratings";
import { View } from "react-native";

//******
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
        <View>
          <AirbnbRating
            count={5}
            size={30}
            onFinishRating={(count) => setReview({ ...review, rating: count })}
            reviews={["Awful", "OK", "Good", "Very Good", "Exceptional"]}
          />
        </View>
        <LabelStyle>Comment</LabelStyle>
        <AuthTextInput
          placeholder="Briefly explain your rating"
          placeholderTextColor="lightgray"
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


//Styling
export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #f0ba00;
  border-radius: 100px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  text-align: center;
  align-self: stretch;
  font-weight:bold;
  align-items: center;
  font-size: 18px;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  padding-bottom: 65px;
  height: 100px;
  margin-bottom: 30px;
  color: white;
  border-radius: 10px;
  border: 1px;
  border-color: #f0ba00;
`;

const LabelStyle = styled.Text`
  color: white;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
  margin-top: 7%;
  border-bottom-color: #f0ba00;
  border-bottom-width: 1px;
`;
