import { View, ScrollView } from "react-native";
import React from "react";
import Header from "./Categoriesitem/Header";
import Categorieslogo from "./Categoriesitem/Categorieslogo";
import Categoriesbanner from "./Categoriesitem/Categoriesbanner";


const CategoriesData = () => {
  return (
    <View>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categorieslogo />
        <Categoriesbanner />
      </ScrollView>
    </View>
  );
};

export default CategoriesData;
