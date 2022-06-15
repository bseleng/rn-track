type navListenerCallback = (navigationEvent: Event) => void;

type Navigation = {
  navigate: (route: string) => void;
  addListener: (
    navigationEvent: string,
    navListenerCallback: navListenerCallback
  ) => void;
};

export default Navigation;
