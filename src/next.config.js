const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const webpack = require("webpack");
const path = require("path");

module.exports = withFonts(
withCSS(
withImages(
withSass({
webpack(config, options) {
config.module.rules.push({
test: /.(eot|ttf|woff|woff2)$/,
use: {
loader: "url-loader",
},
});
config.resolve.modules.push(path.resolve("./"));
return config;
},
sassOptions: {
includePaths: [path.join(__dirname, 'styles')],
}
})
)
)
);
package info ,

"@zeit/next-css": "^1.0.1",
"@zeit/next-sass": "^1.0.1",
"next-fonts": "^1.4.0",
"node-sass": "^4.14.1",
"webpack": "^4.44.1",
"next-compose-plugins": "^2.2.0",
"next-images": "^1.3.1",