const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

const withTelefunc = require('telefunc/next').default

module.exports = withTelefunc(nextConfig)
