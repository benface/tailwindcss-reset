# Opinionated Reset Plugin for Tailwind CSS

## Requirements

This plugin requires Tailwind CSS 1.2 or later. If your project uses an older version of Tailwind, you should install the latest 1.x version of this plugin (`npm install @benface/tailwindcss-reset@1.x`).

## Installation

```bash
npm install @benface/tailwindcss-reset
```

## Usage

```js
// tailwind.config.js
module.exports = {
  corePlugins: {
    preflight: true, /* the plugin extends Preflight so make sure it is not disabled */
  },
  plugins: [
    require('@benface/tailwindcss-reset'),
  ],
};
```

## What it does

A few things:

- Makes everything `position: relative`, so that absolutely positioned elements are relative to their parent by default
- Resets the `min-width` and `min-height` of all elements to `0`, since the default is `auto` which can cause overflow issues with flex items
- Changes `background-position`’s default value from `left top` to `center center`
- Changes `background-repeat`’s default value from `repeat` to `no-repeat`
- Removes default styles on form elements (border radius, background color, inherit all the font/text properties that usually inherit, etc.)
- Removes other opinionated styles set by user agent stylesheets (see `reset.css` to see them all)
- Enforces `display: none` on `[hidden]` elements by adding `!important` so that it is not overridden by utility classes
