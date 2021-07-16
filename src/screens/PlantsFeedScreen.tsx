import React from "react";
import { Text, SafeAreaView } from "react-native";
import AppLayout from "../components/AppLayout";
import PlantCard from "../components/PlantCard";
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
          return <PlantCard plant={plant}></PlantCard>;
        })}
      </SafeAreaView>
    </AppLayout>
  );
};

export default PlantsFeedScreen;
