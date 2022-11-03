import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
import theme from "../theme";
import { Post, StyledText, StyledTextInput } from "../components/shared";
import { getCommentsByPost, postComment } from "../services";
import { FontAwesome } from "@expo/vector-icons";
import { useAuthentication } from "../hooks/useAuthentication";

const Tweet = ({ navigation, route }) => {
  const { user } = useAuthentication();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [comments, setComments] = useState([]);

  const [comment, setComment] = useState("");

  const post = route.params;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const { error, data } = await getCommentsByPost(post.id);
    setLoading(false);

    if (error) return;
    setComments(data);
  };

  const onLike = (id) => console.log(id);

  const onComment = () => {
    setErrors(false);
    if (!comment.trim()) setErrors(true);

    const payload = {
      user,
      date: new Date().getTime(),
      text: comment,
    };

    const { error } = postComment(post.id, payload);

    if (!error) getData();
  };

  return (
    <View style={styles.commentContainer}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center", marginTop: 100 }}>
          <ActivityIndicator size={100} color={theme.colors.blue} />
        </View>
      ) : (
        <>
          <View style={styles.tweet}>
            <Post post={post} onLike={onLike} />
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={styles.line}></View>
          </View>
          <View style={styles.commentCard}>
            <StyledText
              fontWeight="bold"
              style={{
                fontSize: 15,
                marginBottom: 5,
              }}
            >
              Comment something
            </StyledText>
            <View style={styles.input}>
              <StyledTextInput
                onChangeText={setComment}
                multiline
                numberOfLines={6}
              />
            </View>
            {errors && (
              <View style={{ alignItems: "center", marginVertical: 5 }}>
                <StyledText customColor="red">
                  Please, type something
                </StyledText>
              </View>
            )}
            <TouchableOpacity onPress={onComment}>
              <View style={styles.button}>
                <FontAwesome name="paper-plane" size={24} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    // flex: 1,
    padding: 20,
  },
  tweet: {
    // marginBottom: 10,
  },
  line: {
    width: 3,
    height: 25,
    backgroundColor: "#ccc",
  },
  commentCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    // alignItems: "center",

    padding: 25,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 5,
  },
  button: {
    backgroundColor: theme.colors.blue,
    paddingVertical: 12,
    paddingLeft: 10,
    marginLeft: 10,
    marginTop: 10,
    paddingRight: 15,
    borderRadius: 100,
    alignItems: "center",
  },
  input: {
    alignSelf: "stretch",
    textAlign: "center",
  },
});

export default Tweet;
