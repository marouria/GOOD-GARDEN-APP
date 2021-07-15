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

const LeftContent = (props) => <Avatar.Icon {...props} icon="camera" />;

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
          return (
            <Card style={styles.card}>
              <Card.Cover source={{ uri: plant.img_url }} />
              <Button
                style={styles.button}
                icon="camera"
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
  button: {
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
