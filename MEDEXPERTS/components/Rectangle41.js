import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const RectangleComponent1 = ({ style }) => {
  return <View style={[styles.rectangleView, style]} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: Color.whitesmoke_100,
    width: 274,
    height: 2,
  },
});

export default RectangleComponent1;
