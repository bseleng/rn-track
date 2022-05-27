import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Routes from "../Navigators/routes";
import Navigation from "../types/thirdParty/navigation";
import { Button, Input, Text } from "react-native-elements";
import Spacer from "../utils/styleHelpers/Spacer";

interface IProps {
  navigation: Navigation;
}

const SignupScreen = ({ navigation: { navigate } }: IProps) => (
  <View style={styles.wrap}>
    <Spacer cssProp={"margin"} cssValues={[0, 24, 40, 24]}>
      <Text h2>Sign up for Tracker</Text>
    </Spacer>
    <Input label={"Emal"} />
    <Spacer cssProp={"margin"} cssValues={[0, 0, 8, 0]} />
    <Input label={"Password"} />
    <Spacer cssProp={"margin"} cssValues={[8, 8, 0, 8]}>
      <Button title="Sign Up" />
    </Spacer>

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
    // alignItems: "center",
  },
  navButtonWrap: {
    marginTop: 16,
  },
  navButtonText: {
    color: "blue",
  },
});

export default SignupScreen;
