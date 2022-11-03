import { useState, useContext, useEffect } from "react";
import { View, StyleSheet, Image, ActivityIndicator } from "react-native";
import {
  StyledText,
  StyledTextInput,
  ButtonPrimary,
  ButtonSecondary,
} from "../components/shared";
import { userContext } from "../context/userContext";
import { useAuthentication } from "../hooks/useAuthentication";
import { getUser, postTweet } from "../services";
import theme from "../theme";
import noProfileImage from "../../assets/no-image.jpg";

const WritePost = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [post, setPost] = useState({ text: "" });

  const { user } = useAuthentication();

  const onChange = (name, value) => {
    setPost({ [name]: value });
  };

  const onPost = async () => {
    setError(false);
    setLoading(true);

    const payload = {
      text: post.text,
      date: new Date().getTime(),
      user,
    };

    const { error } = await postTweet(payload);

    setLoading(false);

    if (error) {
      setError(true);
      return;
    }

    setPost({ text: "" });

    navigation.navigate("FeedStack");
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={user.avatar ? { uri: user.avatar } : noProfileImage}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={{ marginBottom: 5 }}>
          <StyledText color="primary" fontWeight="bold">
            Hey {user?.name?.split(" ")[0]}! Tweet something
          </StyledText>
        </View>
        <StyledTextInput
          onChangeText={(e) => onChange("text", e)}
          multiline
          numberOfLines={6}
        />

        <View style={{ marginVertical: 10 }}>
          {loading ? (
            <View style={{ flex: 1, justifyContent: "center", marginTop: 15 }}>
              <ActivityIndicator size={40} color={theme.colors.blue} />
            </View>
          ) : (
            <ButtonSecondary
              onPress={onPost}
              title="POST"
              isDisabled={!post.text}
            />
          )}
        </View>
        {error && (
          <View style={{ alignItems: "center", marginVertical: 5 }}>
            <StyledText customColor="red">
              Something went wrong. Please try again later
            </StyledText>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    justifyContent: "center",
    paddingBottom: 100,
  },
  inputContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 7,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  imageContainer: {
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
  },
});

export default WritePost;
