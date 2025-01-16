import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Categoriesdata from "../../Data/Categoriesdata";
import { useNavigation } from "@react-navigation/native";

const Categorieslogo = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <FlatList
        data={Categoriesdata}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('Plppage')}>
            <View style={styles.dataview} >
              <Image source={item.catlogo} style={styles.img} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  dataview: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 105,
    height: 75,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  title: {
    marginVertical: 8,
    fontSize: 16,
  },
});

export default Categorieslogo;
