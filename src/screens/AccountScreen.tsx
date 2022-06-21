import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../utils/styleHelpers/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={styles.wrap}>
      <Spacer cssProp={"margin"} cssValues={[30, 0, 0, 0]} />
      <Button title={"Sign out"} onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 8,
  },
});

export default AccountScreen;
