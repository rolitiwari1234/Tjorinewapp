import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "../../../Src/Screens/Homescreen/Homepage";
import Categorieslogo from "../../../Src/Screens/Categoriesitem/Categorieslogo";
import CategoriesData from "../../../Src/Screens/CategoriesData";
import Categoriesbanner from "../../../Src/Screens/Categoriesitem/Categoriesbanner";
import Plppage from "../../../Src/Screens/Plppage";
import Pdppage from "../../../Src/Screens/PlpScreen/Pdppage";


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
