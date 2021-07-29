import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function PlantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={} />
    </Stack.Navigator>
  );
}
