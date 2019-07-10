const fs = require('fs');
const postcss = require('postcss');

module.exports = function() {
  return ({ addBase }) => {
    const resetStyles = postcss.parse(fs.readFileSync(`${__dirname}/reset.css`, 'utf8'));
    addBase(resetStyles.nodes);
  };
};
