import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Feed, Tweet } from "../../screens";
import { screens } from "../RouteItems";
import theme from "../../theme";

const Stack = createStackNavigator();

const FeedStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={screens.Feed}
        component={Feed}
      />
      <Stack.Screen
        options={{
          headerTintColor: theme.colors.blue,
        }}
        name={"Tweet"}
        component={Tweet}
      />
    </Stack.Navigator>
  );
};

export default FeedStackNavigator;
