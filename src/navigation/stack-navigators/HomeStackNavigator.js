import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Feed } from "../../screens";
import { screens } from "../RouteItems";

const Stack = createStackNavigator();

const FeedStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screens.Feed} component={Feed} />
    </Stack.Navigator>
  );
};

export default FeedStackNavigator;
