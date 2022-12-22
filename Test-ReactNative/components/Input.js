import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
// import Icon from "react-native-vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Input = ({ label, error, password, onFocus = () => {}, ...props }) => {
  const [isfocused, setisfocused] = useState(false);
  const [hidePasw, sethidePasw] = useState(password);
  return (
    <View
      style={{
        marginBottom: 8,
      }}
    >
      <Text
        style={{
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: 16,
          lineHeight: 23,
          color: "#104366",
          marginBottom: 5,
        }}
      >
        {label}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 6,
          //   shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowOpacity: 1,
          borderRadius: 10,
          elevation: 5,
          padding: 10,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: error ? "red" : isfocused ? "darkblue" : "lightgrey",
        }}
      >
        <TextInput
          {...props}
          secureTextEntry={hidePasw}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setisfocused(true);
          }}
          onBlur={() => {
            setisfocused(false);
          }}
          style={{
            width: "92%",
          }}
        />
        {/* <Icon name="eyeo" /> */}
        {password && (
          <FontAwesome
            name={hidePasw ? "eye-slash" : "eye"}
            size={20}
            onPress={() => sethidePasw(!hidePasw)}
          />
        )}
      </View>
      {error && (
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 12,
            lineHeight: 23,
            color: "red",
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
