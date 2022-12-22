import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React, { createContext, useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Home1 from "../components/Home1";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/AuthContext";

const Home = ({ navigation }) => {
  const { test, loading } = useContext(AuthContext);
  const getToken = async () => {
    console.log("token home", test);
    if (!test) {
      navigation.navigate("Login");
    }
  };

  useEffect(() => {
    getToken();
  }, [test]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <View style={styles.HomeContainer}>
      <Navbar navigation={navigation} />
      <Home1 navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: "#E5E5E5",
  },
});
