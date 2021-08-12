const exec = require("child_process").exec;

module.exports = {
  reactStrictMode: true,

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // convert less/css to simple strings (to embed in header, old school way!)
    config.module.rules.push({
      test: /\.(css|less)$/,
      use: [
        "to-string-loader",
        {
          loader: "css-loader",
          options: { esModule: false },
        },
        "less-loader",
      ],
    });

    // run the sitemap after every production build
    if (!dev && isServer) {
      config.plugins.push((compiler) => {
        compiler.hooks.afterEmit.tap("AfterEmitPlugin", (compilation) => {
          exec("npx next-sitemap", (err, stdout, stderr) => {
            if (stdout) process.stdout.write(stdout);
            if (stderr) process.stderr.write(stderr);
          });
        });
      });
    }
    return config;
  },
};
