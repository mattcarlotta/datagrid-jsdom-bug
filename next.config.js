const ContextReplacementPlugin = require("webpack").ContextReplacementPlugin;
const open = require("opener");

/* opens a browser window */
if (process.env.NODE_ENV === "development")
  setTimeout(() => open("http://localhost:3000"), 1000);

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
