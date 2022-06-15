import React, { useContext, useEffect } from "react";
import Routes from "../Navigators/routes";
import Navigation from "../types/thirdParty/navigation";
import AuthTemplate from "../_templates/AuthTemplate";
import { ActionTypes } from "../types/redux/ActionTypes";
import { Context as AuthContext } from "../context/AuthContext";

interface IProps {
  navigation: Navigation;
}
export type SignUpFormValues = {
  email: string;
  password: string;
};

const SignUpScreen = ({ navigation }: IProps) => {
  const { clearError } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = () =>
      navigation.addListener("beforeRemove", (e: Event) => {
        clearError();
      });
    return unsubscribe;
  }, [navigation]);
  return (
    <AuthTemplate
      navButtonText={"Already have an account? Sign In"}
      navButtonRoute={Routes.SignIn}
      title={"Sign up for Tracker"}
      submitButtonText={"Sign Up"}
      submitButtonAction={ActionTypes.signUp}
      navigation={navigation}
    />
  );
};

export default SignUpScreen;
