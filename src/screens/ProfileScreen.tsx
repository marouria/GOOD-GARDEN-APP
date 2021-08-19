import React from "react";
import { View } from "react-native";
import { Headline } from "react-native-paper";
import AppLayout from "../components/AppLayout";
import Faq from "../components/Faq";
import ProfileInfos from "../components/ProfileInfos";
import LegalInfos from "../components/LegalInfos";

interface Props {}

const ProfileScreen = (props: Props) => {
  return (
    <AppLayout>
      <View>
        <ProfileInfos />

        <Headline style={{ paddingVertical: 24 }}>FAQ</Headline>
        <Faq />
        <Headline style={{ paddingVertical: 24 }}>
          Informations Légales
        </Headline>
        <LegalInfos />
      </View>
    </AppLayout>
  );
};

export default ProfileScreen;
