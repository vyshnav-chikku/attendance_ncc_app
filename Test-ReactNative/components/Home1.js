import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const Home1 = (props) => {
  const [date, setdate] = useState([]);

  const getdateandTime = () => {
    const now = Date.now();
    const d = new Date(now).toLocaleString().split(" ");
    setdate(d);
    console.log("date home", d[4]);
  };

  useEffect(() => {
    getdateandTime();
  }, []);

  return (
    <View style={styles.main_container}>
      <Text style={styles.title_text}>Mark Your Presence</Text>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#104265", "#05B59B"]}
        style={styles.attendance_container}
      >
        <View style={styles.attendance_container1}>
          <View style={styles.dateContainer}>
            <Text style={styles.weekname}>{date[0]}</Text>
            <Text style={styles.monthname}>
              {date[2]} {date[1]}
            </Text>
            <Text style={styles.yearname}>{date[4]}</Text>
          </View>

          <View style={styles.borderMiddle}></View>

          <View style={styles.punchContainer}>
            <View style={styles.out_in_container}>
              <View style={styles.icon_out_container}>
                <View style={styles.icon_out_container_arrow_line}></View>
                <Image
                  source={require("../assets/left_arrow.png")}
                  style={styles.left_arrow_image}
                ></Image>
              </View>
              <Text style={styles.out_text}>Out - 05:02 Pm</Text>
            </View>
            <Pressable onPress={() => props.navigation.navigate("Qrcode")}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#104265", "#05B59B"]}
                style={styles.punchinBtn}
              >
                <Text style={styles.punchinTxt}>Punch In</Text>
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Home1;

const styles = StyleSheet.create({
  main_container: {
    marginTop: 30,
  },
  title_text: {
    marginBottom: 10,
    color: "#000000",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 17,
    fontStyle: "normal",
  },
  attendance_container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 20,
    height: 172,
  },
  attendance_container1: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 8.9561,
  },
  dateContainer: {},
  weekname: {
    color: "#737373",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
    fontStyle: "normal",
    marginBottom: 5,
  },
  monthname: {
    color: "#000000",
    fontSize: 23,
    fontWeight: "600",
    lineHeight: 28,
    fontStyle: "normal",
    marginBottom: 7,
  },
  yearname: {
    color: "#737373",
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 20,
    fontStyle: "normal",
    marginBottom: 7,
  },
  borderMiddle: {
    width: 2,
    height: "100%",
    backgroundColor: "#D9D9D9",
  },
  out_in_container: {
    flexDirection: "row",
    marginBottom: 10,
  },
  icon_out_container: {
    width: 19,
    height: 19,
    backgroundColor: "#FF7878",
    borderRadius: 50,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  icon_out_container_arrow_line: {
    width: 8,
    height: 1,
    backgroundColor: "#ffffff",
  },
  left_arrow_image: {
    position: "absolute",
    left: 4,
  },
  out_text: {
    color: "#737373",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
    fontStyle: "normal",
  },
  punchinBtn: {
    borderRadius: 10,
    width: 129,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  punchinTxt: {
    color: "#ffffff",
  },
});
