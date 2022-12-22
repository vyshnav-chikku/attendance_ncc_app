import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Notification from "./pages/Notification";
import Qrcode from "./pages/Qrcode";
import Profile from "./pages/Profile";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Notifications" component={Notification} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Qrcode" component={Qrcode} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
