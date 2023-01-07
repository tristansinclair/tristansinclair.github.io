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

// export default {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.mdx?$/,
//       use: [
//         options.defaultLoaders.babel,
//         {
//           loader: "@mdx-js/loader",
//           options: {
//             providerImportSource: "@mdx-js/react",
//           },
//         },
//       ],
//     });

//     return config;
//   },
//   reactStrictMode: true,
//   pageExtensions: ["js", "jsx", "md", "mdx"],
// };

module.exports = nextConfig;
