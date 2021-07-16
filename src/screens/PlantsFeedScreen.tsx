import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
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

  function handleGoToDetails() {}

  return (
    <AppLayout>
      <SafeAreaView>
        {data.results.map((plant) => {
          const LeftContent = (props) => {
            if (plant.season === "winter") {
              return (
                <Avatar.Icon
                  {...props}
                  icon="snowflake"
                  color="lightblue"
                  backgroundColor="none"
                />
              );
            }
            if (plant.season === "summer") {
              return (
                <Avatar.Icon
                  {...props}
                  icon="white-balance-sunny"
                  color="orange"
                  backgroundColor="none"
                />
              );
            }
          };

          const RightContent = () => {
            return (
              <Text>
                {plant.price.cents}
                {plant.price.currency_iso}
              </Text>
            );
          };
          return (
            <TouchableOpacity onPress={handleGoToDetails}>
              <Card style={styles.containerCard}>
                <Card.Cover source={{ uri: plant.img_url }} />
                <Card.Title
                  style={styles.infosContainer}
                  title={plant.name}
                  right={RightContent}
                  left={LeftContent}
                />
              </Card>
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    margin: 24,
  },
  infosContainer: {
    padding: 10,
  },
});

export default PlantsFeedScreen;
