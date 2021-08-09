import { createStackNavigator } from "@react-navigation/stack";
import PlantDetailsScreen from "../screens/PlantDetailsScreen";
import PlantsFeedScreen from "../screens/PlantsFeedScreen";
import { AppRoutes } from "./AppRoutes";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";

function Navigator() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default Navigator;
