import { Text, View } from "react-native";
import Constants from "expo-constants";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes, Navigate } from "react-router-native";
import Login from "../pages/Login";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </View>
  );
};

export default Main;
