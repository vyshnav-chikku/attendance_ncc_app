import {
  ActivityIndicator,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

const Loader = () => {
  const { width, height } = useWindowDimensions();
  console.log({ width, height });
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
    >
      <View
        style={{
          width: 250,
          height: 80,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginRight: 10,
            color: "#104265",
            fontWeight: "500",
          }}
        >
          Loading..
        </Text>
        <ActivityIndicator size="large" color="#104265" />
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
