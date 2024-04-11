"use client";
import { GoogleIconSVG } from "@/assets/google";
import { PhoneIconSVG } from "@/assets/phone";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const router = useRouter();
  return (
    <div className="h-screen flex items-center justify-between flex-col py-6">
      <div></div>
      <div className="space-y-4 w-full p-6">
        <h1 className="text-lg text-center">Welcome Back</h1>
        <p className="text-sm text-center text-slate-600">
          Silahkan isi formulir dibawah ini
        </p>
        <div className="space-y-2 w-full">
          <p>Telepon</p>
          <div className="flex items-center gap-2 border p-2 rounded-lg shadow-sm w-full">
            <PhoneIconSVG className="w-6 h-6" />
            <input
              type="number"
              placeholder="Masukan Nomor Anda"
              className="focus:border-none focus:outline-none pr-4 py-1 w-full"
            />
          </div>
        </div>
        <button className="text-center w-full bg-primary text-white hover:bg-primary/80 py-4 rounded-lg">
          Login
        </button>
        <div className="flex items-center gap-2">
          <div className="w-full h-0.5 bg-slate-100"></div>
          <p className="px-4 text-slate-500">Or</p>
          <div className="w-full h-0.5 bg-slate-100"></div>
        </div>
        <button className="flex items-center justify-center w-full border py-4 rounded-full cursor-pointer">
          <GoogleIconSVG className="w-6 h-6" />
          <span>Login With Google</span>
        </button>
      </div>
      <p>
        Belum Punya Akun?{" "}
        <span
          className="text-primary cursor-pointer"
          onClick={() => router.push("/register")}
        >
          Daftar
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
