import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState, useContext } from "react";
import theme from "../theme";
import { Post } from "../components/shared";
import { getPosts, getUser } from "../services";
import { userContext } from "../context/userContext";

const mock = [
  {
    id: "1",
    ownerId: "1",
    user: "rodrigob",
    userName: "Rodrigo Berbel",
    date: new Date(),
    post: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it",
    ownerAvatar: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
    likes: 0,
    retweets: 0,
  },
  {
    id: "2",
    ownerId: "2",
    user: "manuelParker",
    userName: "Manuel Parker Lois",
    date: new Date(),
    post: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it",
    ownerAvatar: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
    likes: 0,
    retweets: 0,
  },
  {
    id: "3",
    ownerId: "3",
    user: "frgrab",
    userName: "Franco Grabois",
    date: new Date(),
    post: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it",
    ownerAvatar: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
    likes: 0,
    retweets: 0,
  },
  {
    id: "4",
    ownerId: "4",
    user: "sofister",
    userName: "Sofia Blanco",
    date: new Date(),
    post: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it",
    ownerAvatar: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
    likes: 0,
    retweets: 0,
  },
  {
    id: "5",
    ownerId: "5",
    user: "armandomaradona",
    userName: "Armando Casas",
    date: new Date(),
    post: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it",
    ownerAvatar: "https://xsgames.co/randomusers/assets/avatars/male/5.jpg",
    likes: 0,
    retweets: 0,
  },
];

const Feed = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const { user } = useContext(userContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const { error, data } = await getPosts();
    setLoading(false);

    if (error) return;
    setPosts(data);
  };

  return (
    <View
      style={{
        paddingBottom: 75,
        flex: 1
      }}
    >
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size={100} color={theme.colors.blue} />
        </View>
      ) : (
        <FlatList data={posts} renderItem={(post) => <Post post={post} />} />
      )}
    </View>
  );
};

export default Feed;
