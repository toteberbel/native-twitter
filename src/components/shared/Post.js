import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import theme from "../../theme";
import StyledText from "./StyledText";
import { AntDesign } from "@expo/vector-icons";
import { getFormattedDate } from "../../utils/time";
import noProfileImage from "../../../assets/no-image.jpg";

const Post = ({
  post: { id, date, text, likesCount, commentsCount, sharedCount, user },
  onLike,
  bordered,
}) => {
  return (
    <View key={id} style={styles.container}>
      <View style={[styles.postCard, bordered && styles.bordered]}>
        <View style={styles.postHeader}>
          <View style={{ marginRight: 5 }}>
            <Image
              style={styles.image}
              source={user.avatar ? { uri: user.avatar } : noProfileImage}
            />
          </View>
          <View>
            <StyledText
              color="primary"
              fontWeight="bold"
              style={{ marginRight: 5 }}
            >
              {user.name}
            </StyledText>
            <StyledText customColor="#b8baba">@{user.username}</StyledText>
          </View>
        </View>

        <View style={styles.postBody}>
          <StyledText>{text}</StyledText>
        </View>

        <View style={styles.date}>
          <StyledText customColor="#b8baba">
            {getFormattedDate(date)}
          </StyledText>
        </View>

        <View style={styles.postActions}>
          <TouchableOpacity onPress={() => onLike(id)} style={styles.counter}>
            <AntDesign name="hearto" size={17} color="#9c9c9c" />
            <StyledText customColor="#9c9c9c"> {likesCount || 0} </StyledText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.counter}>
            <AntDesign name="retweet" size={17} color="#9c9c9c" />
            <StyledText customColor="#9c9c9c"> {sharedCount || 0} </StyledText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.counter}>
            <AntDesign name="message1" size={17} color="#9c9c9c" />
            <StyledText customColor="#9c9c9c" style={{ marginLeft: 4 }}>
              {commentsCount || 0}
            </StyledText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    marginVertical: 7,
    paddingLeft: 63,
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
    padding: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  bordered: {
    borderWidth: 2,
    borderColor: theme.colors.blue,
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  date: {
    marginTop: 2,
    marginBottom: 5,
    paddingLeft: 63,
  },
  counter: {
    flexDirection: "row",
  },
});

export default Post;
