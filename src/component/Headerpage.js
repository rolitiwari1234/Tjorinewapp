import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";


const Headerpage = ({text,icon}) => {
  const [fontsLoaded] = useFonts({
    "PlayfairDisplay-Black": require("../../assets/fonts/PlayfairDisplay-Black.ttf")
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
          <Text style={styles.headertext}>
            {text}</Text>
        </View>
        <View style={styles.iconview}>
          <Text>{icon}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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
    color: "#C0B394",
    fontWeight: "bold",
    fontFamily: "PlayfairDisplay-Black",
    textTransform: "uppercase",
  },
  iconview: {
    right: 20,
  
  },
});

export default Headerpage;
