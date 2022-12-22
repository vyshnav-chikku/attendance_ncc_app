import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const ButtonA = ({ label, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
      }}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#104265", "#05B59B"]}
        style={{
          paddingVertical: 10,
          paddingHorizontal: 30,
          margin: "auto",
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 18,
            lineHeight: 25,
            color: "#FFFFFF",
          }}
        >
          {label}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonA;

const styles = StyleSheet.create({});
