import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import reviewStore from "../../../Stores/reviewStore";
import { Spinner } from "native-base";
import ReviewItem from "../Review/ReviewItem";
import hostStore from "../../../Stores/hostStore";
//Style
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
    <View style={{flex:1}}>
      <View
        style={{
          backgroundColor: "#172A3A",
          height: "12%",

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
              marginLeft: 180,
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
              Review
            </Text>
          </View>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(23, 42, 58,0.8)", "transparent"]}
        style={{
          height: 50,
          marginTop: -10,
        }}
      ></LinearGradient>
      <HomeWrapper>
        <ScrollView>
          <HomeWrapper>{reviewList}</HomeWrapper>
        </ScrollView>
      </HomeWrapper>
    </View>
  );
};

export default observer(ReviewList);

//Styling
const HomeWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;
