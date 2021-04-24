import { observer } from "mobx-react";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { completeImgPath } from "../../../util";

const ClientDetails = ({ route, navigation }) => {
  const { booking } = route.params;
  const { requester } = route.params;
  const { bookPet } = route.params;
  return (
    <HomeWrapper>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ClientContact", {
            pet: bookPet,
            client: requester,
          })
        }
      >
        <ProfileImage source={{ uri: completeImgPath(bookPet.image) }} />
        <StatusText>Pet Name: {bookPet.name} </StatusText>
      </TouchableOpacity>
      <StatusText>
        Client Name: {requester.firstName} {requester.lastName}
      </StatusText>
      <StatusText>
        The booking from {booking.dateFrom} to {booking.dateTo}
      </StatusText>
      <ChoiceView>
        <ChoiceText>Contact Client </ChoiceText>
      </ChoiceView>
    </HomeWrapper>
  );
};

export default observer(ClientDetails);

//Styling
const HomeWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const ChoiceView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StatusText = styled.Text`
  color: red;
`;

const ChoiceText = styled.Text`
  color: blue;
  background-color: yellow;
  margin: 10px;
  padding: 5px;
`;
export const ProfileImage = styled.Image`
  width: 125px;
  height: 125px;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 100px;
`;
