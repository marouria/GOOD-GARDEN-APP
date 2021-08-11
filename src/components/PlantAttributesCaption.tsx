import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-paper";
import { PlantProps } from "../../api/types";

interface PlantAttributesCaptionProps {
  plant: PlantProps;
}

const PlantAttributesCaption = ({ plant }: PlantAttributesCaptionProps) => {
  const multiplySunshineIcons = (rate: number) => {
    if (rate === 1) {
      return (
        <View>
          <Avatar.Icon
            icon="white-balance-sunny"
            color="orange"
            size={40}
            style={{ backgroundColor: "none" }}
          />
        </View>
      );
    }
    if (rate === 2) {
      return (
        <View style={{ flexDirection: "row" }}>
          <Avatar.Icon
            icon="white-balance-sunny"
            color="orange"
            size={40}
            style={{ backgroundColor: "none" }}
          />
          <Avatar.Icon
            icon="white-balance-sunny"
            color="orange"
            size={40}
            style={{ backgroundColor: "none" }}
          />
        </View>
      );
    }
  };

  const multiplyWateringIcons = (rate: number) => {
    if (rate === 1) {
      return (
        <View>
          <Avatar.Icon
            icon="water"
            color="blue"
            size={40}
            style={{ backgroundColor: "none" }}
          />
        </View>
      );
    }
    if (rate === 2) {
      return (
        <View style={{ flexDirection: "row" }}>
          <Avatar.Icon
            icon="water"
            color="blue"
            size={40}
            style={{ backgroundColor: "none" }}
          />
          <Avatar.Icon
            icon="water"
            color="blue"
            size={40}
            style={{ backgroundColor: "none" }}
          />
        </View>
      );
    }
    if (rate === 3) {
      return (
        <View style={{ flexDirection: "row" }}>
          <Avatar.Icon
            icon="water"
            color="blue"
            size={40}
            style={{ backgroundColor: "none" }}
          />
          <Avatar.Icon
            icon="water"
            color="blue"
            size={40}
            style={{ backgroundColor: "none" }}
          />
          <Avatar.Icon
            icon="water"
            color="blue"
            size={40}
            style={{ backgroundColor: "none" }}
          />
        </View>
      );
    }

    if (rate === 4) {
      return (
        <View style={{ flexDirection: "row" }}>
          <Avatar.Icon
            icon="water"
            color="blue"
            size={40}
            style={{ backgroundColor: "none" }}
          />
          <Avatar.Icon
            icon="water"
            color="blue"
            size={40}
            style={{ backgroundColor: "none" }}
          />
          <Avatar.Icon
            icon="water"
            color="blue"
            size={40}
            style={{ backgroundColor: "none" }}
          />
          <Avatar.Icon
            icon="water"
            color="blue"
            size={40}
            style={{ backgroundColor: "none" }}
          />
        </View>
      );
    }
  };

  const multiplyLevelIcons = (level: string) => {
    if (level === "begin") {
      return (
        <View>
          <Avatar.Icon
            icon="seed-outline"
            color="green"
            size={40}
            style={{ backgroundColor: "none" }}
          />
        </View>
      );
    }
    if (level === "medium") {
      return (
        <View style={{ flexDirection: "row" }}>
          <Avatar.Icon
            icon="seed-outline"
            color="green"
            size={40}
            style={{ backgroundColor: "none" }}
          />
          <Avatar.Icon
            icon="seed-outline"
            color="green"
            size={40}
            style={{ backgroundColor: "none" }}
          />
        </View>
      );
    }
    if (level === "expert") {
      return (
        <View style={{ flexDirection: "row" }}>
          <Avatar.Icon
            icon="seed-outline"
            color="green"
            size={40}
            style={{ backgroundColor: "none" }}
          />
          <Avatar.Icon
            icon="seed-outline"
            color="green"
            size={40}
            style={{ backgroundColor: "none" }}
          />
          <Avatar.Icon
            icon="seed-outline"
            color="green"
            size={40}
            style={{ backgroundColor: "none" }}
          />
        </View>
      );
    }
  };
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      {multiplySunshineIcons(plant.sunshine_rate)}
      {multiplyWateringIcons(plant.watering)}
      {multiplyLevelIcons(plant.user_level)}
    </View>
  );
};

export default PlantAttributesCaption;
