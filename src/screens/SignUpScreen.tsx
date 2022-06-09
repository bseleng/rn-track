import React from "react";
import { StyleSheet, View } from "react-native";
import Routes from "../Navigators/routes";
import Navigation from "../types/thirdParty/navigation";
import { Button, Text } from "react-native-elements";
import Spacer from "../utils/styleHelpers/Spacer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm } from "react-hook-form";
import HookFormInput from "../_atoms/HookFormInput/HookFormInput";
import { Context as AuthContext } from "../context/AuthContext";
import { useContext } from "react";

interface IProps {
  navigation: Navigation;
}
export type SignUpFormValues = {
  email: string;
  password: string;
};

const SignUpScreen = ({ navigation: { navigate } }: IProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { state, signUp } = useContext(AuthContext);
  const onSubmit = (data: SignUpFormValues) => {
    console.log("data", data);
    signUp(data);
  };

  return (
    <KeyboardAwareScrollView style={styles.wrap}>
      <View style={styles.content}>
        <Spacer cssProp={"margin"} cssValues={[150, 24, 40, 24]}>
          <Text h2>Sign up for Tracker</Text>
        </Spacer>
        <HookFormInput
          label={"Email"}
          control={control}
          rules={{ required: true }}
          name={"email"}
          errors={errors}
          errorMessage={"email is required"}
          autoCorrect={false}
          autoCapitalize={"none"}
        />
        <Spacer cssProp={"margin"} cssValues={[0, 0, 8, 0]} />
        <HookFormInput
          label={"Password"}
          control={control}
          rules={{ required: true }}
          name={"password"}
          errors={errors}
          errorMessage={"password is required"}
          autoCorrect={false}
          autoCapitalize={"none"}
          secureTextEntry
        />
        {state.errorMessage ? (
          <Spacer cssProp={"margin"} cssValues={[0, 8, 8, 8]}>
            <Text style={styles.errorMessage}>{state.errorMessage}</Text>
          </Spacer>
        ) : null}
        <Spacer cssProp={"margin"} cssValues={[8, 8, 0, 8]}>
          <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
        </Spacer>
        <Spacer cssProp={"margin"} cssValues={[8, 8, 0, 8]}>
          <Button
            title="Already have an account? Sign in"
            onPress={() => navigate(Routes.SignIn)}
          />
        </Spacer>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  content: {
    padding: 8,
  },
  navButtonWrap: {
    marginTop: 16,
  },
  navButtonText: {
    color: "blue",
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
  },
});

export default SignUpScreen;
