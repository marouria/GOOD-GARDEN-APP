import React, { ReactNode } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { FAB } from "react-native-paper";
import { theme } from "../theme/theme";
import CallToActionFab from "./CallToActionFab";

interface Props {
  children?: ReactNode;
}

const AppLayout = ({ children = false }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ marginTop: 40 }}>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});

export default AppLayout;
