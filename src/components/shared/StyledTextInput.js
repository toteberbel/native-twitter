import { TextInput, StyleSheet, View } from "react-native";
import StyledText from "./StyledText";

const StyledTextInput = ({
  multiline = false,
  numberOfLines,
  placeholder = "",
  label,
  style = {},
  isPassword = false,
  type = "default",
  ...props
}) => {
  const inputStyles = { ...styles.textInput, ...style };
  return (
    <View>
      {label && <StyledText> {label} </StyledText>}
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        style={inputStyles}
        secureTextEntry={isPassword}
        keyboardType={type}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    textAlignVertical: "top",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingTop: 9,
    paddingBottom: 3,
    borderColor: "#c2c3c4",
    marginVertical: 5,
  },
});

export default StyledTextInput;
