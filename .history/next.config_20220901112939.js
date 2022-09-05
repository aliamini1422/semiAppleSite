/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: 'https://cdn.pixabay.com/',
    domains: ["rb.gy","images.unsplash.com","cdn.pixabay.com"],
  },
};