/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,  
    swcMinify: true,
  	async rewrite() {
      return [
        {
          source: "/api/:path*",
          destination: "https://friends.roblox.com"
        }
      ]
    }};

export default nextConfig;
