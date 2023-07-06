import {
  Alert,
  Button,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../components/Input";
import ButtonA from "../components/Button";
import Loader from "../components/Loader";
import axios from "axios";
import { apiUrl } from "../components/react-query-hooks/getUser";

const API_URL =
  Platform.OS === "ios" ? "http://localhost:5000" : "http://10.0.2.2:5000";

const Register = ({ route, navigation }) => {
  const [inputs, setinputs] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    ncc_id: "",
  });
  const [error, seterror] = useState({});

  const [loading, setloading] = useState(false);

  const [valid, setvalid] = useState(false);

  const validate = () => {
    if (!inputs.email) {
      handleError("please input email", "email");
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("email is not valid", "email");
    } else {
      handleError(null, "email");
    }

    if (!inputs.phone) {
      handleError("please input number", "phone");
    } else {
      handleError(null, "phone");
    }

    if (!inputs.name) {
      handleError("please input name", "name");
    } else {
      handleError(null, "name");
    }

    if (!inputs.password) {
      handleError("please input password", "password");
    } else if (inputs.password.length < 5) {
      handleError("min password length is 5", "password");
    } else {
      handleError(null, "password");
    }

    if (!inputs.ncc_id) {
      handleError("please input ncc id", "ncc_id");
    } else {
      handleError(null, "ncc_id");
    }
  };

  const signup = async () => {
    validate();
    if (
      inputs.name &&
      !error.name &&
      inputs.email &&
      !error.email &&
      inputs.phone &&
      !error.phone &&
      inputs.ncc_id &&
      !error.ncc_id &&
      inputs.password &&
      !error.password
    ) {
      try {
        const res = await axios.post(
          apiUrl + `/signup`,
          {
            inputs,
          },
          {
            withCredentials: true,
          }
        );
        // Alert.alert(res.);

        if (res.status === 200) {
          Alert.alert(res.data);
          navigation.navigate("Login");
        } else {
          Alert.alert(res.data);
        }
        console.log("signup valid error", res.data);
      } catch (error) {
        console.log("signup error", error);
        Alert.alert("something went wrong");
      }
    }
  };

  const handleChange = (value, name) => {
    // console.log("name", name);
    // console.log("value", value);
    setinputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleError = (errorMsg, input) => {
    seterror((prevState) => ({ ...prevState, [input]: errorMsg }));
  };

  useEffect(() => {
    validate();
  }, [inputs]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: "relative",
      }}
    >
      {loading && <Loader />}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#104265", "#05B59B"]}
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: 500,
          alignItems: "center",
        }}
      ></LinearGradient>
      <ScrollView
        contentContainerStyle={{
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/ncclogo.png")}
          style={{
            width: 70,
            height: 70,
            marginVertical: 20,
          }}
        ></Image>
        <View
          style={{
            padding: 20,
            maxWidth: 330,
            borderRadius: 10,
            // alignItems: "center",

            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowRadius: 7,
            shadowColor: "rgba(0, 0, 0, 0.1)",
            shadowOpacity: 1,
            elevation: 3,
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: 20,
              lineHeight: 28,
              color: "#06AF99",
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            Welcome !
          </Text>
          <Input
            label="Name"
            error={error.name}
            onChangeText={(text) => handleChange(text, "name")}
            // onFocus={() => {
            //   handleError(null, "name");
            // }}
          />

          <Input
            label="Email"
            error={error.email}
            onChangeText={(text) => handleChange(text, "email")}
            // onFocus={() => {
            //   handleError(null, "email");
            // }}
          />
          <Input
            label="Phone"
            error={error.phone}
            keyboardType="numeric"
            onChangeText={(text) => handleChange(text, "phone")}
            // onFocus={() => {
            //   handleError(null, "phone");
            // }}
          />
          <Input
            onChangeText={(text) => handleChange(text, "ncc_id")}
            // onFocus={() => {
            //   handleError(null, "ncc_id");
            // }}
            label="NCC ID"
            error={error.ncc_id}
          />

          <Input
            onChangeText={(text) => handleChange(text, "password")}
            label="Password"
            error={error.password}
            // onFocus={() => {
            //   handleError(null, "password");
            // }}
            password
          />

          <ButtonA
            label="Register"
            onPress={() => {
              signup();
            }}
          />
          <Text
            style={{
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: 16,
              lineHeight: 23,
              color: "#104366",
              marginBottom: 5,
              textAlign: "center",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            Already have an account? Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
