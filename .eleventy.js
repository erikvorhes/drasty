const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter('isoDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-MM-dd');
  });

  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('DDD');
  });

  eleventyConfig.addPassthroughCopy('css');

  let markdownIt = require('markdown-it');
  let markdownOpts = {
    html: false,
    typographer: true
  };
  eleventyConfig.setLibrary('md', markdownIt(markdownOpts));

  return {
    templateFormats: ['njk', 'md'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: false
  };
};
