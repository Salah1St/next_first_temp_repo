"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputTextLine from "@/components/input/InputTextLine";
import { login } from "@/redux/slice/authSlice";
import { useAppDispatch } from "@/hooks/useRedux";

interface FormValues {
  username: string;
  password: string;
}
function FormLogin({ className }: { className?: string }) {
  const dispatch = useAppDispatch();

  const [show, setShow] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("This field is required").min(10),
    password: yup.string().required("This field is required").min(10),
  });
  const hookForm = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      dispatch(login(data));
    } catch (error) {}
  };

  return (
    <form className={`w-full flex flex-col gap-8  p-4 select-none ${className}`} onSubmit={hookForm.handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 px-10">
        <InputTextLine id="username" title={"username"} {...hookForm} />
        <InputTextLine id="password" type="password" title={"password"} {...hookForm} />
        <div className="flex justify-end ">
          <p role="button" className=" active:text-info text-xs underline  ">
            {"forgot password"}
          </p>
        </div>
      </div>
      <button type="submit">{"Next"}</button>
    </form>
  );
}

export default FormLogin;
