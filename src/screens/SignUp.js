import { useState } from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
import { ActivityIndicator } from "react-native";
import {
  ButtonSecondary,
  StyledText,
  StyledTextInput,
} from "../components/shared";
import { createAccount } from "../services";
import theme from "../theme";

const SignUp = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (name, value) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const formIsValid = () => {
    let validationErrors = {};

    if (!email.trim())
      validationErrors = { ...validationErrors, email: "Email is required" };

    if (!/^\S+@\S+\.\S+$/.test(email))
      validationErrors = {
        ...validationErrors,
        email: "You must enter a valid email",
      };

    if (!password.trim())
      validationErrors = {
        ...validationErrors,
        password: "Password is required",
      };

    if (password.length < 6)
      validationErrors = {
        ...validationErrors,
        password: "Password should be at least 6 characters",
      };

    if (!confirmPassword.trim())
      validationErrors = {
        ...validationErrors,
        password: "You must confirm your password",
      };

    if (confirmPassword !== password)
      validationErrors = {
        ...validationErrors,
        confirmPassword: "Passwords do not match",
      };

    setErrors(validationErrors);

    return !Object.keys(validationErrors).length;
  };

  const onSignin = async () => {
    if (!formIsValid()) return;

    setLoading(true);

    const { error } = await createAccount({ email, password });

    setLoading(false);

    if (error)
      setErrors({ server: "Something went wrong. Please try again later" });

    // navigation.navigate("Login");
  };

  const { email, password, confirmPassword } = credentials;

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: theme.colors.blue,
      }}
    >
      <View style={styles.card}>
        <View style={styles.logo}>
          <Image
            style={styles.image}
            source={require("../../assets/twitter-logo.png")}
          />
        </View>

        <StyledText style={styles.title} color="primary" fontWeight="bold">
          Be part of the Twitter family
        </StyledText>

        <View style={styles.form}>
          <StyledTextInput
            placeholder="Enter your email"
            onChangeText={(e) => onChange("email", e)}
            label="Email"
            type={"email-address"}
          />
          {errors.email && (
            <View style={{ alignItems: "center", marginVertical: 5 }}>
              <StyledText customColor="red">{errors.email}</StyledText>
            </View>
          )}
        </View>

        <View style={styles.form}>
          <StyledTextInput
            placeholder="Enter your password"
            onChangeText={(e) => onChange("password", e)}
            label="Password"
            isPassword
          />
          {errors.password && (
            <View style={{ alignItems: "center", marginVertical: 5 }}>
              <StyledText customColor="red">{errors.password}</StyledText>
            </View>
          )}
        </View>

        <View style={styles.form}>
          <StyledTextInput
            placeholder="Confirm password"
            onChangeText={(e) => onChange("confirmPassword", e)}
            label="Confirm password"
            isPassword
          />
          {errors.confirmPassword && (
            <View style={{ alignItems: "center", marginVertical: 5 }}>
              <StyledText customColor="red">
                {errors.confirmPassword}
              </StyledText>
            </View>
          )}
        </View>

        <View style={{ marginVertical: 10 }}>
          {loading ? (
            <View style={{ justifyContent: "center", marginTop: 15 }}>
              <ActivityIndicator size={40} color={theme.colors.blue} />
            </View>
          ) : (
            <ButtonSecondary
              onPress={onSignin}
              title="Sign up"
              isDisabled={!email && !password}
            />
          )}
        </View>

        {errors.server && (
          <View style={{ alignItems: "center", marginVertical: 5 }}>
            <StyledText customColor="red">{errors.server}</StyledText>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    minWidth: Dimensions.get("window").width / 1.2,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 20,
  },
  form: {
    marginBottom: 10,
  },
  logo: {
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 35,
    height: 30,
  },
  signupLink: {
    textAlign: "center",
    fontSize: 12,
    textDecorationLine: "underline",
    marginVertical: 10,
  },
});

export default SignUp;
