"use client";
import { EyeIconSVG } from "@/assets/eye";
import { LocationIconSVG } from "@/assets/location";
import { LockIconSVG } from "@/assets/lock";
import { MailIconSVG } from "@/assets/mail";
import { PhoneIconSVG } from "@/assets/phone";
import InputField from "@/components/InputField";
import SelectOption from "@/components/SelectOption";
import { useRouter } from "next/navigation";
import React from "react";

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();
  return (
    <div className="p-6 space-y-4">
      <h1 className="font-medium text-lg">Register</h1>
      <p className="text-slate-500">Silahkan isi formulir dibawah ini </p>
      <InputField
        label="Nama Lengkap"
        placeholder="Masukan Nama Anda"
        icon={<MailIconSVG className="w-6 h-6" />}
        required
      />
      <InputField
        label="Email"
        placeholder="Masukkan Nomor Anda"
        icon={<MailIconSVG className="w-6 h-6" />}
        required
      />
      <InputField
        label="Telepon"
        placeholder="Masukkan Nomor Anda"
        icon={<PhoneIconSVG className="w-6 h-6" />}
        type="number"
      />
      <InputField
        label="Password"
        placeholder="Masukan Password Anda"
        icon={<LockIconSVG className="w-6 h-6" />}
        type={showPassword ? "text" : "password"}
        required
        endIcon={
          <EyeIconSVG
            className="w-6 h-6 cursor-pointer"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
        }
      />
      <InputField
        label="Alamat"
        placeholder="Masukkan Alamat Anda"
        icon={<LocationIconSVG className="w-6 h-6" />}
        required
        multiline
      />
      <div className="flex items-center gap-2">
        <div className="space-y-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Location_map_Jakarta.png"
            alt="jakarta"
            className="w-16 h-16 min-w-16 object-cover"
          />
          <p className="text-primary font-medium text-sm text-center">Lihat</p>
        </div>
        <div>
          <p className="font-medium">Bandung</p>
          <p className="text-base text-slate-600">
            Komplek Griya Bandung Indah Blok. K21. Desa Buah batu, Kecamatan
            Bojongsoang, Kabupaten Bandung
          </p>
        </div>
      </div>
      <SelectOption label="Kota" placeholder="Pilih Kota Anda" />
      <SelectOption label="Negara" placeholder="Pilih Negara Anda" />
      <InputField label="Kode Pos" placeholder="Masukan Kode Pos" />
      <button className="text-center w-full bg-primary text-white hover:bg-primary/80 py-4 rounded-lg">
        Register
      </button>
      <p className="text-center">
        Sudah Punya Akun?{" "}
        <span
          className="text-primary cursor-pointer font-medium"
          onClick={() => router.push("/login")}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Register;
