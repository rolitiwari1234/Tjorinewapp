import { StyleSheet, TouchableOpacity, View } from "react-native";
import React  from "react";
import Topbanner from "../../../src/component/Topbanner"
import Section from "@/src/component/Section";
import Productwidget from "@/src/component/Productwidget";
import { useNavigation } from "@react-navigation/native";

const Categoriesbanner = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Topbanner
        img={require("../../../assets/images/Banner/Banner6.png")}
        text={"The "}
        midtext={"Bold"}
        bottext={"Bhujodi"}
        para={" An amalgamation of modal silk and exquisite craftsmanship"}
        buttonimg={require("../../../assets/images/Fillbutton.png")}
        buttext={"Explore"}
      />
       <TouchableOpacity onPress={()=>navigation.navigate('Plppage')}>
      <View >
      <Section
        text1={"The Blouse Diaries"}
        text2={"Blouses for every reason and season"}
        image={require("../../../assets/images/Banner/Banner7.png")}
      />
      </View>
      </TouchableOpacity>
      <View style={styles.productitem} >
      <Productwidget
        image1={require("../../../assets/images/Plp1.png")}
        imgtext1={"Raw Silk And Gajji Silk Ajrakh Printed Blouse"}
        image2={require("../../../assets/images/Plp2.png")}
        imgtext2={"Green Modal Silk Ajrakh Blouse"}
        image3={require("../../../assets/images/Plp1.png")}
        imgtext3={"Orange Kutch Embroidered Modal Silk Blouse"}
      />
      </View>
      <Section
        text1={"Kanisa"}
        text2={"Beautiful Kani Woven Pure Wool Apparel"}
        image={require("../../../assets/images/Banner/Banner8.png")}
      />
      <View  style={styles.productitem}>
      <Productwidget
        image1={require("../../../assets/images/Kurti1.png")}
        imgtext1={"Autumn Kani Woven Pure Wool Shawl"}
        image2={require("../../../assets/images/Kurti2.png")}
        imgtext2={"Off White 120-Count Pure Wool Thread Embroider…"}
        numtext2={"3499"}
        pertext2={"(10%)"}
        image3={require("../../../assets/images/Kurti1.png")}
        imgtext3={"Off White Pure Wool Shawl With Parsi Gara Embroide…"}
      />
      </View>
      <Section
        text1={"New Arrivals"}
        text2={"This festive season, stun with the power of silk."}
        image={require("../../../assets/images/Banner/Banner9.png")}
      />
      <View style={styles.productitem}>
      <Productwidget
        image1={require("../../../assets/images/Kurti4.png")}
        imgtext1={"Autumn Kani Woven Pure Wool Shawl"}
        image2={require("../../../assets/images/Kurti3.png")}
        imgtext2={"Set Of 3: Green Chenille Kurta, Purple Chanderi P…"}
        image3={require("../../../assets/images/Kurti2.png")}
        imgtext3={"Off White Pure Wool Shawl With Parsi Gara Embroide…"}
      />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  productitem:{
    marginHorizontal:16
  }
})

export default Categoriesbanner;
