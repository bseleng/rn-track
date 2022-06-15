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
      listeners={{
        blur: (e) => {
          // Prevent default action
          console.log("hi, stack listener!  SignUpScreen");
        },
      }}
    />
    <Stack.Screen
      name={Routes.SignIn}
      component={SignInScreen}
      options={{ headerShown: false }}
      listeners={{
        beforeRemove: (e) => {
          // Prevent default action
          console.log("hi, stack listener!  SignInScreen");
        },
      }}
    />
  </Stack.Navigator>
);

export default AuthFlowNavigator;
