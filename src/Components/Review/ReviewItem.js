import React, { useEffect } from "react";
import { ListItem } from "native-base";
import { observer } from "mobx-react";
import styled from "styled-components";
import { TouchableOpacity, Image, View, ScrollView } from "react-native";
import { completeImgPath } from "../../../util";

const ReviewItem = ({ hostReview }) => {
  return (
    <>
      <HomeWrapper>
        <TextStyled>
          {hostReview.comment} {`\n`}
        </TextStyled>

        <TextStyled>
          {hostReview.rating} {`\n`}
        </TextStyled>
      </HomeWrapper>
    </>
  );
};
export default observer(ReviewItem);

//Styling

const HomeWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const TextStyled = styled.Text`
  font-size: 15px;
  padding: 1%;
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
