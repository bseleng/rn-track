import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import Routes from "./routes";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createStackNavigator();

const AuthFlowNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.SignUp}
      component={SignUpScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={Routes.SignIn}
      component={SignInScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthFlowNavigator;
