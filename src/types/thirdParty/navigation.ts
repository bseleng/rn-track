type navListenerCallback = (navigationEvent: Event) => void;

type NavigationState = {
  index: number;
  key: string;
  routeNames?: string[];
  routes: { key: string; name: string; params: unknown }[];
  stale: boolean;
  type: string;
};

type navigationDispatch = (
  commonActions: object | undefined
) => NavigationState;

type Navigation = {
  navigate: (route: string) => void;
  addListener: (
    navigationEvent: string,
    navListenerCallback: navListenerCallback
  ) => void;
  getParent: (id?: string) => Navigation;
  getState: () => NavigationState;
  dispatch: navigationDispatch;
};

export default Navigation;
