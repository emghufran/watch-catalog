module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    // GitHub Pages serves project repos under /<repo-name>/, not the domain
    // root. This prefixes every link/asset path generated via the `url`
    // filter so they resolve correctly there (and still work at "/" if you
    // ever host this elsewhere without a subpath — just set this to "/").
    pathPrefix: "/watch-catalog/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
