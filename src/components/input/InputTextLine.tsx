"use client";
import React from "react";
import "./inputTextLine.scss";

import { FieldValues, FormState, Path, UseFormRegister } from "react-hook-form";

interface props<TFieldValues extends FieldValues> {
  id: Path<TFieldValues>;
  title: string;
  placeHolder?: string;
  classNameTitle?: string;
  classNameInput?: string;
  type?: "text" | "password";
  register?: UseFormRegister<TFieldValues>;
  formState?: FormState<TFieldValues>;
  isRequire?: boolean;
}

function InputTextLine<TFieldValues extends FieldValues>(props: props<TFieldValues>) {
  const { title, placeHolder, classNameTitle, classNameInput, type = "text", register, formState, id, isRequire = false } = props;
  console.log(formState?.errors);
  //   =====================================> Render JSX <=====================================
  return (
    <div className="relative w-full flex flex-col gap-2 mb-4 has-content">
      <input
        id={id}
        {...register?.(id)}
        type={type}
        className={`effect-16 outline-none ${classNameInput ? classNameInput : ""}`}
        placeholder={placeHolder ? placeHolder : "test"}
      />
      <label htmlFor={id} className={` ${formState?.errors?.[id] ? "text-red-400" : "text-[#aaa]"}  ${classNameTitle ? classNameTitle : ""}`}>
        {title}
        {isRequire ? <span className=" text-primary-error-400">{" *"}</span> : ""}
      </label>
      <span className={` focus-border  ${formState?.errors?.[id] ? "bg-red-400 w-full h-[2px]" : " bg-[#4caf50]"}`}></span>
      <p className=" absolute left-0 bottom-[-12px] text-red-400 text-[8px]">{`${formState?.errors?.[id]?.message ?? ""}`}</p>
    </div>
  );
}

export default InputTextLine;
