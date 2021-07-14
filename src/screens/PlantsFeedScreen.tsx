import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import AppLayout from "../components/AppLayout";
import { usePlants } from "../hooks/usePlants";

interface plantProps {
  name: string;
  description: string;
}

const PlantsFeedScreen = () => {
  const { data } = usePlants();
  console.log(data);

  return (
    <AppLayout>
      <SafeAreaView>
        {data.results.map((plant) => {
          return <Text>{plant.name}</Text>;
        })}
      </SafeAreaView>
    </AppLayout>
  );
};

export default PlantsFeedScreen;
