import { View } from "react-native";
import React from "react";
import Headerpage from "../../../src/component/Headerpage";
import Svg, { Path } from "react-native-svg";
const Header = ({ props }) => {
  return (
    <View>
      <Headerpage
        text={"tjori"}
        icon={
          <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={10}
          fill="none"
          {...props}
        >
          <Path
            fill="#34302B"
            fillRule="evenodd"
            d="M10 0c3.806 0 7.115 2.232 8.805 5.517C19.567 7 20 8.157 20 9.961H0c0-1.818.44-2.989 1.214-4.48C2.91 2.216 6.208 0 10 0Z"
            clipRule="evenodd"
          />
        </Svg>
        }
      />
    </View>
  );
};

export default Header;


