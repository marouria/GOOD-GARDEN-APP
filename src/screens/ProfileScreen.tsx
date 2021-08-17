import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import AppLayout from "../components/AppLayout";

interface Props {}

const ProfileScreen = (props: Props) => {
  return (
    <AppLayout>
      <View>
        <Text>This is your profile settings</Text>
      </View>
    </AppLayout>
  );
};

export default ProfileScreen;
