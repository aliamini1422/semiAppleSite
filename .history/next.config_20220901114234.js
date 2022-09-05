/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path: 'https://cdn.pixabay.com/photo/',
    domains: ["rb.gy","images.unsplash.com","cdn.pixabay.com"],
  },
};