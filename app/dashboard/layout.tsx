"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<number>(0); // Use primitive number
  const [updateCreditUsage, setupdateCreditUsage] = useState<any>(null); // Set a default value, e.g., null

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UpdateCreditUsageContext.Provider value={{ updateCreditUsage, setupdateCreditUsage }}>
        <div className="bg-gradient-to-b from-[#DFA878] to-[#F1C27B] h-full min-h-screen">
          <div className="md:w-64 hidden md:block fixed">
            <SideNav />
          </div>
          <div className="md:ml-64">
            <Header />
            <main>{children}</main> {/* Wrap children in a main tag for semantic HTML */}
          </div>
        </div>
      </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default Layout;
