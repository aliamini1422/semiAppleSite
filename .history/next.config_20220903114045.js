/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/',"https://raw.githubusercontent.com/lukef7fywmrp/apple-redesign-yt/main/public/"],
    domains: ["rb.gy","images.unsplash.com","cdn.pixabay.com"],
  },
};