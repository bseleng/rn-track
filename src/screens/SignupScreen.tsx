import React from "react";
import { StyleSheet, View } from "react-native";
import Routes from "../Navigators/routes";
import Navigation from "../types/thirdParty/navigation";
import { Button, Input, Text } from "react-native-elements";
import Spacer from "../utils/styleHelpers/Spacer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Controller, useForm } from "react-hook-form";
import HookFormInput from "../_atoms/HookFormInput/HookFormInput";

interface IProps {
  navigation: Navigation;
}
export type SignUpFormValues = {
  email: string;
  password: string;
};

const SignupScreen = ({ navigation: { navigate } }: IProps) => {
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
  const onSubmit = (data: SignUpFormValues) => console.log(data);

  return (
    <KeyboardAwareScrollView style={styles.wrap}>
      <View style={styles.content}>
        <Spacer cssProp={"margin"} cssValues={[150, 24, 40, 24]}>
          <Text h2>Sign up for Tracker</Text>
        </Spacer>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={"Email"}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <Text> Email is required.</Text>}
        <Spacer cssProp={"margin"} cssValues={[0, 0, 8, 0]} />
        <HookFormInput
          label={"Password"}
          control={control}
          rules={{ required: true }}
          name={"password"}
          errors={errors}
          errorMessage={"password is required"}
        />
        <Spacer cssProp={"margin"} cssValues={[8, 8, 0, 8]}>
          <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
        </Spacer>
        <Spacer cssProp={"margin"} cssValues={[8, 8, 0, 8]}>
          <Button
            title="Already have an account? Sign in"
            onPress={() => navigate(Routes.Signin)}
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
});

export default SignupScreen;
