/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {      
  AWS_ACCESS_KEY_ID:'AKIAXDUQFXWUIOQM5SWP',      
  AWS_SECRET_ACCESS_KEY:'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',  
  AWS_REGION: 'us-east-1',
      SES_EMAIL: 'agencia.ross2023@gmail.com',
    },
  };

module.exports = nextConfig
