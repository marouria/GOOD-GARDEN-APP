import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import PlantDetailsScreen from '../screens/PlantDetailsScreen';
import PlantsFeedScreen from '../screens/PlantsFeedScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { AppRoutes } from './AppRoutes';
import CalendarScreen from '../screens/CalendarScreen';
import { theme } from '../theme/theme';
import NewTaskScreen from '../screens/NewTaskScreen';

export const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function PlantNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoutes.PLANTS_FEED_SCREEN}
        component={PlantsFeedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AppRoutes.PLANT_DETAILS_SCREEN}
        component={PlantDetailsScreen}
      />
    </Stack.Navigator>
  );
}

function CalendarNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoutes.CALENDAR_SCREEN}
        component={CalendarScreen}
        options={{ headerShown: false }}
      />

      <Stack.Group
        screenOptions={{ presentation: 'modal', headerShown: false }}
      >
        <Stack.Screen
          name={AppRoutes.NEW_TASK_SCREEN}
          component={NewTaskScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function ProfileNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={AppRoutes.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="white"
      inactiveColor={theme.colors.primary400}
      barStyle={{ backgroundColor: theme.colors.primary900 }}
    >
      <Tab.Screen
        name={AppRoutes.PLANTS_FEED_SCREEN}
        component={PlantNavigator}
        options={{
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name={AppRoutes.CALENDAR_SCREEN}
        component={CalendarNavigator}
        options={{
          tabBarIcon: 'calendar',
        }}
      />
      <Tab.Screen
        name={AppRoutes.PROFILE}
        component={ProfileNavigator}
        options={{
          tabBarIcon: 'account',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
