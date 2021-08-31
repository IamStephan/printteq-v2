// Hack to get next to build with placholder images
require("sharp")

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["scontent.cdninstagram.com", "video.cdninstagram.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}
