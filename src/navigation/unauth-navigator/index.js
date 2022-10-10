import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import { createStackNavigator } from "@react-navigation/stack";
import theme from "../../theme";
const Stack = createStackNavigator();

const UnauthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.blue },
      }}
    >
      <Stack.Screen
        options={{
          title: "Log in",
          headerTintColor: "#fff",
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{
          title: "Sign in",
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};

export default UnauthStack;
