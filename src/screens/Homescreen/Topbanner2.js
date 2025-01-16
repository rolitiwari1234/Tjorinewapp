import { StyleSheet, View } from "react-native";
import React from "react";
import Topbanner from "../../../Src/Component/Topbanner";
import Productwidget from "../../../Src/Component/Productwidget";
import Section from "../../../Src/Component/Section";

const Topbanner2 = () => {
  return (
    <View>
      <Topbanner
        img={require("../../../assets/images/Banner/Banner1.png")}
        midtext={"Bazzars of"}
        bottext={"Morocco"}
        para={
          "Inspired by beautiful Moroccan jewellery and handcrafted by the skilled artisans of India."
        }
        buttonimg={require("../../../assets/images/Fillbutton.png")}
        buttext={"Explore"}
      />
      <View style={[styles.Productitem,{marginVertical:20}]}>
        <Productwidget
          image1={require("../../../assets/images/User/user1.png")}
          imgtext1={"Mustard Pure Wool Kani Woven Dress With Kash.."}
          image2={require("../../../assets/images/User/user2.png")}
          imgtext2={"Maroon Pure Wool Kani Woven Skater Dress"}
          image3={require("../../../assets/images/User/user1.png")}
          imgtext3={"Set of 3: Beige kani kurta, shawl & pant"}
        />
      </View>
      <Topbanner
        img={require("../../../assets/images/Banner/Banner2.png")}
        text={"The"}
        midtext={"Mansha"}
        bottext={"Collection"}
        para={" An amalgamation of modal silk and exquisite craftsmanship"}
        buttonimg={require("../../../assets/images/Fillbutton.png")}
        buttext={"Explore"}
      />
      <Section
        text1={"Maharashtrian Reglia"}
        text2={"Traditional Marathi Jewelry"}
        image={require("../../../assets/images/Banner/Banner3.png")}
      />
      <View style={styles.Productitem}>
        <Productwidget
          image1={require("../../../assets/images/User/user3.png")}
          imgtext1={"Leela Maharashtrian Nose Pin"}
          numtext1={"649"}
          pertext1={"(20%)"}
          image2={require("../../../assets/images/User/user4.png")}
          imgtext2={"Tara Maharashtrian Nose Pin"}
          numtext2={"599"}
          pertext2={"(20%)"}
          image3={require("../../../assets/images/User/user3.png")}
          imgtext3={"Suravi Maharashtrian Nose Pin"}
          numtext3={"599"}
          pertext3={"(20%)"}
        />
      </View>
      <Section
        text1={"The Experimental"}
        text2={"Chomuk Mirror Embroidery Suede Mules & Heels"}
        image={require("../../../assets/images/Banner/Banner4.png")}
      />
      <View style={styles.Productitem}>
        <Productwidget
          image1={require("../../../assets/images/User/user5.png")}
          imgtext1={"Brown Chomuk Mirror Embroidery Leather Ku…"}
          numtext1={"2719"}
          pertext1={"(10%)"}
          image2={require("../../../assets/images/User/user6.png")}
          imgtext2={"Onyx Chomuk Mirror Embroidery Leather Ku…"}
          numtext2={"2719"}
          pertext2={"(10%)"}
          image3={require("../../../assets/images/User/user5.png")}
          imgtext3={"Orange Chomuk Mirror Embroidery Suede Kutch Ankle Boots"}
          numtext3={"2719"}
          pertext3={"(10%)"}
        />
      </View>
      <Section
        text1={"The Silk Route"}
        text2={"This festive season, stun with the power of silk"}
        image={require("../../../assets/images/Banner/Banner5.png")}
      />
      <View style={[styles.Productitem,{marginBottom:200}]}>
        <Productwidget
          image1={require("../../../assets/images/User/user7.png")}
          imgtext1={"Set Of 2: Golden Blouse, Off White Brocade Lehen…"}
          numtext1={"9499"}
          pertext1={"(10%)"}
          image2={require("../../../assets/images/User/user8.png")}
          imgtext2={"Set Of 2: Yellow Brocade Kurta And Pallazo"}
          numtext2={"7499"}
          pertext2={"(10%)"}
          image3={require("../../../assets/images/User/user7.png")}
          imgtext3={"Set Of 2:Black Dupion Blouse & Black Brocade Box Pleate…"}
          numtext3={"2719"}
          pertext3={"(10%)"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Productitem: {
    marginHorizontal: 16,
    
  },
});

export default Topbanner2;
