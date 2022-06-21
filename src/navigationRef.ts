import { CommonActions } from "@react-navigation/native";
import Routes from "./Navigators/routes";
import Navigation from "./types/thirdParty/navigation";

let navigator: Navigation;

export const setNavigator = (nav: Navigation) => {
  navigator = nav;
};

export const navigate = (routeName: Routes, params?: unknown) => {
  navigator.dispatch(
    // @ts-ignore
    CommonActions.navigate({
      name: routeName,
      params,
    })
  );
};
