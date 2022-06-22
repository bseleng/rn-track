import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../_organisms/Map";

const TrackCreateScreen = () => (
  <SafeAreaView>
    <View style={styles.wrap}>
      <Text h2>Create Track </Text>
      <Map />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  wrap: {
    padding: 8,
  },
});

export default TrackCreateScreen;
