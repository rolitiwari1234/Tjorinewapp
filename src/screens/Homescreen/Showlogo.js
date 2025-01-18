import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import LogoData from "../../../src/data/LogoData";
import { useNavigation } from "@react-navigation/native";

const Showlogo = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={LogoData}
        renderItem={({ item }) => {
          return (
            <View style={styles.logoview}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CategoriesData")}>
                <Image source={item.logo} style={styles.logoitem} />
                <Text style={styles.logotext}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  logoview: {
    marginHorizontal: 4,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logoitem: {
    width: 73,
    height: 73,
    borderRadius: 50,
  },
  logotext: {
    justifyContent: "center",
  },
});
export default Showlogo;
