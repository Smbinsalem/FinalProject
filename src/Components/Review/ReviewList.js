import { observer } from "mobx-react";
import React, { useEffect } from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import reviewStore from "../../../Stores/reviewStore";
import authStore from "../../../Stores/authStore";
import { Spinner, Text } from "native-base";
import ReviewItem from "../Review/ReviewItem";
import hostStore from "../../../Stores/hostStore";

const ReviewList = ({ navigation, route }) => {
  if (reviewStore.loading) return <Spinner />;
  const { host } = route.params;
  const hostProfile = hostStore.hosts.find((user) => user.userId === host.id);

  //New Method
  const reviewList = reviewStore.reviews
    .filter((review) => review.hostId === hostProfile.id)
    .map((hostReview) => (
      <ReviewItem
        navigation={navigation}
        hostReview={hostReview}
        key={hostReview.id}
      />
    ));
  return (
    <ScrollView>
      <HomeWrapper>
        <Text>WHERE ARE THE REVIEWS</Text>
        {reviewList}
      </HomeWrapper>
    </ScrollView>
  );
};

export default observer(ReviewList);

//Styling

const HomeWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
