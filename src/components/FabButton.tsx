import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';
import { AppRoutes } from '../navigation/AppRoutes';
import NewTaskScreen from '../screens/NewTaskScreen';
import { theme } from '../theme/theme';

interface Props {}

const FabButton = () => {
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const navigation = useNavigation();

  const handleNewPlant = () => {
    console.log('Pressed email');
  };
  const handleNewTask = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: AppRoutes.NEW_TASK_SCREEN,
      })
    );
  };

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          visible
          style={{ padding: 20 }}
          fabStyle={{ backgroundColor: theme.colors.secondary800 }}
          icon={open ? 'folder-plus' : 'plus'}
          actions={[
            {
              icon: 'flower-tulip',
              label: 'New plant',
              onPress: handleNewPlant,
            },
            {
              icon: 'alarm-check',
              label: 'New task',
              onPress: handleNewTask,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default FabButton;
