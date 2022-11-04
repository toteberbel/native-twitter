import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableHighlight,
  Button,
} from "react-native";
import { useEffect, useState, useContext } from "react";
import theme from "../theme";
import { Post } from "../components/shared";
import { getPosts, getUser } from "../services";

const mock = [
  {
    id: "1",
    ownerId: "1",
    username: "rodrigob",
    name: "Rodrigo Berbel",
    date: new Date(),
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it",
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
    likesCount: 0,
    sharedCount: 0,
    commentsCount: 0,
  },
];

const Feed = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(true);

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  // const auth = getAuth();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const { error, data } = await getPosts();
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

export default Feed;
