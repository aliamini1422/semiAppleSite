/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: 'https://cdn.pixabay.com/photo/2018/05/08/21/28/',
    domains: ["rb.gy","images.unsplash.com","cdn.pixabay.com"],
  },
};