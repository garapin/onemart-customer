const withPWA = require("next-pwa")({
  dest: "public", // Direktori output untuk service worker dan manifest
  disable: process.env.NODE_ENV === "development", // Nonaktifkan PWA saat dalam mode pengembangan
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  // Tambahkan konfigurasi Next.js lainnya di sini jika diperlukan
});

module.exports = nextConfig;
