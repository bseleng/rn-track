import { ActionTypes } from "./ActionTypes";

type ActionLocal =
  | { type: ActionTypes.signUp; payload: string }
  | { type: ActionTypes.signIn; payload: string }
  | { type: ActionTypes.addError; payload: string };

export default ActionLocal;
