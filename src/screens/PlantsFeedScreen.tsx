import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Avatar, Card, Title, Button } from "react-native-paper";
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

  function handlePress() {}

  return (
    <AppLayout>
      <SafeAreaView>
        {data.results.map((plant) => {
          const LeftContent = (props) => {
            if (plant.season === "winter") {
              return (
                <Avatar.Icon {...props} icon="snowflake" color="lightblue" />
              );
            }
            if (plant.season === "summer") {
              return (
                <Avatar.Icon {...props} icon="weather-sunny" color="orange" />
              );
            }
          };
          return (
            <Card>
              <Card.Cover source={{ uri: plant.img_url }} />
              <Button
                style={styles.viewPlantButton}
                icon="eye"
                mode="contained"
                onPress={handlePress}
              />
              <Card.Title title={plant.name} subtitle="" left={LeftContent} />
            </Card>
          );
        })}
      </SafeAreaView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  viewPlantButton: {
    position: "absolute",
    top: 10,
  },
  title: {
    textAlign: "right",
    // position: "absolute",
    // top: 0,
  },
});

export default PlantsFeedScreen;
