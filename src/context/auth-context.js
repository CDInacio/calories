import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  authenticate: (token) => {},
  logout: () => {},
  isAuthenticated: false,
});

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState();

  const authenticate = (token) => {
    setToken(token);

    AsyncStorage.setItem("userToken", token);
  };

  const logout = () => {
    AsyncStorage.removeItem("userToken");
    setToken();
  };

  // const getUserFavorites = () => {

  // }

  const value = {
    setToken,
    token,
    authenticate,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
