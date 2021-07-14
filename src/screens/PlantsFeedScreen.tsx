import React from "react";
import { Text, SafeAreaView } from "react-native";
import { usePlants } from "../hooks/usePlants";

const PlantsFeedScreen = () => {
  const { data } = usePlants();

  return (
    <SafeAreaView>
      {data.results.map((plant) => {
        return <Text>{plant.name}</Text>;
      })}
    </SafeAreaView>
  );
};

export default PlantsFeedScreen;
