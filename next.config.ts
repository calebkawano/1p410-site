import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // no backend — the whole site ships as static HTML
  output: "export",
  // pin the workspace root so Next doesn't walk up into the home directory
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
