import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";
import { View } from "react-native";

const WritePostTab = () => {
  return (
    <View
      style={{
        backgroundColor: "#1DA1F2",
        borderRadius: 100,
        padding: 10,
        height: 60,
        width: 60,
        position: "absolute",
        top: -15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AntDesign name="twitter" size={30} color={"#fff"} />
    </View>
  );
};

export default WritePostTab;
