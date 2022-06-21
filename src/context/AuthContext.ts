import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./CreateDataContext";
import trackerApi from "../api/tracker";
import { ActionTypes } from "../types/redux/ActionTypes";
import Routes from "../Navigators/routes";
import { navigate } from "../navigationRef";
import ActionLocal from "../types/redux/Action";
import { Dispatch } from "react";

const authReducer = (state: StateLocal, action: ActionLocal) => {
  switch (action.type) {
    case ActionTypes.setAuthError:
      return { ...state, errorMessage: action.payload };
    case ActionTypes.signUp:
      return { ...state, token: action.payload, errorMessage: "" };
    case ActionTypes.signIn:
      return { ...state, token: action.payload, errorMessage: "" };
    default:
      return state;
  }
};

const signUp = (dispatch: Dispatch<ActionLocal>) => {
  return async ({ email, password }: { email: string; password: string }) => {
    console.log(email, password);
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: ActionTypes.signUp, payload: response.data.token });
      navigate(Routes.User);
    } catch (err) {
      console.error(err.response.data);
      dispatch({
        type: ActionTypes.setAuthError,
        payload: "something went wrong with signup",
      });
    }
  };
};

const signIn = (dispatch: Dispatch<ActionLocal>) => {
  return async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: ActionTypes.signIn, payload: response.data.token });
      navigate(Routes.User);
    } catch (err) {
      console.error(err.response.data);
      dispatch({
        type: ActionTypes.setAuthError,
        payload: "something went wrong with sign in",
      });
    }
  };
};

const signOut = (dispatch: Dispatch<ActionLocal>) => {
  return async () => {
    console.log("sing out");
    await AsyncStorage.removeItem("token");
    dispatch({ type: ActionTypes.signUp, payload: undefined });
    navigate(Routes.Guest, { screen: Routes.SignUp });
  };
};

const clearError = (dispatch: Dispatch<ActionLocal>) => {
  return () => {
    dispatch({ type: ActionTypes.setAuthError, payload: "" });
  };
};

const tryLocalSignIn = (dispatch: Dispatch<ActionLocal>) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: ActionTypes.signIn, payload: token });
    navigate(Routes.User);
  } else {
    navigate(Routes.Guest, { screen: Routes.SignUp });
  }
};
export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp, clearError, tryLocalSignIn },
  { token: undefined, errorMessage: "" }
);
