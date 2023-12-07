/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
      },
      {
        protocol: 'https',
        hostname: 'www.jsonkeeper.com'
      },
      {
        protocol: 'https',
        hostname: 'a0.muscache.com'
      },
      {
        protocol: 'https',
        hostname: 'boweninteriors.com.au'
      },
      {
        protocol: 'https',
        hostname: 'images.contentful.com'
      }
    ],
  }
}

module.exports = nextConfig
