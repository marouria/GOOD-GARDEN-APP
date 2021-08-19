import React, { useState } from "react";
import { View, Text } from "react-native";
import { FAB, Portal, Provider } from "react-native-paper";
import { theme } from "../theme/theme";

interface Props {}

const FabButton = () => {
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          visible
          style={{ padding: 20 }}
          fabStyle={{ backgroundColor: theme.colors.secondary800 }}
          icon={open ? "folder-plus" : "plus"}
          actions={[
            {
              icon: "flower-tulip",
              label: "New plant",
              onPress: () => console.log("Pressed star"),
            },
            {
              icon: "alarm-check",
              label: "New task",
              onPress: () => console.log("Pressed email"),
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
