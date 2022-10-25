import React from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../component/Firebase/Firebase.init.config";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
export const userContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState({});

  //safety for memomy leakage and check for current user on firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser === null || currentuser.emailVerified) {
        setUser(currentuser);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //sign in ............................

  const signIn = (provid) => {
    return signInWithPopup(auth, provid);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const userInfo = { user, signIn, logOut };

  return (
    <userContext.Provider value={userInfo}>{children}</userContext.Provider>
  );
};

export default Authprovider;
