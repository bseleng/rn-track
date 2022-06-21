import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthFlowNavigator from "./src/Navigators/AuthFlowNavigator";
import MainFlowNavigator from "./src/Navigators/MainFlowNavigator";
import Routes from "./src/Navigators/routes";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import InitScreen from "./src/screens/InitScreen";

const Stack = createStackNavigator();
const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer ref={(nav) => setNavigator(nav)}>
        <Stack.Navigator
          screenOptions={{
            animationEnabled: false,
          }}
        >
          <Stack.Screen name={Routes.InitScreen} component={InitScreen} />
          <Stack.Screen
            name={Routes.Guest}
            component={AuthFlowNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routes.User}
            component={MainFlowNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
