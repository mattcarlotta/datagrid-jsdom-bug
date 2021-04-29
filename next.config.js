const ContextReplacementPlugin = require("webpack").ContextReplacementPlugin;
const open = require("opener");

const { analyze, CLIENT, INDEVELOPMENT } = process.env;

/* opens a browser window */
if (INDEVELOPMENT) setTimeout(() => open(CLIENT), 1000);

module.exports = {
  webpack(config) {
    /* adds custom plugins to client and server */
    config.plugins.push(
      ...[new ContextReplacementPlugin(/moment[\/\\]locale/, /\b\B/)].filter(
        Boolean
      )
    );

    /* return new config to next */
    return config;
  }
};
