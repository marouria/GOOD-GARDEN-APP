import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FAB, Portal, Provider } from "react-native-paper";
import { theme } from "../theme/theme";

interface Props {}

const CallToActionFab = (props: Props) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          visible
          style={styles.fab}
          icon={open ? "folder-plus" : "plus"}
          actions={[
            {
              icon: "alarm-check",
              label: "Task",
              onPress: () => console.log("Pressed star"),
            },
            {
              icon: "flower",
              label: "Plant",
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

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    marginRight: 20,
    right: 0,
    top: 30,
    color: theme.colors.primary900,
  },
});

export default CallToActionFab;
