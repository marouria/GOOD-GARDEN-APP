import { StatusBar } from "expo-status-bar";
import { RootScreen as App } from "./src/screens/RootScreen";
import StorybookUIRoot from "./storybook";

const SHOW_STORYBOOK = false;

const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;
export default UI;
