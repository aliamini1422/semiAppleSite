/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: 'https://rb.gy/vsvv2o',
    domains: ["rb.gy","images.unsplash.com","cdn.pixabay.com"],
  },
};