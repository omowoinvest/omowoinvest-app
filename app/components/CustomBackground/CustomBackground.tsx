import React from "react";
import {
  ImageBackground as DefaultImageBackground,
  StyleSheet,
  View,
} from "react-native";

type ImageBackgroundProps = DefaultImageBackground["props"] & {
    children: React.ReactNode;
};
  
export const CustomBackground = (props: ImageBackgroundProps)=> {
    return <DefaultImageBackground {...props} />;
};

export default CustomBackground;