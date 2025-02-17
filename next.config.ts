const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

const withPWA = require("next-pwa")({
  dest: "public",
  disableDevLogs: true,
});

  
// module.exports = withPWA({
//   reactStrictMode: true,
//   logging: false,
//   images: {
//     domains: ["192.168.3.162", "res.cloudinary.com", "source.unsplash.com"],
//   },
//   // dest: "public",
//   // handler: "NetworkFirst",
//   // disable: process.env.NODE_ENV === "development",
//   // register: true,
//   // skipWaiting: true,
// });

const nextConfig = {
  reactStrictMode: true,
  logging: false,
  images: {
    domains: ["192.168.3.162", "res.cloudinary.com", "source.unsplash.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = withNextIntl(withPWA(nextConfig));