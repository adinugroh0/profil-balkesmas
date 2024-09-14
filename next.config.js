// next.config.js
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /pdfjs-dist\/build\/pdf\.worker\.min\.js$/,
        use: {
          loader: "worker-loader",
          options: { inline: true },
        },
      });
    }
    return config;
  },
};

module.exports = nextConfig;
