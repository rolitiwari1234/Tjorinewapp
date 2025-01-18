import { View, ScrollView } from "react-native";
import React from "react";
import Header from "../../src/screens/PlpScreen/Header";
import Topbanner from "../../src/screens/PlpScreen/Topbanner";
import Plpitem from "../../src/screens/PlpScreen/Plpitem";

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
