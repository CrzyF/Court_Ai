/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/SignIn',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
