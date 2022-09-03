import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import theme from "../../theme";
import StyledText from "./StyledText";
import { AntDesign } from "@expo/vector-icons";
import { getFormattedDate } from "../../utils/time";

const Post = ({
  post: {
    item: { id, image, likesCount, sharesCount, text, user = {} },
  },
}) => {
  const onLike = (id) => console.log(id);

  return (
    <View key={id} style={styles.container}>
      <View style={styles.postCard}>
        <View style={styles.postHeader}>
          <View style={{ marginRight: 5 }}>
            <Image style={styles.image} source={{ uri: user.avatar }} />
          </View>
          <View>
            <StyledText
              color="primary"
              fontWeight="bold"
              style={{ marginRight: 5 }}
            >
              {user.name}
            </StyledText>
            <StyledText customColor="#b8baba">{user.username}</StyledText>
          </View>
        </View>

        <View style={styles.postBody}>
          <StyledText>{text}</StyledText>
        </View>

        <View style={styles.date}>
          <StyledText customColor="#b8baba">
            {getFormattedDate(new Date())}
          </StyledText>
        </View>

        <View style={styles.postActions}>
          <TouchableOpacity onPress={() => onLike(id)} style={styles.counter}>
            <AntDesign name="hearto" size={17} color="#9c9c9c" />
            <StyledText customColor="#9c9c9c"> {likesCount} </StyledText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.counter}>
            <AntDesign name="retweet" size={17} color="#9c9c9c" />
            <StyledText customColor="#9c9c9c"> {sharesCount} </StyledText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.counter}>
            <AntDesign name="message1" size={17} color="#9c9c9c" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 25,
    justifyContent: "center",
    marginVertical: 5,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  postBody: {
    marginTop: 7,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 7,
  },
  postCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    flex: 1,
    padding: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  date: {
    marginVertical: 5,
  },
  counter: {
    flexDirection: "row",
  },
});

export default Post;
