import createDataContext from "./CreateDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signUp = (dispatch: any) => {
  return ({ email, password }) => {
    console.log(email, password);
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
