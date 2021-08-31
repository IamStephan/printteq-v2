// Hack to get next to build with placholder images
const { withPlaiceholder } = require("@plaiceholder/next")

module.exports = withPlaiceholder({
  reactStrictMode: true,
  images: {
    domains: ["scontent.cdninstagram.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
})
