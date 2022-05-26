import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Routes from "../Navigators/routes";
import Navigation from "../types/thirdParty/navigation";

interface IProps {
  navigation: Navigation;
}

const SignupScreen = ({ navigation: { navigate } }: IProps) => (
  <View style={styles.wrap}>
    <Text>SignupScreen</Text>

    <Pressable
      style={styles.navButtonWrap}
      onPress={() => navigate(Routes.Signin)}
    >
      <Text style={styles.navButtonText}>Go to Sign In</Text>
    </Pressable>
    <Pressable
      style={styles.navButtonWrap}
      onPress={() => navigate(Routes.User)}
    >
      <Text style={styles.navButtonText}>Go to Main Flow</Text>
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

export default SignupScreen;
