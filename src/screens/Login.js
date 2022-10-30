import { useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { ActivityIndicator } from "react-native";
import {
  ButtonSecondary,
  StyledText,
  StyledTextInput,
} from "../components/shared";
import theme from "../theme";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation }) => {
  const auth = getAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (name, value) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const formIsValid = () => {
    let validationErrors = {};

    if (!email.trim())
      validationErrors = { ...validationErrors, email: "Email is required" };

    if (!password.trim())
      validationErrors = {
        ...validationErrors,
        password: "Password is required",
      };

    setErrors(validationErrors);

    return !Object.keys(validationErrors).length;
  };

  const onLogin = async () => {
    if (!formIsValid()) return;

    setLoading(true);

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.error(error);
      const errorMsg = error.toString();

      errorMsg.includes("user-not-found") ||
      errorMsg.includes("wrong-password")
        ? setErrors({ server: "The username or the password are invalid" })
        : setErrors({ server: "Something went wrong. Please try again later" });
    }

    setLoading(false);
  };

  const { email, password } = credentials;

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
          Glad to see you again!
        </StyledText>

        <View style={styles.form}>
          <StyledTextInput
            placeholder="Enter your email"
            onChangeText={(e) => onChange("email", e)}
            label="Email"
            type="email-address"
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

        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <StyledText style={styles.signupLink} color={"primary"}>
            Don't have an account yet? Create one
          </StyledText>
        </TouchableOpacity>

        <View style={{ marginVertical: 10 }}>
          {loading ? (
            <View style={{ justifyContent: "center", marginTop: 15 }}>
              <ActivityIndicator size={40} color={theme.colors.blue} />
            </View>
          ) : (
            <ButtonSecondary
              onPress={onLogin}
              title="Log in"
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

export default Login;
