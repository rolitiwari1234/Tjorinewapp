import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Colors from "../Utils/Colors";

const Productwidget = ({
  image1,
  imgtext1,
  numtext1,
  pertext1,
  image2,
  imgtext2,
  numtext2,
  pertext2,
  image3,
  imgtext3,
  numtext3,
  pertext3,
}) => {
  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.imageview}>
            <View style={{ width: 146, height: 280 }}>
              <Image source={image1} style={styles.imgview} />
              <View style={styles.nosepinview}>
                <Text>{imgtext1}</Text>
              </View>
              <View style={styles.numview}>
                <Text style={styles.numtext}>{numtext1} </Text>
                <Text style={styles.pertext}>{pertext1}</Text>
              </View>
            </View>
            <View style={{ width: 146, height: 280 }}>
              <Image source={image2} style={styles.imgview} />
              <View style={styles.nosepinview}>
                <Text>{imgtext2}</Text>
              </View>
              <View style={styles.numview}>
                <Text style={styles.numtext}>{numtext2} </Text>
                <Text style={styles.pertext}>{pertext2}</Text>
              </View>
            </View>
            <View style={{ width: 146, height: 280 }}>
              <Image
                source={image3}
                style={{ width: 146, height: 215, borderRadius: 4 }}
              />

              <View style={styles.nosepinview}>
                <Text>{imgtext3}</Text>
              </View>
              <View style={styles.numview}>
                <Text style={styles.numtext}>{numtext3} </Text>
                <Text style={styles.pertext}>{pertext3}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.lineview}></View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageview: {
    flexDirection: "row",
    gap: 10,
  },
  imgview: {
    width: 146,
    height: 215,
    borderRadius: 4,
  },
  nosepinview: {
    width: 141,
    height: 36,
    marginVertical: 5,
  },
  numview: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  numtext: {
    color: "#2B2B2B",
    fontSize: 16,
    fontWeight: "bold",
  },
  pertext: {
    color:Colors.RED,
  },
  lineview: {
    // height: 1,
    borderBottomWidth:.2,
    backgroundColor: Colors.LIGHT_GRAY,
    marginVertical: 20,
    marginHorizontal: 10,
  },
});
export default Productwidget;
