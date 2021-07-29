import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import Navigator from "../navigation/Navigator";

const queryClient = new QueryClient();

export function RootScreen() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
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
