import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import ButtonA from "../components/Button";

const Data = [
  {
    id: 1,
    bgcolor: "#104567",
    inner_image_url: require("../assets/leave.png"),
    title: "Leave Apply",
    navigate: "Leave",
  },
  {
    id: 2,
    bgcolor: "#06B199",
    inner_image_url: require("../assets/file.png"),
    title: "Complaint Box",
    navigate: "Leave",
  },
  {
    title: "Video Tutorials",
    id: 3,
    bgcolor: "#104567",
    inner_image_url: require("../assets/video_tutorial_icon_2.png"),
    navigate: "Video",
  },
  {
    id: 4,
    bgcolor: "#06B199",
    inner_image_url: require("../assets/freelance.png"),
    title: "Work Reminder",
    navigate: "Leave",
  },
  {
    id: 5,
    bgcolor: "#104567",
    inner_image_url: require("../assets/noti.png"),
    title: "Leave Apply",
    navigate: "Leave",
  },
  {
    id: 6,
    bgcolor: "#104567",
    inner_image_url: require("../assets/noti.png"),
    title: "Leave Apply",
    navigate: "Leave",
  },
  {
    id: 7,
    bgcolor: "#104567",
    inner_image_url: require("../assets/noti.png"),
    title: "Leave Apply",
    navigate: "Leave",
  },
  {
    id: 8,
    bgcolor: "#104567",
    inner_image_url: require("../assets/noti.png"),
    title: "Leave Apply",
    navigate: "Leave",
  },
  {
    id: 9,
    bgcolor: "#104567",
    inner_image_url: require("../assets/noti.png"),
    title: "Leave Apply",
    navigate: "Leave",
  },
  {
    id: 10,
    bgcolor: "#104567",
    inner_image_url: require("../assets/noti.png"),
    title: "Leave Apply",
    navigate: "Leave",
  },
  {
    id: 12,
    bgcolor: "#104567",
    inner_image_url: require("../assets/noti.png"),
    title: "Leave Apply",
    navigate: "Leave",
  },
  {
    id: 13,
    bgcolor: "#104567",
    inner_image_url: require("../assets/noti.png"),
    title: "Leave Apply",
    navigate: "Leave",
  },
  {
    id: 14,
    bgcolor: "#104567",
    inner_image_url: require("../assets/noti.png"),
    title: "Leave Apply",
    navigate: "Leave",
  },
  {
    id: 15,
    bgcolor: "#104567",
    inner_image_url: require("../assets/noti.png"),
    title: "Leave Apply",
    navigate: "Leave",
  },
  {
    id: 16,
    bgcolor: "#104567",
    inner_image_url: require("../assets/noti.png"),
    title: "Leave Apply",
    navigate: "Leave",
  },
];

const Video_tutorial = ({ navigation }) => {
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
          Video Tutorials
        </Text>
      </View>
      <View
        style={{
          padding: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#ffffff",
            padding: 20,
            width: 330,
            borderRadius: 10,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowRadius: 4,
            shadowColor: "rgba(0, 0, 0, 0.65)",
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 5,
            // alignItems: "center",
          }}
        >
          <Input
            // onChangeText={(text) => handleChange(text, "ncc_id")}
            // onFocus={() => {
            //   handleError(null, "ncc_id");
            // }}
            label="Title"
            // error={error.ncc_id}
          />

          <Input
            // onChangeText={(text) => handleChange(text, "password")}
            label="link of video"
            // error={error.password}
            // onFocus={() => {
            //   handleError(null, "password");
            // }}
          />

          <ButtonA
            label="Add Tutorial"
            onPress={() => {
              //   signin();
            }}
          />
        </View>
      </View>
      <FlatList
        numColumns={2}
        vertical={true}
        contentContainerStyle={{
          paddingVertical: 5,
          alignItems: "center",
        }}
        data={Data}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: "white",
                width: 135,
                height: 135,
                position: "relative",
                borderRadius: 13,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowRadius: 4,
                shadowColor: "rgba(0, 0, 0, 0.65)",
                shadowOpacity: 1,
                shadowRadius: 10,
                elevation: 5,
                margin: 20,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  left: 0,
                  backgroundColor: "#104567",
                  height: "40%",
                  borderTopLeftRadius: 13,
                  borderTopRightRadius: 13,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "white",
                  padding: 5,
                  width: 50,
                  height: 50,
                  borderRadius: 7,
                  alignItems: "center",
                  justifyContent: "center",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowRadius: 4,
                  shadowColor: "rgba(0, 0, 0, 0.85)",
                  shadowOpacity: 1,
                  elevation: 10,
                  marginBottom: 15,
                }}
              >
                <Image
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  source={require("../assets/video_tutorial_icon_2.png")}
                />
              </View>

              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: 14,
                  lineHeight: 17,
                  color: "#000000",
                }}
              >
                {item.title}
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Video_tutorial;

const styles = StyleSheet.create({});
