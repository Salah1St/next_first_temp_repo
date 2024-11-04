import React from "react";
import FormLogin from "./loginForm/FormLogin";

function LoginComponents() {
  return (
    <div className="w-4/5 h-1/2 flex justify-center items-center rounded-xl backdrop-blur-3xl bg-[rgba(255,255,255,0.2)] p-4">
      <FormLogin />
    </div>
  );
}

export default LoginComponents;
