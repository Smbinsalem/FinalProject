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
    <>
      <View
        style={{
          backgroundColor: "#172A3A",
          height: "20%",
          // paddingTop: "%",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: "10%",
            width: "100%",
          }}
        >
          <View style={{ marginTop: "30%", width: "50%" }}>
            <Text
              style={{
                top: -40,
                fontSize: 32,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Reviews
            </Text>
          </View>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(23, 42, 58,0.8)", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 100,
          marginTop: -10,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      ></LinearGradient>
      <HomeWrapper>
        <ScrollView>
          <HomeWrapper>{reviewList}</HomeWrapper>
        </ScrollView>
      </HomeWrapper>
    </>
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
