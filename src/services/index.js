import { getDatabase, ref, get, child, push } from "firebase/database";
import app from "../config/firebase";
import * as SecureStore from "expo-secure-store";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const createAccount = async (credentials) => {
  try {
    const auth = getAuth();
    const { email, password } = credentials;

    const userInfo = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (!userInfo.user) throw new Error();

    return { error: false };
  } catch (error) {
    console.error(error);
  }
  return { error: true };
};

export const getPosts = async () => {
  try {
    const dbRef = ref(getDatabase());
    const data = await get(child(dbRef, "posts"));

    if (!data.exists()) throw new Error();

    const values = data.val();

    const maped = Object.keys(values).map((id) => ({
      id,
      ...values[id],
    }));

    return { data: maped, error: false };
  } catch (error) {
    console.error("Something went wrong while trying to get the posts", error);
  }

  return { error: true };
};

export const getUser = async () => {
  const user = await getStoredValue("user");

  return JSON.parse(user);
};

export const updateUser = async (key, value) => {
  let user = (await getUser()) || {};
  //   let json = await user.json();

  user = { ...user, [key]: value };
  console.log(JSON.stringify(user));

  await storeValue("user", JSON.stringify(user));
};

const getStoredValue = async (key) => {
  const result = await SecureStore.getItemAsync(key);
  return result || {};
};

const storeValue = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};

export const postTweet = async (tweet) => {
  try {
    const dbRef = ref(getDatabase(), "posts");
    const data = await push(dbRef, tweet);

    console.log(data);
    // if (!data.exists()) throw new Error();

    return { data, error: false };
  } catch (error) {
    console.error("Something went wrong while trying to get the posts", error);
  }

  return { error: true };
};
