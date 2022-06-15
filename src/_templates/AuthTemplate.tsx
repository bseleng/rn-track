import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Routes from "../Navigators/routes";
import Navigation from "../types/thirdParty/navigation";
import { Button, Text } from "react-native-elements";
import Spacer from "../utils/styleHelpers/Spacer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm } from "react-hook-form";
import HookFormInput from "../_atoms/HookFormInput/HookFormInput";
import { Context as AuthContext } from "../context/AuthContext";
import { ActionTypes } from "../types/redux/ActionTypes";

interface IProps {
  navigation: Navigation;
  title: string;
  submitButtonText: string;
  submitButtonAction: ActionTypes;
  navButtonText: string;
  navButtonRoute: Routes;
}
export type SignUpFormValues = {
  email: string;
  password: string;
};

const AuthTemplate = ({
  navigation,
  title,
  submitButtonAction,
  submitButtonText,
  navButtonRoute,
  navButtonText,
}: IProps) => {
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
  const { state, signUp, signIn } = useContext(AuthContext);
  const onSubmit = (data: SignUpFormValues) => {
    switch (submitButtonAction) {
      case ActionTypes.signUp:
        signUp(data);
        break;
      case ActionTypes.signIn:
        signIn(data);
        break;
      default:
        return;
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.wrap}>
      <View style={styles.content}>
        <Spacer cssProp={"margin"} cssValues={[150, 24, 40, 24]}>
          <Text h2>{title}</Text>
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
          <Spacer cssProp={"margin"} cssValues={[-22, 8, 8, 8]}>
            <View style={styles.errorWrap}>
              <Text style={styles.errorMessage}>{state.errorMessage}</Text>
            </View>
          </Spacer>
        ) : null}
        <Spacer cssProp={"margin"} cssValues={[24, 8, 0, 8]}>
          <Button title={submitButtonText} onPress={handleSubmit(onSubmit)} />
        </Spacer>
        <Spacer cssProp={"margin"} cssValues={[8, 8, 0, 8]}>
          <Button
            title={navButtonText}
            onPress={() => navigation.navigate(navButtonRoute)}
            type="clear"
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
    fontSize: 12,
    color: "red",
    position: "absolute",
  },
  errorWrap: {
    display: "flex",
    alignItems: "flex-end",
  },
});

export default AuthTemplate;
