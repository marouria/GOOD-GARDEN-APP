import React from "react";
import { View, Text } from "react-native";
import AppLayout from "../components/AppLayout";

interface Props {}

const PlantDetailsScreen = (props: Props) => {
  return (
    <AppLayout>
      <View>
        <Text>This is the details of a plant</Text>
      </View>
    </AppLayout>
  );
};

export default PlantDetailsScreen;
