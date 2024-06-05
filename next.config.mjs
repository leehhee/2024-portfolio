/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kimbangul.github.io',
        port: '',
        pathname: '/cdn/**',
      },
      {
        protocol: 'https',
        hostname: 'velog.velcdn.com',
        port: '',
      },
    ],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920],
    // imageSizes: [16, 32, 48, 64, 96, 112, 128],
  },

  // svg to component
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'video',
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
