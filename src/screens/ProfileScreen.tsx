import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { PlantProps } from "../../api/types";
import AppLayout from "../components/AppLayout";
import ProfileList from "../components/ProfileList";

interface Props {}

const ProfileScreen = (props: Props) => {
  return (
    <AppLayout>
      <View>
        <ProfileList></ProfileList>
      </View>
    </AppLayout>
  );
};

export default ProfileScreen;
