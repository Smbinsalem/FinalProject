import React from "react";
import styled from "styled-components";
import { completeImgPath } from "../../../util";
import { observer } from "mobx-react";
import { TouchableOpacity, View, Image } from "react-native";
import hostStore from "../../../Stores/hostStore";
import { ListItem } from "native-base";



      

const MoreHostItem = ({ user, navigation }) => {
  const hostProfile = hostStore.hosts.find((host) => host.userId === user.id);
  hostStore.averageReview(hostProfile.id);
  return (
      <View>
           <ListItem>
   <TouchableOpacity
      onPress={() => navigation.navigate("HostDetails", { user: user })}
          style={{
            height: 100,
            backgroundColor: "rgba(23, 42, 58, 1)",
            borderRadius: 15,
            marginBottom: 5,
            borderRadius: 15,
            width: "100%",
          }}
          >
                <View style={{ width: "92%", alignItems: "flex-end" }}>
      <Image
        source={
          hostProfile?.image
            ? { uri: completeImgPath(hostProfile?.image) }
            : null
        }
        style={{
            top: 20,
            height: 60,
            width: 60,
            borderRadius: 30,
          }}
      />
      </View>
      <View>
        <TextStyled>
          {user.firstName} {user.lastName}
        </TextStyled>
        <SubTextStyled>
        {user.gender === "Male" ? "He": "She" } prefers: {hostProfile.typeOfPets}
        </SubTextStyled>
        <SubTextStyled>
        {hostProfile.location}
        </SubTextStyled>
       
      </View>
  
    </TouchableOpacity>
    </ListItem>
    </View>
  );
};

export default observer(MoreHostItem);

const TextStyled = styled.Text`
  font-size: 17px;
  margin-top: -10%;
  margin-left: 20px;
  font-weight: bold;
  width: 100%;
  color: white;
`;
const SubTextStyled = styled.Text`
  font-size: 15px;
  margin-left: 20px;

  padding-top: -10%;
  font-weight: normal !important;
  width: 100%;
  color: white;
`;