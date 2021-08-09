import React from "react";
import { View, Text } from "react-native";
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
