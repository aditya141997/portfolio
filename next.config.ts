import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site (no API routes, no server actions, no dynamic data) - export
  // static HTML/CSS/JS instead of a Vercel serverless function. Without this, Next's
  // file tracing was bundling ~980MB of platform-specific SWC binaries into the
  // function, blowing past Vercel's 500MB function size limit for no functional reason.
  output: "export",
};

export default nextConfig;
