const md = require('markdown-it');
const mdAttrs = require('markdown-it-attrs');
const rss = require('@11ty/eleventy-plugin-rss');


const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter('isoDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-MM-dd');
  });

  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('DDD');
  });

  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('_redirects');

  const mdConfig = md({
    html: true,
    typographer: true
  });
  mdConfig.use(mdAttrs);
  eleventyConfig.setLibrary('md', mdConfig);

  eleventyConfig.addPlugin(rss);

  return {
    templateFormats: ['njk', 'md'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: false,
    passthroughFileCopy: true
  };
};
