import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import { WritePostTab } from "../components/shared";

export const screens = {
  FeedTab: "FeedTab",
  FeedStack: "FeedStack",
  Feed: "Feed",

  Tweet: "Tweet",
  TweetStack: "FeedStack",
  TweetTab: "FeedTab",

  MyFeedTab: "MyFeedTab",
  MyFeedStack: "MyFeedStack",
  MyFeed: "MyFeed",

  WritePostTab: "WritePostTab",
  WritePostStack: "WritePostStack",
  WritePost: "WritePost",

  Login: "Login",
  LoginStack: "LoginStack",
};

export const routes = [
  {
    name: screens.FeedTab,
    focusedRoute: screens.FeedTab,
    title: "Feed",
    showInTab: false,
    showInDrawer: false,
    icon: ({ color, size }) => (
      <MaterialIcons name="dynamic-feed" size={size} color={color} />
    ),
  },
  {
    name: screens.FeedStack,
    focusedRoute: screens.FeedStack,
    title: "Feed",
    showInTab: true,
    showInDrawer: true,
    icon: ({ color, size }) => (
      <MaterialIcons name="dynamic-feed" size={size} color={color} />
    ),
  },
  {
    name: screens.Feed,
    focusedRoute: screens.FeedStack,
    title: "Feed",
    showInTab: true,
    showInDrawer: false,
    icon: ({ color, size }) => (
      <MaterialIcons name="dynamic-feed" size={size} color={color} />
    ),
  },

  {
    name: screens.TweetStack,
    focusedRoute: screens.FeedStack,
    title: "Tweet",
    showInTab: true,
    showInDrawer: false,
    icon: ({ color, size }) => (
      <MaterialIcons name="dynamic-feed" size={size} color={color} />
    ),
  },
  {
    name: screens.Tweet,
    focusedRoute: screens.FeedStack,
    title: "Tweet",
    showInTab: true,
    showInDrawer: false,
    icon: ({ color, size }) => (
      <MaterialIcons name="dynamic-feed" size={size} color={color} />
    ),
  },

  {
    name: screens.WritePostTab,
    focusedRoute: screens.WritePostTab,
    title: "Post tweet",
    showInTab: false,
    showInDrawer: false,
    icon: () => <WritePostTab />,
  },
  {
    name: screens.WritePostStack,
    focusedRoute: screens.WritePostStack,
    title: "Post tweet",
    showInTab: true,
    showInDrawer: true,
    icon: () => <WritePostTab />,
  },
  {
    name: screens.WritePost,
    focusedRoute: screens.WritePostStack,
    title: "Post tweet",
    showInTab: true,
    showInDrawer: false,
    icon: () => <WritePostTab />,
  },

  {
    name: screens.MyFeedTab,
    focusedRoute: screens.MyFeedTab,
    title: "My Feed",
    showInTab: false,
    showInDrawer: false,
    icon: ({ color, size }) => (
      <MaterialIcons name="person" size={size} color={color} />
    ),
  },
  {
    name: screens.MyFeedStack,
    focusedRoute: screens.MyFeedStack,
    title: "My Feed",
    showInTab: true,
    showInDrawer: true,
    icon: ({ color, size }) => (
      <MaterialIcons name="person" size={size} color={color} />
    ),
  },
  {
    name: screens.MyFeed,
    focusedRoute: screens.MyFeedStack,
    title: "My Feed",
    showInTab: true,
    showInDrawer: false,
    icon: ({ color, size }) => (
      <MaterialIcons name="person" size={size} color={color} />
    ),
  },
];
