import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootScreen as App } from "./src/screens/RootScreen";
import StorybookUIRoot from "./storybook";

const SHOW_STORYBOOK = true;

const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;
export default UI;

export function App() {
  return (
    <View>
      <RootScreen></RootScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
