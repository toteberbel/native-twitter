import { Text, Button, View, TextInput } from "react-native";
import { Formik, useFormik } from "formik";
import StyledTextInput from "../components/StyledTextInput";
import { loginValidationSchema } from "../validationSchemas/login";
import FormikInputValue from "../components/FormikInputValue";

const Login = () => {
  const initialValues = { email: "", password: "" };

  const onSubmit = (values) => {
    console.log(values);
  };

  const { values, handleChange, handleSubmit, errors, getFieldMeta } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema: loginValidationSchema,
    });

  const { email, password } = values;

  return (
    <View style={{ padding: 10 }}>
      <Formik>
        <>
          <FormikInputValue
            placeholder="email"
            onChange={handleChange("email")}
            value={email}
            error={errors.email}
          />
          <FormikInputValue
            secureTextEntry
            error={errors.password}
            placeholder="password"
            value={password}
            meta={getFieldMeta("password")}
          />
          <Button onPress={handleSubmit} title="Log in" />
        </>
      </Formik>
    </View>
  );
};

export default Login;
