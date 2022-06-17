import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import Routes from "./routes";
import SignUpScreen from "../screens/SignUpScreen";
import { Context as AuthContext } from "../context/AuthContext";

const Stack = createStackNavigator();

const AuthFlowNavigator = () => {
  const { clearError } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.SignUp}
        component={SignUpScreen}
        options={{ headerShown: false }}
        listeners={{
          blur: (e) => {
            clearError();
          },
        }}
      />
      <Stack.Screen
        name={Routes.SignIn}
        component={SignInScreen}
        options={{ headerShown: false }}
        listeners={{
          beforeRemove: (e) => {
            clearError();
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthFlowNavigator;
