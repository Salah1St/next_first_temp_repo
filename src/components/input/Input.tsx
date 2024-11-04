"use client";

import EyeIcon from "@/asset/icons/EyeIcon";
import React, { useState } from "react";

import { FieldValues, FormState, Path, UseFormRegister } from "react-hook-form";

interface props<TFieldValues extends FieldValues> {
  id: Path<TFieldValues>;
  placeHolder: string;
  className?: string;
  type?: "text" | "password";
  register?: UseFormRegister<TFieldValues>;
  formState?: FormState<TFieldValues>;
}

function Input<TFieldValues extends FieldValues>(props: props<TFieldValues>) {
  const { placeHolder, className, type = "text", register, formState, id } = props;
  const [toggle, setToggle] = useState(false);
  //   =====================================> Render JSX <=====================================
  return (
    <div className="relative flex flex-col gap-2 pb-4 ">
      <input
        id={id}
        {...register?.(id)}
        type={toggle ? "text" : type}
        className={`w-full  border-b-2 border-slate-300 outline-none px-2 text-base  ${formState?.errors?.[id] ? " border-primary-error-400" : ""} ${className ? className : ""}`}
        placeholder={placeHolder ? placeHolder : ""}
      />
      {type === "password" ? (
        <div className="absolute right-0" onClick={() => setToggle((p) => !p)}>
          <EyeIcon size="16px" />
        </div>
      ) : (
        ""
      )}
      <p
        className={`absolute bottom-0 h-4  px-2 text-primary-error-400 text-xs font-extralight bg-white rounded-b-xl rounded-tr-xl  ${!formState?.errors?.[id] ? "" : "invisible"}`}
      >
        {`${formState?.errors?.[id]?.message ?? " "}`}
      </p>
    </div>
  );
}

export default Input;
