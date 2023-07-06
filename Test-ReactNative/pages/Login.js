import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../components/Input";
import ButtonA from "../components/Button";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/AuthContext";
import { apiUrl } from "../components/react-query-hooks/getUser";

const Login = ({ route, navigation }) => {
  const [inputs, setinputs] = useState({
    ncc_id: "",
    password: "",
  });
  const [error, seterror] = useState({});

  const validate = () => {
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

  const handleChange = (value, name) => {
    // console.log("name", name);
    // console.log("value", value);
    setinputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleError = (errorMsg, input) => {
    seterror((prevState) => ({ ...prevState, [input]: errorMsg }));
  };

  const { login } = useContext(AuthContext);

  const [loading, setloading] = useState(false);

  const signin = async () => {
    setloading(true);
    validate();
    if (inputs.ncc_id && !error.ncc_id && inputs.password && !error.password) {
      try {
        const res = await axios.post(
          apiUrl + `/signin`,
          {
            inputs,
          },
          {
            withCredentials: true,
          }
        );
        // Alert.alert(res.);

        if (res.status === 200) {
          console.log(res.data.token.toLocaleString());
          const token = res.data.token.toLocaleString();
          AsyncStorage.setItem("jwt", token);
          login();
          navigation.navigate("Home");
        } else {
          Alert.alert(res.data);
          console.log(res.data);
        }

        // console.log("signup valid error", res.data);
      } catch (error) {
        console.log("signup error", error);
        Alert.alert("something went wrong");
      }
    }
    setloading(false);
  };

  useEffect(() => {
    validate();
  }, [inputs]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#104265", "#05B59B"]}
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "50%",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/ncclogo.png")}
          style={{
            width: 150,
            height: 150,
            top: 90,
          }}
        ></Image>
      </LinearGradient>

      <View
        style={{
          backgroundColor: "#ffffff",
          padding: 20,
          width: 330,
          borderRadius: 10,
          // alignItems: "center",
        }}
      >
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 20,
            textAlign: "center",
            lineHeight: 28,
            color: "#06AF99",
          }}
        >
          Welcome !
        </Text>
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
          label="Signin"
          onPress={() => {
            signin();
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
          onPress={() => navigation.navigate("Register")}
        >
          Create an account
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
