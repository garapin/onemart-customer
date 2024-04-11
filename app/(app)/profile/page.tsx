"use client";
import { BarcodeIconSVG } from "@/assets/barcode";
import { BuildingIconSVG } from "@/assets/building";
import { EditIconSVG } from "@/assets/edit";
import { GlobeIconSVG } from "@/assets/globe";
import { LocationIconSVG } from "@/assets/location";
import { LogoutIconSVG } from "@/assets/log-out";
import { MapPinIconSVG } from "@/assets/map-pin";
import { StoreFrontIconSVG } from "@/assets/store-front";
import ProfileItem from "@/components/ProfileItem";
import { useRouter } from "next/navigation";
import React from "react";

const Profile = () => {
  const router = useRouter();
  const menus = [
    {
      title: "APARTEMEN",
      description: "Apartment Buah Batu",
      icon: <StoreFrontIconSVG className="w-7 h-7" />,
      type: "edit",
      action: () => console.log("edit"),
    },
    {
      title: "ALAMAT",
      description: "Apartment Buah Batu",
      icon: <LocationIconSVG className="w-7 h-7" />,
      type: "edit",
      action: () => console.log("edit"),
    },
    {
      title: "Keterangan Alamat",
      description: "Apartment Buah Batu",
      icon: <MapPinIconSVG className="w-7 h-7" />,
      type: "edit",
      action: () => console.log("edit"),
    },
    {
      title: "Kota",
      description: "Apartment Buah Batu",
      icon: <BuildingIconSVG className="w-7 h-7" />,
      type: "detail",
      action: () => console.log("detail"),
    },
    {
      title: "Negara",
      description: "Apartment Buah Batu",
      icon: <GlobeIconSVG className="w-7 h-7" />,
      type: "detail",
      action: () => console.log("detail"),
    },
    {
      title: "Kode POS",
      description: "Apartment Buah Batu",
      icon: <BarcodeIconSVG className="w-7 h-7" />,
      type: "edit",
      action: () => console.log("edit"),
    },
    {
      title: "Log Out",
      icon: <LogoutIconSVG className="w-7 h-7" />,
      type: "logout",
      action: () => router.push("/login"),
    },
  ];
  return (
    <div>
      <div className="bg-gradient-to-r from-[#373B44] to-[#0C2BAA] p-6 mb-2">
        <div className="flex items-center gap-4">
          <img
            src="https://ffis3.is3.cloudhost.id/profile/photo/1598/raditya-dika.jpg"
            alt="profile"
            className="w-24 h-24 rounded-full"
          />
          <div>
            <div className="flex items-center gap-4 mb-2">
              <p className="text-white font-semibold text-lg">Raditya Dika</p>
              <EditIconSVG className="w-6 h-6" color="white" />
            </div>
            <p className="text-slate-300 text-sm">ghaluhwizz@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-6">
        {menus.map((menu, index) => (
          <ProfileItem key={index} {...menu} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
