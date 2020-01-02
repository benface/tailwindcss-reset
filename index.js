const plugin = require('tailwindcss/plugin');
const postcss = require('postcss');
const fs = require('fs');

module.exports = plugin(function({ addBase }) {
  const resetStyles = postcss.parse(fs.readFileSync(`${__dirname}/reset.css`, 'utf8'));
  addBase(resetStyles.nodes);
});
