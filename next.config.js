/** @type {import('next').NextConfig} */
const path = require("path");

const { parsed: localEnv } = require("dotenv").config({
  path: path.resolve(__dirname, `.env.local`),
});

const nextConfig = {
  reactStrictMode: true,
  // Set up environment variables
  env: localEnv,
  // Set up image optimization
  images: {
    domains: ["d3t3ozftmdmh3i.cloudfront.net"],
  },
  // SASS
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  // Bypass CORS
  async rewrites() {
    return [
      {
        source: "/api/subscriber",
        destination: "https://api.getresponse.com/contacts",
      },
    ];
  },
};

module.exports = nextConfig;
