import React, { useContext, useEffect } from "react";
import Routes from "../Navigators/routes";
import Navigation from "../types/thirdParty/navigation";
import AuthTemplate from "../_templates/AuthTemplate";
import { ActionTypes } from "../types/redux/ActionTypes";
import { Context as AuthContext } from "../context/AuthContext";

interface IProps {
  navigation: Navigation;
}

const SignInScreen = ({ navigation }: IProps) => {
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
      navButtonText={"Don't have an account? Sign Up"}
      navButtonRoute={Routes.SignUp}
      title={"Sign in"}
      submitButtonText={"Sign In"}
      submitButtonAction={ActionTypes.signIn}
      navigation={navigation}
    />
  );
};

export default SignInScreen;
