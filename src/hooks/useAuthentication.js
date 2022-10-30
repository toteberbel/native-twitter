import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getUserById } from "../services";

const auth = getAuth();

export function useAuthentication() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const getUserData = async (userId) => {
    const { error, data } = await getUserById(userId);
    console.log(data, "authe");
    if (!error) setUser(data);
  };

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(
      auth,
      (userData) => {
        if (userData) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setIsAuthenticated(true);

          getUserData(userData.uid);
        } else {
          // User is signed out
          setIsAuthenticated(false);
        }
      }
    );

    return () => unsubscribeFromAuthStatuChanged;
  }, []);

  return {
    user,
    isAuthenticated,
  };
}
