/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['s3-us-west-2.amazonaws.com'],
},

  };

module.exports = nextConfig
