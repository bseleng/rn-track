import { CommonActions } from "@react-navigation/native";
import Routes from "./Navigators/routes";

let navigator: unknown;

export const setNavigator = (nav: unknown) => {
  navigator = nav;
};

export const navigate = (routeName: Routes, params?: unknown) => {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    })
  );
};
