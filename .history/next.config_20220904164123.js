/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    // loader: 'akamai',
    // path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/',
    domains: ["rb.gy","cdn.pixabay.com","upload.wikimedia.org", "cdn.sanity.io" ],
  },
};