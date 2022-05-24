import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "./routes";
import TrackListScreen from "../screens/TrackListScreen";
import TrackDetailScreen from "../screens/TrackDetailScreen";

const Stack = createStackNavigator();


const TrackListDetailNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.TrackList} component={TrackListScreen}/>
    <Stack.Screen name={Routes.TrackDetail} component={TrackDetailScreen}/>
  </Stack.Navigator>
)

export default TrackListDetailNavigator


