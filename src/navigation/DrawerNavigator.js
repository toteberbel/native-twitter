import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";
import BottomTabNavigator from "./BottomTabNavigator";
import { routes, screens } from "./RouteItems";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const currentRouteName = props.nav()?.getCurrentRoute()?.name;
  return (
    <DrawerContentScrollView {...props}>
      {routes
        .filter((route) => route.showInDrawer)
        .map((route) => {
          const focusedRoute = routes.find((r) => r.name === currentRouteName);

          const focused = focusedRoute
            ? route.name === focusedRoute?.focusedRoute
            : route.name === screens.FeedStack;

          return (
            <DrawerItem
              key={route.name}
              label={() => (
                <Text
                  style={
                    focused ? styles.drawerLabelFocused : styles.drawerLabel
                  }
                >
                  {route.title}
                </Text>
              )}
              onPress={() => props.navigation.navigate(route.name)}
              style={[
                styles.drawerItem,
                focused ? styles.drawerItemFocused : null,
              ]}
            />
          );
        })}
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = ({ nav }) => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#fff",
          height: 50,
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.headerLeft}
          >
            <Icon name="bars" size={20} color="gray" />
          </TouchableOpacity>
        ),
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} nav={nav} />}
    >
      <Drawer.Screen
        name={screens.MyFeed}
        component={BottomTabNavigator}
        options={{
          headerTitle: () => (
            <Image
              style={styles.headerLogo}
              source={require("../../assets/twitter-logo.png")}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerLogo: {
    height: 25,
    width: 30,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
  },
  drawerItem: {
    height: 50,
    justifyContent: "center",
  },
  drawerItemFocused: {
    backgroundColor: "#6bbef2",
  },
});

export default DrawerNavigator;
