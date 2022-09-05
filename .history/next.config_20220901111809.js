/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { images: { allowFutureImage: true } }
  images: {
    
    domains: ["rb.gy","images.unsplash.com","cdn.pixabay.com"],
  },
};