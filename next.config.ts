const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

const withPWA = require("next-pwa")({
  dest: "public",
  disableDevLogs: true,
});

const nextConfig = {
  compress: true,
  reactStrictMode: true,
  logging: false,
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "192.168.3.162" },
      { protocol: "http", hostname: "192.168.3.162", port: "3008" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "media.istockphoto.com" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "example.com" },
      { protocol: "https", hostname: "squchstorageaccount.blob.core.windows.net" },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = withNextIntl(withPWA(nextConfig));