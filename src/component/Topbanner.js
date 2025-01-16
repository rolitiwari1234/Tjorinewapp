import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react"

const { height, width } = Dimensions.get("window");

const Topbanner = ({
  img,
  text,
  midtext,
  bottext,
  para,
  buttonimg,
  buttext,
}) => {
  const [data, SetData] = useState([1, 1, 1, 1]);

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={data}
          horizontal
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={() => {
            return (
              <View>
                <Image source={img} style={styles.img} />

                <View style={styles.imgtext}>
                  <View style={styles.textview}>
                    <Text style={styles.bazaartext}>{text}</Text>
                    <Text style={[styles.bazaartext]}>{midtext}</Text>

                    <Text style={styles.bazaartext}>{bottext}</Text>
                  </View>
                  <View style={styles.textview2}>
                    <Text style={styles.secondtext}>{para}</Text>
                  </View>
                  <View style={styles.buttonview}>
                    <Image
                      source={buttonimg}
                      style={{ width: 91.6, height: 32 }}
                    />
                    <Text style={styles.buttontext}>{buttext}</Text>
                  </View>
                </View>
                <View style={styles.dots}>
                  {data.map((data, index) => {
                    return (
                      <View
                        key={index + data}
                        style={{
                          width: currentIndex == index ? 10 : 8,
                          height: currentIndex == index ? 10 : 8,
                          borderRadius: currentIndex == index ? 5 : 4,
                          backgroundColor:
                            currentIndex == index ? "white" : "grey",
                          marginLeft: 5,
                        }}
                      ></View>
                    );
                  })}
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 272,
    width: width,

    paddingHorizontal: 16,
    borderRadius: 4,
  },
  imgtext: {
    position: "absolute",
    alignItems: "left",
    left: "50%",
    top: 30,
  },
  textview: {
    width: 110,
    height: 100,
  },
  bazaartext: {
    width: 110,
    height: 30,
    color: "#fff",
    fontSize: 24,
    fontFamily: "PlayfairDisplay-Regular",
    shadowOpacity: 0.2,
    shadowColor: "#000",
    shadowRadius: 3.05,
  },
  textview2: {
    width: 168,
  },
  secondtext: {
    color: "#8A8988",
    fontSize: 13,
    textAlign: "left",
  },
  buttonview: {
    width: 100,
    left: 60,
    top: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    fontSize: 16,
    color: "#2B2B2B",
    position: "absolute",
    fontFamily: "PlayfairDisplay-Regular",
  },
  dots: {
    flexDirection: "row",
    position: "absolute",
    width: width,
    top: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Topbanner;
