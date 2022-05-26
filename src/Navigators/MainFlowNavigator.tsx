import React from "react";
import Routes from "./routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import TrackListDetailNavigator from "./TrackListDetailNavigator";

const BottomTabs = createBottomTabNavigator();

const MainFlowNavigator = () => (
  <BottomTabs.Navigator>
    <BottomTabs.Screen
      name={Routes.TrackListDetail}
      component={TrackListDetailNavigator}
    />
    <BottomTabs.Screen
      name={Routes.TrackCreate}
      component={TrackCreateScreen}
    />
    <BottomTabs.Screen name={Routes.Account} component={AccountScreen} />
  </BottomTabs.Navigator>
);

export default MainFlowNavigator;
