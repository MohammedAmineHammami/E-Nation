import React, { createContext, useEffect, useState } from "react";
import { axiosRequest } from "../helper/requestHelper";

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const logIn = async (inputs) => {
    const res = await axiosRequest.post("/auth/login", inputs);
    setCurrentUser(res.data);
  };

  const logOut = async () => {
    await axiosRequest.post("/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{ signedUser: currentUser, login: logIn, logout: logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
