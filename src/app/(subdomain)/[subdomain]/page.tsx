import images from "@/asset/images";
import ProfileComponents from "@element/ProfileComponents";
import Redirect from "@element/Redirect";
import Image from "next/image";

import React from "react";
async function page() {
  return (
    <div className="w-full min-h-screen ">
      <ProfileComponents />
    </div>
  );
}

export default page;
