import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const TextType = (props) => {
  const alertItem = () => {
    props.alertItem(props.text);
  };
  return (
    <View>
      <TextInput
        placeholder="type something"
        onChangeText={props.showElement}
        value={props.text}
      />
      <Button title="Press me" onPress={alertItem} />
    </View>
  );
};

export default TextType;

const styles = StyleSheet.create({});
