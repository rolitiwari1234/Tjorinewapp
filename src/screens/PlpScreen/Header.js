import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import Svg, { Path } from "react-native-svg";

const Header = ({ props }) => {
  const [fontsLoaded] = useFonts({
    "PlayfairDisplay-Regular": require("../../../assets/fonts/PlayfairDisplay-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text></Text>
        </View>
        <View>
          <Text style={styles.headertext}>The Blouses Diaries</Text>
        </View>
        <View
          style={{
            right: 20,
          }}
        >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={18}
            fill="none"
            {...props}
          >
            <Path
              fill="#34302B"
              fillRule="evenodd"
              d="M10 8c3.806 0 7.115 2.232 8.805 5.518C19.567 15 20 16.157 20 17.96H0c0-1.818.44-2.989 1.214-4.48C2.91 10.216 6.208 8 10 8Z"
              clipRule="evenodd"
            />
            <Path
              fill="#770806"
              fillRule="evenodd"
              d="M17.5 13a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
              clipRule="evenodd"
            />
          </Svg>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#25211E",
    height: 62,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headertext: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    color: Colors.WHITE,
    fontWeight: "bold",
    fontFamily: "PlayfairDisplay-Regular",
  },
});

export default Header;
