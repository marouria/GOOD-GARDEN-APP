import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { RootScreen } from "../screens";
import PlantsFeedScreen from "../screens/PlantsFeedScreen";

interface Props {}

const Tab = createBottomTabNavigator();

export const BottomTabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={RootScreen} />
      <Tab.Screen name="My garden" component={PlantsFeedScreen} />
    </Tab.Navigator>
  );
};
