import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#FFFFFF",
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowRadius: 7,
          shadowColor: "#171717",
          shadowOpacity: 1,
          elevation: 5,
          paddingVertical: 20,
        }}
      >
        <Image
          source={require("../assets/left_arrow_2.png")}
          style={{
            width: 40,
            height: 40,
            marginHorizontal: 10,
          }}
        ></Image>
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 23,
            lineHeight: 25,
            color: "#104466",
          }}
        >
          Profile
        </Text>
      </View>
      <View
        style={{
          padding: 20,
        }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#104265", "#05B59B"]}
          style={{
            height: 200,
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              position: "absolute",
              backgroundColor: "#FFFFFF",
              width: 140,
              height: 140,
              bottom: -60,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: 110,
                height: 110,
              }}
              source={require("../assets/profile.png")}
            ></Image>
          </View>
        </LinearGradient>
      </View>
      <View
        style={{
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 20,
            lineHeight: 25,
            color: "#05B59B",
            marginBottom: 10,
          }}
        >
          Name
        </Text>
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 15,
            lineHeight: 20,
            color: "#104466",
            marginBottom: 10,
          }}
        >
          Employe Id
        </Text>
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 15,
            lineHeight: 20,
            color: "#104466",
            marginBottom: 10,
          }}
        >
          Email ID
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
