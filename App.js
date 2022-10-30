import "react-native-gesture-handler";
import React, { createRef, useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import UnauthStack from "./src/navigation/unauth-navigator";
import { useAuthentication } from "./src/hooks/useAuthentication";
import { signOut } from "firebase/auth";
import { LogBox } from "react-native";

const navigationRef = createRef();
const nav = () => navigationRef.current;

const App = () => {
  LogBox.ignoreLogs([
    "Warning: Async Storage has been extracted from react-native core",
  ]);

  const { isAuthenticated } = useAuthentication();

  const [loaded] = useFonts({
    Chirp: require("./assets/fonts/Chirp.otf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light" />
      <NavigationContainer ref={navigationRef}>
        {isAuthenticated ? <DrawerNavigator nav={nav} /> : <UnauthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: "hidden",
  },
});

export default App;
