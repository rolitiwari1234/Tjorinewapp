import { SafeAreaView, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import Headerpage from "../../../src/component/Headerpage";
import Svg, { Path } from "react-native-svg";

const Header = (props) => {
  const [fontsLoaded] = useFonts({
    "PlayfairDisplay-Regular": require("../../../assets/fonts/PlayfairDisplay-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }
  return (
    <SafeAreaView>
      <Headerpage
        text={"Apprael"}
        icon={
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={18}
            fill="none"
            {...props}
          >
            <Path
              fill="#34302B"
              fillRule="evenodd"
              d="M10 8c3.806 0 7.115 2.232 8.805 5.518C19.567 15 20 16.157 20 17.96H0c0-1.818.44-2.989 1.214-4.48C2.91 10.216 6.208 8 10 8Z"
              clipRule="evenodd"
            />
            <Path
              fill="#770806"
              fillRule="evenodd"
              d="M17.5 13a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
              clipRule="evenodd"
            />
          </Svg>
        }
      />
    </SafeAreaView>
  );
};

export default Header;
