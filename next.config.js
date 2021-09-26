module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["admin.printteq.co.za"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}
