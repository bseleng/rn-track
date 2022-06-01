import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthFlowNavigator from "./src/Navigators/AuthFlowNavigator";
import MainFlowNavigator from "./src/Navigators/MainFlowNavigator";
import Routes from "./src/Navigators/routes";
import { Provider as AuthProvider } from "./src/context/AuthContext";

const Stack = createStackNavigator();
const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animationEnabled: false,
          }}
        >
          <Stack.Screen
            name={Routes.Guest}
            component={AuthFlowNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name={Routes.User} component={MainFlowNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
