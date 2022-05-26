import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Routes from "../Navigators/routes";
import Navigation from "../types/thirdParty/navigation";

interface IProps {
  navigation: Navigation;
}
const TrackListScreen = ({ navigation: { navigate } }: IProps) => (
  <View style={styles.wrap}>
    <Text>TrackListScreen</Text>
    <Pressable
      style={styles.navButtonWrap}
      onPress={() => navigate(Routes.TrackDetail)}
      hitSlop={10}
    >
      <Text style={styles.navButtonText}>Go to Track Detail</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  wrap: {
    padding: 8,
    flex: 1,
    alignItems: "center",
  },
  navButtonWrap: {
    marginTop: 16,
  },
  navButtonText: {
    color: "blue",
  },
});

export default TrackListScreen;
