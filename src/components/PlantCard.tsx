import { useNavigation } from "@react-navigation/native";
import React from "react";
import { InteractionManagerStatic, Image } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar, Card, Chip, Title } from "react-native-paper";
import { PlantProps } from "../../api/types";
import { AppRoutes } from "../navigation/AppRoutes";

export interface PlantCardProps {
  plant: PlantProps;
  onPress?: (() => void) | undefined;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const navigation = useNavigation();

  function handleGoToDetails() {
    navigation.navigate(AppRoutes.PLANT_DETAILS_SCREEN, {
      plantId: plant,
    });
  }

  const DisplaySeason = (props) => {
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

  return (
    <TouchableOpacity onPress={handleGoToDetails}>
      <Card style={styles.containerCard}>
        <View style={{ flexDirection: "row" }}>
          <Card.Cover
            source={{ uri: plant.img_url }}
            style={{ width: 100, height: 100 }}
          />
          <Card.Content>
            <Title>{plant.name}</Title>
            <Chip
              icon="alarm-check"
              mode="outlined"
              onPress={() => console.log("Pressed")}
            >
              Up-to-date
            </Chip>
          </Card.Content>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            {DisplaySeason(plant)}
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    marginHorizontal: 24,
    marginVertical: 10,
  },
  infosContainer: {
    padding: 10,
  },
});

export default PlantCard;
