import React from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

// constants
import { images, theme } from "../constants";
const { onboarding1, onboarding2, onboarding1a } = images;

// theme
const { COLORS, FONTS, SIZES } = theme;

const onBoardings = [
  {
    title: "Are you Traveling?",
    description: "your pets scared of shelters ? not reliable? too expensive?",
    img: onboarding1,
    img1: onboarding1a,
  },
  {
    title: "Is your pet bored",
    description:
      "Lonely? waiting for the petsitter to visit every now and then?",
    img: onboarding2,
  },
  {
    title: "We got you",
    description:
      "At petly you have the opportunity to leave your pet in safe hands",
    img: onboarding1a,
  },
];

const Onboarding = ({ navigation }) => {
  const [completed, setCompleted] = React.useState(false);

  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    scrollX.addListener(({ value }) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeListener();
  }, []);

  // Render

  function renderContent() {
    return (
      <View>
        <Animated.ScrollView
          horizontal
          pagingEnabled
          scrollEnabled
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        >
          {onBoardings.map((item, index) => (
            <View
              //center
              //bottom
              key={`img-${index}`}
              style={styles.imageAndTextContainer}
            >
              <View
                style={{
                  flex: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    bottom: "10%",
                    left: 40,
                    right: 40,
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.h1,
                      color: COLORS.white,
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Text>

                  <Text
                    style={{
                      ...FONTS.body3,
                      textAlign: "center",
                      marginTop: SIZES.base,
                      color: COLORS.white,
                    }}
                  >
                    {item.description}
                  </Text>
                </View>
                <Image
                  source={item.img}
                  resizeMode="contain"
                  style={{
                    width: "90%",
                    height: "40%",
                  }}
                />
              </View>
            </View>
          ))}
        </Animated.ScrollView>
        <View>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: 150,
              height: 60,
              paddingLeft: 20,
              justifyContent: "center",
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
              backgroundColor: COLORS.yellow,
            }}
            onPress={() => navigation.replace("SignIn")}
          >
            {/* Button */}
            <Text style={{ ...FONTS.h1, color: COLORS.white }}>
              {completed ? "Let's Go" : "Skip"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, { width: dotSize, height: dotSize }]}
            />
          );
        })}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.navy,
  },
  imageAndTextContainer: {
    width: SIZES.width,
  },
  dotsRootContainer: {
    position: "absolute",
    bottom: SIZES.height > 700 ? "20%" : "16%",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.padding / 2,
    marginBottom: SIZES.padding * 3,
    height: SIZES.padding,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: "#f0ba00",
    marginHorizontal: SIZES.radius / 2,
  },
});

export default Onboarding;
