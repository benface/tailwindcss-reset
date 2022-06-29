# Opinionated Reset Plugin for Tailwind CSS

## Requirements

This plugin requires Tailwind CSS 1.2 or later, and is optimized for Tailwind CSS 3.x.

## Installation

```bash
npm install @benface/tailwindcss-reset
```

## Usage

```js
// tailwind.config.js
module.exports = {
  corePlugins: {
    preflight: true /* the plugin extends Preflight so make sure it is not disabled */,
  },
  plugins: [require("@benface/tailwindcss-reset")],
};
```

## What it does

- Makes everything `position: relative`, so that absolutely positioned elements are relative to their parent by default.
- Resets the `margin` and `padding` of all elements to `0`.
- Resets the `min-width` and `min-height` of all elements to `0`, since the default is `auto` which can cause overflow issues with flex items.
- Resets `border-radius` to `0`, `background-color` to `transparent`, and `background-image` to `none` on all elements, just in case.
- Sets better defaults for `background-position` (`center center`) and `background-repeat` (`no-repeat`).
- Makes some elements `display: block` by default (`button`, `input`, `select`, `textarea`, `label`, and `summary`).
- Makes the inheritable text properties (`color`, `font`, `text-align`, `text-transform`, and `letter-spacing`) inherit on form elements as well (`button`, `input`, etc.).
- Changes the default `overflow` on `svg` elements from `hidden` to `visible`, to prevent clipping their edges (notably in Safari).
- Removes opinionated styles set by user agent stylesheets and/or Preflight (see [`reset.css`](https://github.com/benface/tailwindcss-reset/blob/main/reset.css) to see them all).
- Enforces `display: none` on `[hidden]` elements by adding `!important` so that it cannot be overridden by utility classes.

## What it does _not_ do

- It doesn’t remove the default focus rings, as not all projects need custom focus styles.
- It doesn’t override the `font-weight: bolder` on `b` and `strong` elements.
- It doesn’t override the `font-style: italic` on `i` and `em` elements.
- It doesn’t override the `text-decoration: underline` on `u` and `ins` elements.
- It doesn’t override the `text-decoration: line-through` on `s`, `strike`, and `del` elements.
- It doesn’t override the `font-size` and positioning styles set by Preflight on `sub` and `sup` elements.
