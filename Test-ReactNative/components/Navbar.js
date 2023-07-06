import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/AuthContext";
import { getUser } from "./react-query-hooks/getUser";

const Navbar = ({ navigation }) => {
  const { logout, setdrawer } = useContext(AuthContext);

  const { data, error, isError, isLoading, mutate: getData } = getUser();

  return (
    <View style={styles.NavContainer}>
      <View style={styles.name_container}>
        <Text style={styles.main_name}>Hi Wazeem!</Text>
        <Text style={styles.additional_name}>How Are You Today.. </Text>
      </View>
      <View style={styles.notification_container}>
        <Pressable onPress={() => navigation.navigate("Notifications")}>
          <Image style={styles.bell} source={require("../assets/noti.png")} />
        </Pressable>
        <Image style={styles.red} source={require("../assets/red.png")} />
      </View>
      <View style={styles.profilecontainer}>
        <Pressable onPress={() => logout()}>
          <Image
            style={styles.profile_img}
            source={require("../assets/profile_img.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  NavContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name_container: {
    marginRight: "auto",
  },
  main_name: {
    // fontFamily: "Madani-Medium",
    color: "#104567",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 25,
    fontStyle: "normal",
  },
  additional_name: {
    color: "#06B199",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    fontStyle: "normal",
  },

  notification_container: {
    position: "relative",
    width: 30,
    height: 35,
    marginRight: 14,
  },
  bell: {
    width: "100%",
    height: "100%",
  },
  red: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  profilecontainer: {
    width: 55,
    height: 55,
  },
  profile_img: {
    width: "100%",
    height: "100%",
  },
});
