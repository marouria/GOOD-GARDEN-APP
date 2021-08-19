import React from "react";
import { Avatar, List } from "react-native-paper";
import { usePlants } from "../hooks/usePlants";

const userInfos = {
  username: "marouria",
  email: "marie.leuliette@gmail.com",
  city: "Lille",
  avatar_img: "https://avatars.githubusercontent.com/u/81169078?v=4",
};
const ProfileInfos = () => {
  const { data } = usePlants();
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
          left={() => <List.Icon icon="email-outline" />}
        />
        <List.Item
          title={userInfos.city}
          left={() => <List.Icon icon="map-marker" />}
        />
      </List.Accordion>
    </List.AccordionGroup>
  );
};

export default ProfileInfos;
