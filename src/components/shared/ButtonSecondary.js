import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import theme from "../../theme";

export default function ButtonSecondary(props) {
  const { onPress, title = "Save", isDisabled } = props;

  const getBgColor = (isPressed) => {
    let bgColor = isDisabled ? theme.colors.disabled : "#fff";

    if (isPressed) {
      bgColor = theme.colors.blue;
    }

    return {
      backgroundColor: bgColor,
      borderColor: isDisabled ? theme.colors.disabled : theme.colors.blue,
    };
  };

  const getTextColor = (isPressed) => {
    let color = isDisabled ? theme.colors.disabled : theme.colors.blue;
    if (isPressed) {
      color = "#fff";
    }

    return { color };
  };

  return (
    <Pressable
      disabled={isDisabled}
      style={({ pressed }) => [styles.button, getBgColor(pressed)]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          { color: isDisabled ? "#9c9c9c" : theme.colors.blue },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderWidth: 2,
    borderRadius: 4,
    elevation: 3,
    borderColor: theme.colors.blue,
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
});
