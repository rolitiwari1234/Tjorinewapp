import { View, StatusBar, ScrollView } from "react-native";
import React from "react";
import Showlogo from "../../../Src/Screens/Homescreen/Showlogo";
import Header from "../../../Src/Screens/Homescreen/Header";
import Topbanner2 from "../../../Src/Screens/Homescreen/Topbanner2";

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
