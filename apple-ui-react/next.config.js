/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  assetPrefix:
    process.env === "production"
      ? "https://jon890.github.io/awesome-ui/apple-ui-react/dist/"
      : undefined,
};

module.exports = nextConfig;
