import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";

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
];

const Home_items = ({ navigation }) => {
  return (
    <View
      style={{
        marginVertical: 20,
      }}
    >
      <Text
        style={{
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: 14,
          lineHeight: 17,
          color: "#000000",
        }}
      >
        Categories
      </Text>
      <FlatList
        horizontal={true}
        style={{
          paddingVertical: 5,
          marginHorizontal: -5,
        }}
        data={Data}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => navigation.navigate(item.navigate)}
              style={{
                backgroundColor: "white",
                width: 135,
                height: 135,
                position: "relative",
                borderRadius: 13,
                justifyContent: "center",
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
                marginRight: 20,
                margin: 5,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  left: 0,
                  backgroundColor: item.bgcolor,
                  height: "48%",
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
                  source={item.inner_image_url}
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
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default Home_items;
