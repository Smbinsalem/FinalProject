import React from "react";
import styled from "styled-components";
import { completeImgPath } from "../../../util";
import { observer } from "mobx-react";
import { View, Image} from "react-native";
import hostStore from "../../../Stores/hostStore";

const ImageItem = ({ hostId, navigation }) => {
    const hostImages = hostStore.files.filter((Image) => image.hostId === hostId);

  return (
    <View>
           <View>
           <Image
        source={
          hostImages?.image
            ? { uri: completeImgPath(hostImages?.image) }
            : null
        }
          resizeMode="contain"
          style={{
            marginBottom: 60,
            borderRadius: 15,
            height: 400,
            width: 400,
            marginTop: 60,
            resizeMode: "contain",
          }}
        />
      </View>
  
    </View>
  );
};

export default observer(ImageItem);
