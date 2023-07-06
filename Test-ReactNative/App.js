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
import Video_tutorial from "./pages/Video_tutorial";
import LeaveApply from "./pages/LeaveApply";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Leave" component={LeaveApply} />
            <Stack.Screen name="Video" component={Video_tutorial} />
            <Stack.Screen name="Notifications" component={Notification} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "Welcome" }}
            />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Qrcode" component={Qrcode} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
