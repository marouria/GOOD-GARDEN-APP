import React from "react";
import { View, Text } from "react-native";
import { usePlants } from "../hooks/usePlants";

interface plantProps {
  name: string;
  description: string;
}

const PlantsFeedScreen = () => {
  const { data } = usePlants();

  return (
    <View>
      <Text></Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </View>
  );
};

export default PlantsFeedScreen;
