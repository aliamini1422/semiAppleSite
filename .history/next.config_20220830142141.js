/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  images:{
    images: {
      domains: ["rb.gy", "cdn.sanity.io", "lh3.googleusercontent.com"],
    },
  }
}

module.exports = nextConfig