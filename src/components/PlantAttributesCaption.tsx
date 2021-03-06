import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-paper";
import { PlantProps } from "../../api/types";
import { theme } from "../theme/theme";

interface PlantAttributesCaptionProps {
  plant: PlantProps;
}

const PlantAttributesCaption = ({ plant }: PlantAttributesCaptionProps) => {
  const SunshineIndicator = (rate: number) => {
    if (rate === 1) {
      return <Text>direct</Text>;
    }
    if (rate === 2) {
      return <Text>indirect</Text>;
    }
  };

  const UserLevelIndicator = (level: string) => {
    if (level === "begin") {
      return <Text>Beginner</Text>;
    }
    if (level === "medium") {
      return <Text>Intermediate</Text>;
    }
    if (level === "expert") {
      return <Text>Expert</Text>;
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: 20,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Avatar.Icon
          icon="white-balance-sunny"
          color={theme.colors.secondary800}
          size={50}
          style={{ backgroundColor: "none" }}
        />
        {SunshineIndicator(plant.sunshine_rate)}
      </View>
      <View style={{ alignItems: "center" }}>
        <Avatar.Icon
          icon="water"
          color={theme.colors.primary300}
          size={50}
          style={{ backgroundColor: "none" }}
        />
        <Text>{plant.watering}x/month</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Avatar.Icon
          icon="seed-outline"
          color={theme.colors.primary800}
          size={50}
          style={{ backgroundColor: "none" }}
        />
        {UserLevelIndicator(plant.user_level)}
      </View>
    </View>
  );
};

export default PlantAttributesCaption;
