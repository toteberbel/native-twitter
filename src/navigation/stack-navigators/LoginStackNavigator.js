import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../../screens";
import { screens } from "../RouteItems";

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screens.Login} component={Login} />
    </Stack.Navigator>
  );
};

export default LoginStackNavigator;
