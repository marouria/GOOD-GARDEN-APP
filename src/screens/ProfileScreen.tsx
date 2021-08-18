import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { PlantProps } from "../../api/types";
import AppLayout from "../components/AppLayout";
import Faq from "../components/Faq";
import ProfileList from "../components/ProfileList";

interface Props {}

const ProfileScreen = (props: Props) => {
  return (
    <AppLayout>
      <View>
        <ProfileList></ProfileList>
        <Faq />
      </View>
    </AppLayout>
  );
};

export default ProfileScreen;
