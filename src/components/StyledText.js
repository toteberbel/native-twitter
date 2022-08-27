import { Text, StyleSheet } from "react-native";
import theme from "../theme.js";

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: "grey",
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  centeredText: {
    textAlign: "center",
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  colorWhite: {
    color: "#fff",
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
});

const StyledText = ({
  color,
  fontSize,
  fontWeight,
  children,
  style,
  textAlign,
  ...restOfProps
}) => {
  const textStyles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    color === "white" && styles.colorWhite,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    textAlign === "center" && styles.centeredText,
    style,
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
};

export default StyledText;
