import { View, ScrollView } from "react-native";
import React from "react";
import Header from "../../Src/Screens/PlpScreen/Header";
import Topbanner from "../../Src/Screens/PlpScreen/Topbanner";
import Plpitem from "../../Src/Screens/PlpScreen/Plpitem";

const Plppage = () => {
  return (
    <View>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Topbanner />
        <Plpitem />
      </ScrollView>
    </View>
  );
};

export default Plppage;
