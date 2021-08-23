import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Headline, TextInput } from "react-native-paper";

const TaskForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [text, setText] = useState();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <TextInput
      label=""
      value="test"
      {...register("exampleRequired", { required: true })}
    />
  );
};

export default TaskForm;
