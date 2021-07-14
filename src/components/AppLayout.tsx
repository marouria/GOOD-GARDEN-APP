import React, { ReactNode } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";

interface Props {
  children?: ReactNode;
}

const AppLayout = ({ children = false }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});

export default AppLayout;
