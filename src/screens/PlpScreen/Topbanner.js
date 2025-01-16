import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

const Topbanner = () => {
  const [fontsLoaded] = useFonts({
    "PlayfairDisplay-Regular": require("../../../assets/fonts/PlayfairDisplay-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }
  return (
    <SafeAreaView style={styles.conatiner}>
      <ScrollView>
        <View style={{ width: "100%" }}>
          <Image
            source={require("../../../assets/images/Plpbanner.png")}
            style={styles.img}
          />
        </View>
        <View style={styles.imgview}>
          <Text style={styles.imgtext}>The Blouse Diaries</Text>
        </View>
        <View style={styles.textrow}>
          <View>
            <Text style={styles.textview}>Home</Text>
          </View>
          <View style={styles.dots}></View>
          <View>
            <Text style={styles.textview}>Editorial Picks </Text>
          </View>
          <View style={styles.dots}></View>

          <View style={styles.fillbtn}>
            <Image
              source={require("../../../assets/images/Fillbutton.png")}
              style={styles.fillimg}
            />
            <Text style={styles.textbutton}>The Blouse Diaries</Text>
          </View>
        </View>
        <View style={styles.lineview}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 15,
  },
  imgview: {
    position: "absolute",
    left: "50%",
    top: 10,
  },
  img: {
    width: responsiveScreenWidth(),
    height: responsiveScreenHeight(15),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  imgtext: {
    color: "#fff",
    width: 75,
    fontFamily: "PlayfairDisplay-Regular",
    fontSize: responsiveFontSize(3),
  },
  textrow: {
    width: "100%",
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textview: {
    color: "#8F8F8F",
  },
  dots: {
    width: 10,
    height: 10,
    backgroundColor: "#8F8F8F",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  fillbtn: {
    justifyContent: "center",
    alignItems: "center",
  },
  fillimg: {
    width: 142,
    justifyContent: "center",
    alignItems: "center",
  },
  textbutton: {
    color: "#8F8F8F",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  lineview: {
    width: "100%",
    height: 1,

    marginVertical: 10,

    backgroundColor: "#8F8F8F",
  },
});

export default Topbanner;
