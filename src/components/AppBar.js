import { View, StyleSheet, ScrollView } from "react-native";
import theme from "../theme";
import Constants from "expo-constants";
import StyledText from "./StyledText";
import { Link, useLocation } from "react-router-native";

const AppTabBar = ({ to, children }) => {
  const { pathname } = useLocation();

  const active = pathname === to;

  const tabStyle = [styles.text, active && styles.active];

  return (
    <Link to={to}>
      <StyledText fontWeight={"bold"} style={tabStyle}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppTabBar to="/login">Login</AppTabBar>
        <AppTabBar to="/">Repositories</AppTabBar>
        <AppTabBar to="/signin">Sign in</AppTabBar>
        <AppTabBar to="login">Login</AppTabBar>
        <AppTabBar to="login">Login</AppTabBar>
        <AppTabBar to="login">Login</AppTabBar>
        <AppTabBar to="login">Login</AppTabBar>
      </ScrollView>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  scroll: {
    paddingBottom: 10,
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});
