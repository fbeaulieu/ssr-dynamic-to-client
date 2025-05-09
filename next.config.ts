import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  compiler: {
    removeConsole: false
  }
  /* config options here */
};

export default nextConfig;
