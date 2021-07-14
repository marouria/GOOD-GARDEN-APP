import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { usePlants } from "../hooks/usePlants";

interface plantProps {
  name: string;
  description: string;
}

const PlantsFeedScreen = () => {
  const { data } = usePlants();
  console.log(data);

  return (
    <SafeAreaView>
      {data.results.map((plant) => {
        return <Text>{plant.name}</Text>;
      })}
    </SafeAreaView>
  );
};

export default PlantsFeedScreen;
