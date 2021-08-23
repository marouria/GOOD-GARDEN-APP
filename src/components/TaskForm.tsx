import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button, Headline, TextInput } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

type FormValues = {
  title: string;
  date: Date;
  time: number;
  plant: string;
};

const TaskForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data) => {
    alert("Task added to calendar");
    console.log(data);
  };

  const [dateValue, setDate] = useState(new Date());

  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Add a title"
            mode="outlined"
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

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <DateTimePicker
            testID="dateTimePicker"
            value={value}
            is24Hour={true}
            display="spinner"
            placeholderText="Select a date for this new task"
            onChange={(date) => onChange(date)}
          />
        )}
        name="date"
        rules={{ required: true }}
        defaultValue={new Date()}
      />
      {errors.title && <Headline>Title is required.</Headline>}

      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </View>
  );
};

export default TaskForm;
