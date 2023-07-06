import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [test, settest] = useState(null);
  const [loading, setloading] = useState(false);

  const [punch, setpunch] = useState(0);

  const [drawer, setdrawer] = useState(false);

  console.log("loading", loading);

  const login = async () => {
    const token = await AsyncStorage.getItem("jwt");
    console.log("auth provider token", token);
    settest(token);
  };

  const logout = async () => {
    setloading(true);

    const token = await AsyncStorage.removeItem("jwt");
    console.log("auth provider removed token", token);
    settest(null);
    setloading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        test,
        loading,
        login,
        setloading,
        logout,
        drawer,
        setdrawer,
        punch,
        setpunch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
