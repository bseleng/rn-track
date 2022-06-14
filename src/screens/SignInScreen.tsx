import React from "react";
import Routes from "../Navigators/routes";
import Navigation from "../types/thirdParty/navigation";
import AuthTemplate from "../_templates/AuthTemplate";
import { ActionTypes } from "../types/redux/ActionTypes";

interface IProps {
  navigation: Navigation;
}

const SignInScreen = ({ navigation }: IProps) => {
  return (
    <AuthTemplate
      navButtonText={"Don't have an account? Sign Up"}
      navButtonRoute={Routes.SignUp}
      title={"Sgn in"}
      submitButtonText={"Sign In"}
      submitButtonAction={ActionTypes.signIn}
      navigation={navigation}
    />
  );
};

export default SignInScreen;
