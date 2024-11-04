import HomeContextProvider from "@/context/HomeContext";

import React from "react";

function SubdomainLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <HomeContextProvider>
      <MobileLayout>{children}</MobileLayout>
    </HomeContextProvider>
  );
}

export default SubdomainLayout;

function MobileLayout({ children }: { children: React.JSX.Element }) {
  return (
    <div className="w-screen flex justify-center bg-black">
      <div className="max-[500px]:w-full w-[500px] min-h-screen">{children}</div>
    </div>
  );
}
