/** @type {import('next').NextConfig} */
const path = require("path");

const { parsed: localEnv } = require("dotenv").config({
  path: path.resolve(__dirname, `.env.local`),
});

const nextConfig = {
  reactStrictMode: true,
  env: localEnv,
};

module.exports = nextConfig;

module.export = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};
