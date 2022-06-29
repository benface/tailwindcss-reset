const cssMatcher = require("jest-matcher-css");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const fs = require("fs");
const resetPlugin = require("./index.js");

const generatePluginCss = () => {
  return postcss(
    tailwindcss({
      corePlugins: false,
      plugins: [resetPlugin],
    })
  )
    .process("@tailwind base; @tailwind utilities; @tailwind components;", {
      from: undefined,
    })
    .then((result) => {
      return result.css;
    });
};

expect.extend({
  toMatchCss: cssMatcher,
});

test("the plugin generates the expected CSS", () => {
  return generatePluginCss().then((css) => {
    expect(css).toMatchCss(`
      ${fs.readFileSync(`${__dirname}/reset.css`, "utf8")}
    `);
  });
});
