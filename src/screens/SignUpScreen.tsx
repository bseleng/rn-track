import React from "react";
import Routes from "../Navigators/routes";
import Navigation from "../types/thirdParty/navigation";
import AuthTemplate from "../_templates/AuthTemplate";
import { ActionTypes } from "../types/redux/ActionTypes";

interface IProps {
  navigation: Navigation;
}
export type SignUpFormValues = {
  email: string;
  password: string;
};

const SignUpScreen = ({ navigation }: IProps) => {
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
