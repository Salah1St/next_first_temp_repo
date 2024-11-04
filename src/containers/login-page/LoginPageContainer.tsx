import React from "react";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";

async function LoginPageContainer() {
  return (
    <div className="w-full h-full  flex justify-center">
      <LoginLeft />
      <LoginRight />
    </div>
  );
}

export default LoginPageContainer;
