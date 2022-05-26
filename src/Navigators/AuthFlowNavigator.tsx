import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "../screens/SigninScreen";
import Routes from "./routes";
import SignupScreen from "../screens/SignupScreen";

const Stack = createStackNavigator();

const AuthFlowNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Signup} component={SignupScreen} />
    <Stack.Screen name={Routes.Signin} component={SigninScreen} />
  </Stack.Navigator>
);

export default AuthFlowNavigator;
