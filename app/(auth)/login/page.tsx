"use client";
import { GoogleIconSVG } from "@/assets/google";
import { PhoneIconSVG } from "@/assets/phone";
import InputField from "@/components/InputField";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const router = useRouter();
  return (
    <div className="h-screen flex items-center justify-between flex-col py-6">
      <div></div>
      <div className="space-y-4 w-full p-6">
        <div className="flex justify-center  ">
          <img
            className="justify-center w-24 h-24"
            alt="Mask group"
            src="https://c.animaapp.com/3KnTqDg0/img/mask-group@2x.png"
          />
        </div>
        <h1 className="text-lg text-center font-medium">Welcome Back</h1>
        <p className="text-sm text-center text-slate-600">
          Silahkan isi formulir dibawah ini
        </p>
        <InputField
          label="Telepon"
          placeholder="Masukkan Nomor Anda"
          icon={<PhoneIconSVG className="w-6 h-6" />}
          type="number"
        />
        <button
          className="text-center w-full bg-primary text-white hover:bg-primary/80 py-4 rounded-lg"
          onClick={() => router.push("/")}
        >
          Login
        </button>
        <div className="flex items-center gap-2">
          <div className="w-full h-0.5 bg-slate-100"></div>
          <p className="px-4 text-slate-500">Or</p>
          <div className="w-full h-0.5 bg-slate-100"></div>
        </div>
        <button
          onClick={() => router.push("/loginwithgoogle")}
          className="flex items-center justify-center w-full border py-4 rounded-full cursor-pointer gap-2"
        >
          <GoogleIconSVG className="w-6 h-6" />
          <span>Login With Google</span>
        </button>
      </div>
      <p>
        Belum Punya Akun?{" "}
        <span
          className="text-primary cursor-pointer font-medium"
          onClick={() => router.push("/register")}
        >
          Daftar
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
