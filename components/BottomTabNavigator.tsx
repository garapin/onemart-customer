"use client";
import { DashboardIconSVG } from "@/assets/dashboard";
import { ProfileIconSVG } from "@/assets/profile";
import { ShopIconSVG } from "@/assets/shop";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const BottomTabNavigator = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg shadow-black p-4 flex justify-around">
      <div
        className="flex flex-col items-center text-sm cursor-pointer"
        onClick={() => router.push("/")}
      >
        <DashboardIconSVG
          className="w-6 h-6"
          color={pathname === "/" ? "#102CA0" : "#000"}
        />
        <p className={pathname === "/" ? "text-[#102CA0]" : "text-[#000]"}>
          Dashboard
        </p>
      </div>
      <div
        className="flex flex-col items-center text-sm cursor-pointer"
        onClick={() => router.push("/shop")}
      >
        <ShopIconSVG
          className="w-6 h-6"
          color={pathname === "/shop" ? "#102CA0" : "#000"}
        />
        <p className={pathname === "/shop" ? "text-[#102CA0]" : "text-[#000]"}>
          Shop
        </p>
      </div>
      <div
        className="flex flex-col items-center text-sm cursor-pointer"
        onClick={() => router.push("/profile")}
      >
        <ProfileIconSVG
          className="w-6 h-6"
          color={pathname === "/profile" ? "#102CA0" : "#000"}
        />
        <p
          className={pathname === "/profile" ? "text-[#102CA0]" : "text-[#000]"}
        >
          Profile
        </p>
      </div>
    </div>
  );
};

export default BottomTabNavigator;
