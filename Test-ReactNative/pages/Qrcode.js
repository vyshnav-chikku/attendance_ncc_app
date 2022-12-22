import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Location from "expo-location";
import Loader from "../components/Loader";

const Qrcode = ({ navigation }) => {
  const [Haspermission, setHaspermission] = useState(null);
  const [HasLocationPermission, setHasLocationPermission] = useState(null);

  const [loader, setloader] = useState(true);

  const [time, settime] = useState("");
  const [hours, sethours] = useState("");
  const [minute, setminute] = useState("");
  const [ampm, setampm] = useState();

  const [city, setcity] = useState("");
  const [panchayath, setpanchayath] = useState("");

  const askForCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    console.log("camera permission", status);
    setHaspermission(status === "granted");
    askForLocationPermission();
  };

  const askForLocationPermission = async () => {
    setloader(true);

    const { status } = await Location.requestForegroundPermissionsAsync();
    console.log("location permission", status);

    if (status !== "granted") {
      Alert.alert(
        "Permission Not Granted",
        "Allow the app to use Location service",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
    setHasLocationPermission(status === "granted");
    let { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Low,
    });
    console.log("cords", coords);

    if (coords) {
      const { latitude, longitude } = coords;
      console.log("latitude", latitude);
      console.log("longitude", longitude);

      const place = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      console.log(place);
      console.log("city", place[0].city);
      console.log("Panchayath", place[0].street);

      setcity(place[0].city);
      setpanchayath(place[0].street ? place[0].street : place[0].district);

      const now = Date.now();
      const d = new Date(now);

      settime(d);

      console.log("Time", d);
      sethours(d.getHours());
      setminute(d.getMinutes());
      setampm(d.getHours() >= 12 ? "PM" : "PM");

      console.log("ampm", d.getHours() >= 12 ? "pm" : "am");

      // console.log("Hour", d.getHours());
      // console.log("Minute", d.getMinutes());
      // console.log("Seconds", d.getSeconds());
    }
    setloader(false);
  };

  useEffect(() => {
    askForCameraPermission();

    console.log(Haspermission);
  }, []);

  if (Haspermission === null || HasLocationPermission === null) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#104466",
            fontWeight: "500",
          }}
        >
          Requesting for permission
        </Text>
      </View>
    );
  }
  if (Haspermission === false || HasLocationPermission === false) {
    navigation.goBack();
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#BDBDBD",
      }}
    >
      {loader && <Loader />}
      <BarCodeScanner
        style={{
          width: 800,
          overflow: "hidden",
          height: "100%",
        }}
        onBarCodeScanned={({ type, data }) =>
          data === "12345" && navigation.goBack()
        }
      />
      <View
        style={{
          marginTop: "auto",
          width: "100%",
          height: 225,
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          justifyContent: "space-around",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        {/* first */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 25,
              height: 25,
              marginRight: 10,
            }}
            source={require("../assets/qrcode_icon.png")}
          ></Image>
          <Text
            style={{
              fontSize: 20,
              color: "#104466",
              fontWeight: "500",
            }}
          >
            Mark Your Presence
          </Text>
        </View>

        {/* dateandtime container */}
        {loader ? (
          <Text
            style={{
              fontSize: 16,
              color: "#919191",
              fontWeight: "400",
            }}
          >
            Loading Location and time
          </Text>
        ) : (
          <>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#919191",
                  fontWeight: "400",
                }}
              >
                Check In Time
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "#06B199",
                  fontWeight: "400",
                }}
              >
                {hours >= 12 ? hours - 12 : hours}:{minute} {ampm}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#919191",
                  fontWeight: "400",
                }}
              >
                Location
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "#06B199",
                  fontWeight: "400",
                }}
              >
                {city} , {panchayath}
              </Text>
            </View>
          </>
        )}

        <Text
          style={{
            fontSize: 16,
            color: "#919191",
            fontWeight: "400",
          }}
        >
          Scan QR Code To Mark Your Presence
        </Text>
      </View>
    </View>
  );
};

export default Qrcode;

const styles = StyleSheet.create({});
