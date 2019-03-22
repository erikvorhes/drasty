const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter('isoDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-MM-dd');
  });

  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('DDD');
  });

  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('_redirects');

  const mdConfig = require('markdown-it')({
    html: true,
    typographer: true
  });
  mdConfig.use(require('markdown-it-attrs'));
  eleventyConfig.setLibrary('md', mdConfig);

  return {
    templateFormats: ['njk', 'md'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: false
  };
};
