import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";

const LeaveApply = ({ navigation }) => {
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [showStart, setshowStart] = useState(false);
  const [showEnd, setshowEnd] = useState(false);
  const [mode, setmode] = useState("date");

  console.log("date leave", new Date());

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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/left_arrow_2.png")}
            style={{
              width: 40,
              height: 40,
              marginHorizontal: 10,
            }}
          ></Image>
        </TouchableOpacity>
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 23,
            lineHeight: 25,
            color: "#104466",
          }}
        >
          Leave Apply
        </Text>
      </View>

      {/* main area */}

      <View
        style={{
          marginBottom: 20,
          padding: 20,
        }}
      >
        <Input
          // onChangeText={(text) => handleChange(text, "ncc_id")}
          // onFocus={() => {
          //   handleError(null, "ncc_id");
          // }}
          multiline={true}
          numberOfLines={4}
          label="Reason"
          // error={error.ncc_id}
        />
        <Input
          // onChangeText={(text) => handleChange(text, "ncc_id")}
          // onFocus={() => {
          //   handleError(null, "ncc_id");
          // }}
          label="No of days"
          keyboardType="numeric"
          // error={error.ncc_id}
        />
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
            Start Date
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
            }}
          >
            <Text
              style={{
                marginRight: "auto",
              }}
            >
              {startDate.getDate() +
                "-" +
                (startDate.getMonth() + 1) +
                "-" +
                startDate.getFullYear()}
            </Text>
            <TouchableOpacity onPress={() => setshowStart(true)}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#104265", "#05B59B"]}
                style={{
                  borderRadius: 10,
                  paddingHorizontal: 18,
                  paddingVertical: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "#ffffff",
                  }}
                >
                  change
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        {showStart && (
          <DateTimePicker
            testID="dateTimePicker"
            value={startDate}
            mode={mode}
            display="default"
            onChange={(event, datetime) => {
              setstartDate(datetime);
              setshowStart(false);
            }}
          />
        )}
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
            Ending Date
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
            }}
          >
            <Text
              style={{
                marginRight: "auto",
              }}
            >
              {endDate.getDate() +
                "-" +
                (endDate.getMonth() + 1) +
                "-" +
                endDate.getFullYear()}
            </Text>
            <TouchableOpacity onPress={() => setshowEnd(true)}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#104265", "#05B59B"]}
                style={{
                  borderRadius: 10,
                  paddingHorizontal: 18,
                  paddingVertical: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "#ffffff",
                  }}
                >
                  change
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        {showEnd && (
          <DateTimePicker
            testID="dateTimePicker"
            value={endDate}
            mode={mode}
            display="default"
            onChange={(event, datetime) => {
              setendDate(datetime);
              setshowEnd(false);
            }}
          />
        )}
        <TouchableOpacity>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#104265", "#05B59B"]}
            style={{
              borderRadius: 10,
              width: "100%",
              height: 50,
              marginTop: 30,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Submit
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LeaveApply;

const styles = StyleSheet.create({});
