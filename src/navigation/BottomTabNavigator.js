import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet, View } from "react-native";

import { routes, screens } from "./RouteItems";

import { Feed, MyFeed, WritePost } from "../screens";

const Tab = createBottomTabNavigator();

const tabOptions = ({ route }) => {
  const item = routes.find((routeItem) => routeItem.name === route.name);

  if (!item.showInTab) {
    return {
      tabBarButton: () => <View style={{ width: 0 }} />,
      headerShown: false,
      tabBarStyle: styles.tabContainer,
      title: item.title,
      tabBarShowLabel: false,
    };
  }

  return {
    tabBarIcon: (props) => item.icon(props),
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item.title,
    tabBarShowLabel: false,
    tabBarActiveTintColor: "#1DA1F2",
    topBarInactiveTintColor: "gray",
  };
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen name={screens.FeedStack} component={Feed} />
      <Tab.Screen name={screens.WritePostStack} component={WritePost} />
      <Tab.Screen name={screens.MyFeedStack} component={MyFeed} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    position: "absolute",
    bottom: 15,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 60,
  },
});

export default BottomTabNavigator;
