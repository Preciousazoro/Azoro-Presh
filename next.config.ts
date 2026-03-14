import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "**",
      },
    ],
    // Increase timeout for external images
    minimumCacheTTL: 60,
    // Disable optimization for external images to avoid timeouts
    unoptimized: true,
  },
};

export default nextConfig;






// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
