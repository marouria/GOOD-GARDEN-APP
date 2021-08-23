import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button, Headline, TextInput } from "react-native-paper";
import AppLayout from "./AppLayout";

type FormValues = {
  title: string;
  date: Date;
  time: number;
  plant: string;
};
const TaskForm = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data) => console.log(data);

  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Add a title"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={{ padding: 10 }}
          />
        )}
        name="title"
        rules={{ required: true }}
        defaultValue="Water my plant"
      />
      {errors.title && <Headline>Title is required.</Headline>}
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </View>
  );
};

export default TaskForm;
