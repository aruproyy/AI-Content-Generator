"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"; // Import useRouter
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    console.log(path);
  }, [path]);

  const handleMenuClick = (menuPath: string) => {
    router.push(menuPath); // Navigate to the selected path
  };

  return (
    <div className="h-screen relative p-5 shadow-sm border">
      <div className="flex justify-center">
        <Image src={"/logo.png"} alt="logo" width={140} height={140} />
      </div>
      <hr className="my-6 border" />

      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex gap-2 mb-2 p-3 
            hover:bg-[#6C3428] hover:text-white rounded-lg
            cursor-pointer items-center ${path === menu.path && 'bg-[#6C3428] text-white'}`}
            onClick={() => handleMenuClick(menu.path)} // Add onClick handler
          >
            <menu.icon />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
