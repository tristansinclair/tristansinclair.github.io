/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/tldr": { page: "/tldr" },
    };
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
