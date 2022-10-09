import React, { createContext, useState, useEffect } from "react";
import { getUser, updateUser } from "../services";
import { Image } from "react-native";
import userImage from "../../assets/rodrigo.png";
export const userContext = createContext();

const useravatar = Image.resolveAssetSource(userImage).uri;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: {
      name: "Rodrigo Berbel",
      username: "@rberbel",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4D03AQHqED0-dhqhRQ/profile-displayphoto-shrink_400_400/0/1630696441436?e=1668038400&v=beta&t=fZm8rK0cE1x4dVPzM6931JLUJEgeE0K_9-pu2npaiD0",
      id: "40960023",
    },
  });

  // const getUserData = async () => {
  //   // const existUser = await getUser();
  //   if (existUser) {
  //     setUser(existUser);
  //     return;
  //   }
  //   // await updateUser("user", user);
  // };

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export default UserProvider;
