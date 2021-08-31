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

  const [date, setDate] = useState(new Date());
  console.log(date);

  const onChangeDate = (event, selectedDate) => {
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

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <DateTimePicker
            testID="dateTimePicker"
            value={value}
            mode="date"
            is24Hour={true}
            onChange={onChangeDate}
            display="spinner"
          />
        )}
        name="date"
      />
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </View>
  );
};

export default TaskForm;
