import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";

const Body3 = () => {
  const { register, control, handleSubmit } = useForm();

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          variant="outlined"
          {...register("name", { required: true, minLength: 6 })}
        />
        <TextField
          variant="outlined"
          {...register("email", { required: true })}
        />
        <Button type="submit">Enter</Button>
      </form>
    </div>
  );
};

export default Body3;

// <Controller
// name="email"
// type="email"
// control={control}
// render={({ field }) => (
//   <TextField
//     {...field}
//     variant="outlined"
//     type="email"
//     label="email"
//   />
// )}
// />
// <Controller
// name="userName"
// type="userName"
// control={control}
// render={({ field }) => (
//   <TextField
//     {...field}
//     variant="outlined"
//     type="userName"
//     label="userName"
//   />
// )}
// />
// <Controller
// name="password"
// type="password"
// control={control}
// render={({ field }) => (
//   <TextField
//     {...field}
//     variant="outlined"
//     type="password"
//     label="password"
//   />
// )}
// />
