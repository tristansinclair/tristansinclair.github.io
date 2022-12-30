/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/", query: { __nextDefaultLocale: "en" } },
    };
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
