import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserDocFromAuth,
  onAuthUserStateChanged,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthUserStateChanged((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  });
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
