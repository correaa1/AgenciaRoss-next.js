/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['s3-us-west-2.amazonaws.com'],
},
  // ...
  env: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  },
};


module.exports = nextConfig
