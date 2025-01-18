import { View, StatusBar, ScrollView } from "react-native";
import React from "react";
import Showlogo from "../../../src/screens/Homescreen/Showlogo";
import Header from "../../../src/screens/Homescreen/Header";
import Topbanner2 from "../../../src/screens/Homescreen/Topbanner2";

const Homepage = () => {
  return (
    <View>
      <StatusBar barStyle={"dark-content"} />
      <Header />
      <Showlogo />
      <ScrollView showsVerticalScrollIndicator={false}>
       <Topbanner2 />
      </ScrollView>
    </View>
  );
};

export default Homepage;
