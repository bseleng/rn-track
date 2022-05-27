import React, { ReactElement } from "react";
import { View } from "react-native";
import { CssFourSides } from "../../types/common/styles";

interface IProps {
  cssValues: CssFourSides;
  cssProp: "margin" | "padding";
  children?: ReactElement;
}

const Spacer = ({ cssValues, children, cssProp }: IProps) => {
  const getSpace = () => ({
    [cssProp + "Top"]: cssValues[0],
    [cssProp + "Right"]: cssValues[1],
    [cssProp + "Bottom"]: cssValues[2],
    [cssProp + "Left"]: cssValues[3],
  });

  return <View style={getSpace()}>{children}</View>;
};

export default Spacer;
