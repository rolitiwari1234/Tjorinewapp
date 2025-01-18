import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { responsiveFontSize } from "react-native-responsive-dimensions";


const Section = ({ text1, text2, image }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textview}>
        <Text style={styles.toptext}>{text1}</Text>
        <Text style={styles.textstyle}>{text2}</Text>
      </View>
      <View style={styles.imgview}>
        <Image source={image} style={styles.img} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical:20,

  },
  textview: {
    justifyContent: "center",
    alignItems: "center",
  },
  toptext: {
    color: "#065534",
    fontFamily: "PlayfairDisplay-Regular",
    fontSize: responsiveFontSize(4),
  },
  textstyle: {
    color: "2B2B2B",
    fontSize: 12,
  },
  imgview: {
    justifyContent: "center",
  },
  img: {
    height: 382,
    borderRadius: 4,
    padding: 16,
  },
});

export default Section;
