import { useNavigation } from "@react-navigation/native";
import React from "react";
import { InteractionManagerStatic } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { PlantProps } from "../../api/types";
import { AppRoutes } from "../navigation/AppRoutes";

export interface PlantCardProps {
  plant: PlantProps;
  onPress?: (() => void) | undefined;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const navigation = useNavigation();

  function handleGoToDetails() {
    navigation.navigate(AppRoutes.PLANT_DETAILS_SCREEN, {
      plantId: plant,
    });
  }

  const LeftContent = (props) => {
    if (plant.season === "winter") {
      return (
        <Avatar.Icon
          {...props}
          icon="snowflake"
          color="lightblue"
          backgroundColor="none"
        />
      );
    }
    if (plant.season === "summer") {
      return (
        <Avatar.Icon
          {...props}
          icon="white-balance-sunny"
          color="orange"
          backgroundColor="none"
        />
      );
    }
  };

  const RightContent = () => {
    return (
      <Text>
        {plant.price_cents}
        {plant.currency_iso}
      </Text>
    );
  };

  return (
    <TouchableOpacity onPress={handleGoToDetails}>
      <Card style={styles.containerCard}>
        <Card.Cover source={{ uri: plant.img_url }} />
        <Card.Title
          style={styles.infosContainer}
          title={plant.name}
          right={RightContent}
          left={LeftContent}
        />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    margin: 24,
  },
  infosContainer: {
    padding: 10,
  },
});

export default PlantCard;
