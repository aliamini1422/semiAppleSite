/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://cdn.pixabay.com/photo/2018/05/08/21/28/apple-3384010_1280.png',
    domains: ["rb.gy","images.unsplash.com","cdn.pixabay.com"],
  },
};