import React from "react";
import { auth } from "../lib/firebase";

export const useUser = () => {
  const [isAuth, setIsAuth] = React.useState(false);
  React.useEffect(() => {
    console.log("auth", auth);
    setIsAuth(auth.currentUser ? true : false);
  }, [auth.currentUser]);
  return {
    isAuth,
    currentUser: auth.currentUser,
  };
};
