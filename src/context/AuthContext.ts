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
    case ActionTypes.addError:
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
        type: ActionTypes.addError,
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
        type: ActionTypes.addError,
        payload: "something went wrong with sign in",
      });
    }
  };
};

const signOut = (dispatch: Dispatch<ActionLocal>) => {
  return () => {
    console.log("signed out");
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp },
  { token: undefined, errorMessage: "" }
);
