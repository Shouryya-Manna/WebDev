import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function YoutubeForm() {
  const form = useForm();

  const { register, control, handleSubmit, formState } = form;

  const { name, ref, onChange, onBlur } = register("username");

  const {errors} = formState;

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4"
      >
        <label htmlFor="username" className="text-gray-700 font-medium">
          Username
        </label>
        <input
          type="text"
          id="username"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          {...register("username", { required: "Username is required" })}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <p className=" text-red-600 text-sm text-left">{errors.username?.message}</p>

        <label htmlFor="email" className="text-gray-700 font-medium">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email",
            },
          })}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <p className=" text-red-600 text-sm text-left">{errors.email?.message}</p>

        <label htmlFor="channel" className="text-gray-700 font-medium">
          Channel
        </label>
        <input
          type="text"
          id="channel"
          name="channel"
          {...register("channel", {
            required: "Channel is required",
          })}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <p className=" text-red-600 text-sm text-left">{errors.channel?.message}</p>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm;
