module.exports = {
  siteUrl: process.env.SITE_URL || "https://beardeddevelopers.com",
  generateRobotsTxt: true,
  transform: async (config, path) => {
    // are we ignoring this page?
    // TODO: lookup frontmatter to ignore
    //

    // default transformation for all other cases
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
