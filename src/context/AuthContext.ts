import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./CreateDataContext";
import trackerApi from "../api/tracker";
import { actionTypes } from "../types/redux/actionTypes";
const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.addError:
      return { ...state, errorMessage: action.payload };
    case actionTypes.signUp:
      return { ...state, token: action.payload, errorMessage: "" };
    default:
      return state;
  }
};

const signUp = (dispatch: any) => {
  return async ({ email, password }: { email: string; password: string }) => {
    console.log(email, password);
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: actionTypes.signUp, payload: response.data.token });
    } catch (err) {
      console.error(err.response.data);
      dispatch({
        type: actionTypes.addError,
        payload: "something went wrong with signup",
      });
    }
  };
};

const signIn = (dispatch: any) => {
  return ({ email, password }) => {
    console.log(email, password);
  };
};

const signOut = (dispatch: any) => {
  return () => {
    console.log("signed out");
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp },
  { token: undefined, errorMessage: "" }
);
