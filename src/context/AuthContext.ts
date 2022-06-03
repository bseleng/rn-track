import createDataContext from "./CreateDataContext";
import trackerApi from "../api/tracker";
const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signUp = (dispatch: any) => {
  return async ({ email, password }: { email: string; password: string }) => {
    console.log(email, password);
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (err) {
      console.error(err.response.data);
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
  { isSignedIn: false }
);
