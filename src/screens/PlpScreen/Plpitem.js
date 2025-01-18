import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Plpdata from "../../../src/data/Plpdata";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import { useFonts } from "expo-font";
import {
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";



const Plpitem = ({ props }) => {

  const [fontsLoaded] = useFonts({
    "PlayfairDisplay-Regular": require("../../../assets/fonts/PlayfairDisplay-Regular.ttf")
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topview}>
        <View>
          <Text>13 Products</Text>
        </View>
        <View>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={14}
            height={14}
            fill="none"
            {...props}
          >
            <Path
              fill="#2B2B2B"
              fillRule="evenodd"
              d="M12.5 0c.417 0 .77.146 1.063.438.291.291.437.645.437 1.062v7c0 .417-.146.77-.438 1.063A1.447 1.447 0 0 1 12.5 10h-11c-.417 0-.77-.146-1.063-.438A1.447 1.447 0 0 1 0 8.5v-7C0 1.083.146.73.438.437A1.447 1.447 0 0 1 1.5 0h11Zm-.188 8.5c.042 0 .084-.02.126-.063.041-.041.062-.083.062-.124V1.686c0-.041-.02-.083-.063-.125-.041-.041-.083-.062-.124-.062H1.687c-.041 0-.083.02-.125.063-.041.041-.062.083-.062.125v6.625c0 .041.02.083.063.124.041.042.083.063.125.063h10.624ZM12.625 14H1.375a.34.34 0 0 1-.266-.125.445.445 0 0 1-.109-.304V12.43c0-.12.036-.22.11-.304A.34.34 0 0 1 1.374 12h11.25a.34.34 0 0 1 .266.125c.072.083.109.184.109.304v1.142c0 .12-.037.22-.11.304a.34.34 0 0 1-.265.125Z"
              clipRule="evenodd"
            />
          </Svg>
        </View>
      </View>

      <FlatList
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={Plpdata}
        numColumns={2}
        pagingEnabled={false}
        renderItem={({ item, index }) => {
          return (
            <View key={index} style={styles.itemview}>
              <View style={styles.imgview}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Pdppage", {
                      id: item.id,
                    })
                  }
                >
                  <View
                    style={{
                      marginHorizontal: 3,
                      width: responsiveWidth(),
                    }}
                  >
                    <Image source={item.image} style={styles.img} />
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />

      <TouchableOpacity onPress={() => setVisible(true)}>
        <View
          style={{
            top: "60%",
            justifyContent: "center",
            alignItems: "center",
            bottom: 300,
          }}
        >
          <Image source={require("../../../assets/images/Fillbutton.png")} />
          <Text style={styles.filterbtn}>Filter</Text>
        </View>
      </TouchableOpacity>
      <Modal
        style={styles.modalstyle}
        isVisible={visible}
        animationIn={"slideInUp"}
        onBackdropPress={() => {
          setVisible(false);
        }}
      >
        <View style={styles.modalview}>
          <Text style={styles.text}>Sort By</Text>
          <Text style={styles.text}>Category</Text>
          <Text style={styles.text}>Size</Text>
          <Text style={styles.text}>Colour</Text>
          <Text style={styles.text}>Price</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  topview: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  itemview: {},
  imgview: {
    height: 343,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: responsiveWidth(),
    height: 264,
    borderRadius: 4,
  },
  title: {
    color: "#000",
    width: 157,
    height: 36,
    marginHorizontal: 5,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  filterbtn: {
    textAlign: "center",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    fontSize: responsiveFontSize(2),
  },
  modalview: {
    width: "90%",
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    elevation: 0.8,
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center"
  },
  modalstyle: {
    justifyContent: "flex-end",
  },

  text: {
    fontSize: 18,
    padding: 8,
    fontFamily:"PlayfairDisplay-Regular"
  },
  sorttext: {
    fontSize: 14,
    color: "#C0B394"
  },
});

export default Plpitem;
