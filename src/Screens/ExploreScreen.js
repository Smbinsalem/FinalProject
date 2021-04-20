import React from "react";
import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const ExploreScreen = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#172A3A",
          height: "25%",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={require("../../assets/images/1.png")}
          style={{
            height: 10,
            width: 20,
            marginTop: 50,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 25,
            width: "100%",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 28,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Hi Petly
            </Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <Image
              source={require("../../assets/images/Pet6.png")}
              style={{ height: 60, width: 60 }}
            />
          </View>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(23, 42, 58,0.4)", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 100,
          marginTop: -45,
        }}
      >
        <View
          style={{
            backgroundColor: "#FFF",
            paddingVertical: 8,
            paddingHorizontal: 20,
            marginHorizontal: 20,
            borderRadius: 15,
            marginTop: 25,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Search"
            placeholderTextColor="#172A3A"
            style={{
              fontWeight: "bold",
              fontSize: 18,
              width: 260,
            }}
          />
          <Image
            source={require("../../assets/icons/find.png")}
            style={{ height: 20, width: 20, left: 25 }}
          />
        </View>
      </LinearGradient>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "#172A3A",
            }}
          >
            Recommended
          </Text>
        </View>
        <View style={{ width: "50%", alignItems: "flex-end" }}>
          <View
            style={{
              backgroundColor: "#F0BA00",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              More
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ height: 400 }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: "#F0BA00",
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 30,
            width: 160,
          }}
        >
          <Image
            source={require("../../assets/images/Pet12.jpg")}
            style={{
              width: 160,
              height: 190,
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderTopRightRadius: 30,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              SAMANTHA
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#172A3A",
                paddingLeft: 35,
              }}
            >
              10 KD
            </Text>
          </View>
          <Text
            style={{
              paddingHorizontal: 10,
              fontWeight: "bold",
              color: "#fff",
              paddingTop: 3,
            }}
          >
            Al-Dasma
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: "#F0BA00",
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 30,
            width: 160,
          }}
        >
          <Image
            source={require("../../assets/images/Pet13.jpg")}
            style={{
              width: 160,
              height: 190,
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderTopRightRadius: 30,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              SAMANTHA
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#172A3A",
                paddingLeft: 35,
              }}
            >
              10 KD
            </Text>
          </View>
          <Text
            style={{
              paddingHorizontal: 10,
              fontWeight: "bold",
              color: "#fff",
              paddingTop: 3,
            }}
          >
            Al-Dasma
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: "#F0BA00",
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 30,
            width: 160,
          }}
        >
          <Image
            source={require("../../assets/images/Pet14.jpg")}
            style={{
              width: 160,
              height: 190,
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderTopRightRadius: 30,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              SAMANTHA
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#172A3A",
                paddingLeft: 35,
              }}
            >
              10 KD
            </Text>
          </View>
          <Text
            style={{
              paddingHorizontal: 10,
              fontWeight: "bold",
              color: "#fff",
              paddingTop: 3,
            }}
          >
            Al-Dasma
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: "#F0BA00",
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 30,
            width: 160,
          }}
        >
          <Image
            source={require("../../assets/images/Pet15.jpg")}
            style={{
              width: 160,
              height: 190,
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderTopRightRadius: 30,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              SAMANTHA
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#172A3A",
                paddingLeft: 35,
              }}
            >
              10 KD
            </Text>
          </View>
          <Text
            style={{
              paddingHorizontal: 10,
              fontWeight: "bold",
              color: "#fff",
              paddingTop: 3,
            }}
          >
            Al-Dasma
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
          marginTop: -80,
        }}
      >
        <View style={{ width: "50%" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "#172A3A",
            }}
          >
            Featured
          </Text>
          <View
            style={{
              backgroundColor: "#b1e5d3",
              width: 115,
              marginTop: -5,
            }}
          ></View>
        </View>
        <View style={{ width: "50%", alignItems: "flex-end" }}>
          <View
            style={{
              backgroundColor: "#F0BA00",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              More
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: -100 }}
      >
        <Image
          source={require("../../assets/images/18.png")}
          style={{ marginTop: 20, marginHorizontal: 20 }}
        />
        <Image
          source={require("../../assets/images/19.png")}
          style={{ marginTop: 20, borderRadius: 10 }}
        />
      </ScrollView>
    </View>
  );
};
export default ExploreScreen;

// import React from "react";
// import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

// const ExploreScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text> Explore Screen </Text>
//       <TouchableOpacity onPress={() => alert("Button Clicked !")}>
//         <Text>Click Here</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ExploreScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#fff",
//   },
// });
