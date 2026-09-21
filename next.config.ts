import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // the pages are still static; /api/contact is the one server route
  // pin the workspace root so Next doesn't walk up into the home directory
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
