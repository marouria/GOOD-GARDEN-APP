import React from "react";
import { View, Text } from "react-native";
import { Headline } from "react-native-paper";
import TaskForm from "../components/TaskForm";

interface Props {}

const NewTaskScreen = (props: Props) => {
  return (
    <View style={{ margin: 20 }}>
      <Headline>Create a new task</Headline>
      <TaskForm />
    </View>
  );
};

export default NewTaskScreen;
