import React, { ReactNode } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { FAB } from "react-native-paper";
import { theme } from "../theme/theme";

interface Props {
  children?: ReactNode;
}

const AppLayout = ({ children = false }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ marginTop: 40 }}>{children}</ScrollView>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log("Pressed")}
      />
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
  fab: {
    position: "absolute",
    marginRight: 20,
    right: 0,
    top: 30,
    backgroundColor: theme.colors.primary900,
  },
});

export default AppLayout;
