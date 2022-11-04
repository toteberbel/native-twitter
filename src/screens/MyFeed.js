import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableHighlight,
} from "react-native";
import { useEffect, useState } from "react";
import theme from "../theme";
import { Post } from "../components/shared";
import { getPostsById } from "../services";
import { useAuthentication } from "../hooks/useAuthentication";

const MyFeed = () => {
  const { user } = useAuthentication();
  const [refreshing, setRefreshing] = useState(true);

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  // const auth = getAuth();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const { error, data } = await getPostsById(user.id);
    setLoading(false);
    setRefreshing(false);

    if (error) return;
    setPosts(data);
  };

  const onLike = (id) => console.log(id);

  const onOpenTweet = (post) => {
    navigation.navigate("Tweet", post);
  };

  return (
    <View
      style={{
        paddingBottom: 75,
        flex: 1,
      }}
    >
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size={100} color={theme.colors.blue} />
        </View>
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getData} />
          }
          data={posts}
          renderItem={({ item }) => (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => onOpenTweet(item)}
            >
              <Post post={item} onLike={onLike} />
            </TouchableHighlight>
          )}
        />
      )}
    </View>
  );
};

export default MyFeed;
