import React from "react";
import { View, Text, SafeAreaView, ScrollView, Button } from "react-native";
import { Card } from "react-native-paper";
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
          return (
            <Card>
              <Card.Title
                title={plant.name}
                subtitle={plant.season}
              ></Card.Title>
              <Card.Cover source={{ uri: plant.img_url }} />
              <Card.Actions>{/* <Button>Ok</Button> */}</Card.Actions>
            </Card>
          );
        })}
      </SafeAreaView>
    </AppLayout>
  );
};

export default PlantsFeedScreen;
