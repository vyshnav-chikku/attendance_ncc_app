import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Notification",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Notification",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Notification",
  },
];

const Notification = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#FFFFFF",
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
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
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/left_arrow_2.png")}
            style={{
              width: 40,
              height: 40,
              marginHorizontal: 10,
            }}
          ></Image>
        </Pressable>
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 23,
            lineHeight: 25,
            color: "#104466",
          }}
        >
          Notifications
        </Text>
      </View>
      <FlatList
        style={{
          padding: 20,
        }}
        data={DATA}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#FFFFFF",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
                elevation: 10,
                padding: 10,
                margin: 10,
              }}
            >
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: 15,
                  lineHeight: 17,
                  color: "#000000",
                }}
              >
                {item.title}
              </Text>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#FF7878",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  source={require("../assets/close.png")}
                ></Image>
              </View>
            </View>
          );
        }}
        keyExtractor={({ id }) => {
          return id;
        }}
      />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({});
