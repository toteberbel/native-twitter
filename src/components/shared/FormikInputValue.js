import StyledTextInput from "./StyledTextInput";
import StyledText from "./StyledText";
import { useEffect } from "react";

const FormikInputValue = ({ onChange, value, error, ...props }) => {
  return (
    <>
      <StyledTextInput value={value} onChangeText={onChange} {...props} />
      {error && <StyledText style={{ color: "red" }}> {error} </StyledText>}
    </>
  );
};

export default FormikInputValue;
