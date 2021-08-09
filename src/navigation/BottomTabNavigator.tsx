import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlantDetailsScreen from "../screens/PlantDetailsScreen";
import PlantsFeedScreen from "../screens/PlantsFeedScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { AppRoutes } from "./AppRoutes";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const PlantStack = createStackNavigator();

function PlantNavigator() {
  return (
    <PlantStack.Navigator>
      <PlantStack.Screen
        name={AppRoutes.PLANTS_FEED_SCREEN}
        component={PlantsFeedScreen}
      />
      <PlantStack.Screen
        name={AppRoutes.PLANT_DETAILS_SCREEN}
        component={PlantDetailsScreen}
      />
    </PlantStack.Navigator>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={AppRoutes.PLANTS_FEED_SCREEN}
        component={PlantNavigator}
      />
      <Tab.Screen name={AppRoutes.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;