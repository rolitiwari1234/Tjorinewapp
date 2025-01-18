import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "../../../src/screens/Homescreen/Homepage";
import Categorieslogo from "../../../src/screens/Categoriesitem/Categorieslogo";
import CategoriesData from "../../../src/screens/CategoriesData";
import Categoriesbanner from "../../../src/screens/Categoriesitem/Categoriesbanner";
import Plppage from "../../../src/screens/Plppage";
import Pdppage from "../../../src/screens/PlpScreen/Pdppage";


const HomeStack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Homepage" component={Homepage} />
      <HomeStack.Screen name="CategoriesData" component={CategoriesData} />
      <HomeStack.Screen name="Categorieslogo" component={Categorieslogo} />
      <HomeStack.Screen name="Categoriesbanner" component={Categoriesbanner} />
      <HomeStack.Screen name="Plppage" component={Plppage} />
      <HomeStack.Screen name="Pdppage" component={Pdppage} />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
