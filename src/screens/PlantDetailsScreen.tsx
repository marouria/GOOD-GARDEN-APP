import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import AppLayout from "../components/AppLayout";
import { Avatar, DataTable, Headline, Title } from "react-native-paper";
import PlantAttributesCaption from "../components/PlantAttributesCaption";
import { theme } from "../theme/theme";

interface Props {
  route: any;
}

const PlantDetailsScreen = (props: Props) => {
  const { name, description, img_url } = props.route.params.plantId;

  return (
    <AppLayout>
      <View>
        <Headline style={theme.title}>{name}</Headline>
        <Image
          source={{ uri: img_url }}
          style={{ width: "100%", height: 250 }}
        />
        <PlantAttributesCaption
          plant={props.route.params.plantId}
        ></PlantAttributesCaption>
        <Text style={theme.paragraph}>{description}</Text>
      </View>
    </AppLayout>
  );
};

export default PlantDetailsScreen;
