import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { PlantProps } from "../../api/types";

export interface PlantCardProps {
  plant: PlantProps;
}

const PlantsCard = ({ plant }: PlantCardProps) => {
  function handleGoToDetails() {}

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

export default PlantsCard;
