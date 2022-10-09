import { TextInput, StyleSheet } from "react-native";

const StyledTextInput = ({
  multiline = false,
  numberOfLines,
  style = {},
  ...props
}) => {
  const inputStyles = { ...styles.textInput, ...style };
  return (
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={inputStyles}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    textAlignVertical: "top",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#c2c3c4",
    marginVertical: 5,
  },
});

export default StyledTextInput;
