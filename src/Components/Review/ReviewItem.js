import React, { useEffect } from "react";
import { ListItem } from "native-base";
import { observer } from "mobx-react";
import styled from "styled-components";
import { AirbnbRating } from "react-native-ratings";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

const ReviewItem = ({ hostReview }) => {
  return (
    <HomeWrapper>
      <TextStyled>
        <AirbnbRating
          count={hostReview?.rating}
          showRating={false}
          size={20}
          selectedColor={"#f0ba00"}
          unSelectedColor={"#f0ba00"}
          reviewColor={"red"}
          isDisabled={true}
        />
      </TextStyled>
      <TextStyled>
        {hostReview.comment} {`\n`}
      </TextStyled>
    </HomeWrapper>
  );
};
export default observer(ReviewItem);

//Styling

const HomeWrapper = styled.View`
  flex: 1;
  height: 120;
  background-color: #172a3a;
  padding: 5%;
  padding-top: 15%;
  margin: 2%;
  border-top-left-radius: 30;
  border-bottom-left-radius: 30;
  border-bottom-right-radius: 30;
  border-top-right-radius: 30;
  width: 390;
  justify-content: flex-start;
  align-items: flex-end;
`;
const TextStyled = styled.Text`
  font-size: 15px;
  padding: 2%;
  margin-top: -10%;
  margin-left: 1%;
  margin-bottom: 5%;
  align-self: center;
  font-weight: bold;
  width: 100%;
  color: white;
`;

const SubTextStyled = styled.Text`
  font-size: 12px;
  margin-top: -10%;
  margin-left: 3%;
  font-weight: normal !important;
  align-self: center;
  width: 100%;
  color: white;
`;
