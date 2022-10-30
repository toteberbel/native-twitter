import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableHighlight,
  Button,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
import theme from "../theme";
import { Post, StyledText, StyledTextInput } from "../components/shared";
import { getCommentsByPost } from "../services";
import { FontAwesome } from "@expo/vector-icons";

const Tweet = ({ navigation, route }) => {
  const [refreshing, setRefreshing] = useState(true);

  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  const [comment, setComment] = useState("");

  const post = route.params;

  useEffect(() => {
    // getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const { error, data } = await getCommentsByPost(route.params.id);
    setLoading(false);
    setRefreshing(false);

    if (error) return;
    setPosts(data);
  };

  const onLike = (id) => console.log(id);

  const onComment = (id) => {};

  return (
    <View style={styles.commentContainer}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size={100} color={theme.colors.blue} />
        </View>
      ) : (
        <>
          <View style={{ flex: 1 }}>
            <Post post={post} onLike={onLike} />
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
            <TouchableHighlight>
              <View style={styles.button}>
                <FontAwesome name="paper-plane" size={24} color="#fff" />
              </View>
            </TouchableHighlight>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flex: 1,
    padding: 20,
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
