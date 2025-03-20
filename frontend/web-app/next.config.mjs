/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    remotePatterns: [
      {protocol: "https", hostname: "pixabay.com"},
      {protocol: "https", hostname: "cdn.pixabay.com"}
    ]
  },
  output: 'standalone'
};

export default nextConfig;
