import LoginPageContainer from "@/containers/login-page/LoginPageContainer";
import React from "react";

async function page() {
  return (
    <div className="w-full h-full  flex justify-center">
      <LoginPageContainer />
    </div>
  );
}

export default page;
