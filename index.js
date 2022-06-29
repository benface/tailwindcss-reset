const plugin = require("tailwindcss/plugin");
const fs = require("fs");

module.exports = plugin(function ({ addBase, postcss }) {
  addBase(postcss.parse(fs.readFileSync(`${__dirname}/reset.css`, "utf8")));
});
