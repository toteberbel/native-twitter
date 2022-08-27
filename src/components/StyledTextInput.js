import { TextInput, StyleSheet } from "react-native";

const StyledTextInput = ({ style = {}, ...props }) => {
  const inputStyles = { ...styles.textInput, ...style };
  return <TextInput style={inputStyles} {...props} />;
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#999",
    marginVertical: 5,
  },
});

export default StyledTextInput;
