import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import AppLayout from "../components/AppLayout";

import { usePlants } from "../hooks/usePlants";

const PlantsFeedScreen = () => {
  const { isLoading, isError, data } = usePlants();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error...</Text>;
  }

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
