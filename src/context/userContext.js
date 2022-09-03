import React, { createContext, useState, useEffect } from "react";
import { getUser, updateUser } from "../services";
import useravatar from "../../assets/rodrigo.png";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: {
      name: "Rodrigo Berbel",
      username: "@rberbel",
      avatar: useravatar,
      id: "40960023",
    },
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const existUser = await getUser();
    if (existUser) {
      setUser(existUser);
      return;
    }
    await updateUser("user", user);
  };

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export default UserProvider;
