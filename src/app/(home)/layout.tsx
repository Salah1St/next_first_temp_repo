import HomeContextProvider from "@/context/HomeContext";

import React from "react";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return <HomeContextProvider>{children}</HomeContextProvider>;
}

export default DashboardLayout;
