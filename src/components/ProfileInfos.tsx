import React from "react";
import { View, Text } from "react-native";
import { Avatar, List } from "react-native-paper";
import { MarkerUnits } from "react-native-svg";
import { getParsedCommandLineOfConfigFile } from "typescript";
import { PlantProps } from "../../api/types";

const userInfos = {
  username: "marouria",
  email: "marie.leuliette@gmail.com",
  city: "Lille",
  avatar_img: "https://avatars.githubusercontent.com/u/81169078?v=4",
};
const ProfileInfos = () => {
  return (
    <List.AccordionGroup>
      <List.Accordion
        title={userInfos.username}
        description="Voir mon profil"
        id="1"
        left={(props) => (
          <Avatar.Image
            {...props}
            size={50}
            source={{
              uri: userInfos.avatar_img,
            }}
          />
        )}
      >
        <List.Item
          title={userInfos.email}
          left={() => <List.Icon color="#000" icon="email-outline" />}
        />
        <List.Item
          title={userInfos.city}
          left={() => <List.Icon color="#000" icon="map-marker" />}
        />
        <List.Item title="Nombre de plantes d'été :" />
      </List.Accordion>
      <View>
        <List.Accordion title="À propos de Good Garden" id="4">
          <Text>
            Good garden est une super application qui va vous faciliter la main
            verte !
          </Text>
        </List.Accordion>
      </View>
    </List.AccordionGroup>
  );
};

export default ProfileInfos;
