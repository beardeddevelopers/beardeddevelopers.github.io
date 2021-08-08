module.exports = {
  reactStrictMode: true,

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // run the sitemap
    if (isServer && !dev) {
      require("next-sitemap");
    }
  },
};
