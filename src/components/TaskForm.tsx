import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Platform, View } from 'react-native';
import { Button, Headline, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

type FormValues = {
  title: string;
  plant: string;
  date: Date;
};

interface TaskFormDateProps {
  onChange: any;
  value: Date;
}

const TaskFormDate = ({ onChange, value }: TaskFormDateProps) => {
  return (
    <DateTimePicker
      value={value}
      mode="date"
      is24Hour={true}
      display="spinner"
      onChange={onChange}
    />
  );
};

const TaskForm = () => {
  const navigation = useNavigation();

  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: { data: FormValues }) => {
    console.log(data);
    console.log(currentDate);
    navigation.goBack();
  };

  const onChangeDate = (event, selectedDate: Date) => {
    setCurrentDate(selectedDate);
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
            error={errors.title ? true : false}
          />
        )}
        name="title"
        rules={{ required: true }}
        defaultValue="Water my plant"
      />
      {errors.title && <Headline>Title is required.</Headline>}

      <TaskFormDate onChange={onChangeDate} value={currentDate} />
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </View>
  );
};

export default TaskForm;
