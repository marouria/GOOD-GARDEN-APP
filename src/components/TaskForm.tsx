import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Platform, View } from "react-native";
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
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data) => {
    alert("Task added to calendar");
    console.log(data);
  };

  const [date, setDate] = useState(new Date(1598051730000));
  console.log(date);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

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
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode="date"
        is24Hour={true}
        display="spinner"
        onChange={onChange}
      />

      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </View>
  );
};

export default TaskForm;
