import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/web2",
  assetPrefix: "./web2", // Required for GitHub Pages
};

export default nextConfig;
