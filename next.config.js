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
      "/nil": { page: "/nil" },
      "/tldr": { page: "/tldr" },
      "/cs247b": { page: "/cs247b" },
      "/tldr/advertising": { page: "/tldr/advertising" },
    };
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
