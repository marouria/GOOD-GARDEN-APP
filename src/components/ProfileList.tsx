import React from "react";
import { View, Text } from "react-native";
import { Avatar, List } from "react-native-paper";
import { PlantProps } from "../../api/types";

interface Props {
  plant: PlantProps;
}

const ProfileList = (props: Props) => {
  return (
    <List.AccordionGroup>
      <List.Accordion
        title="tomi"
        description="Voir mon profil"
        id="1"
        left={(props) => (
          <Avatar.Image
            {...props}
            size={50}
            source={{
              uri:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80",
            }}
          />
        )}
      >
        <List.Item
          title="infos"
          left={() => <List.Icon color="#000" icon="mail" />}
          description={() => (
            <View>
              <Text>marie.leuliette@gmail.com</Text>
              <Text>Lille</Text>
            </View>
          )}
        />
        <List.Item title="Nombre de plantes d'hiver :" />
        <Text>?</Text>
        <List.Item title="Nombre de plantes d'été :" />
        <Text>?</Text>
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

export default ProfileList;
