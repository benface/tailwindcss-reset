# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project mostly adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.1.1] - 2022-06-29

### Fixed

- Removed useless `border-width: 0` declaration (it’s already in Preflight)

## [3.1.0] - 2022-06-29

### Added

- Added `cursor: pointer` to all types of `input` that are buttons, for consistency with `button`
- Overrode Preflight’s arbitrary `input` and `textarea` placeholder color with `color: inherit` and `opacity: 0.75`
- Made `color` inherit on `mark` elements instead of being `black` by default
- Made `text-align` inherit on `caption` elements instead of being `center` by default

Thank you so much to Sophia Michelle Andren for this release’s inspiration ❤️

## [3.0.0] - 2022-06-29

### Changed

- Updated for Tailwind 3.x

## [2.1.0] - 2020-08-04

### Added

- Added a rule to remove dotted outline in Firefox

### Fixed

- Fixed the bad `text-align` default for RTL languages (from `left` to `start`)

## [2.0.1] - 2020-02-14

### Added

- Added a reset for `th`’s `font-weight` (from `bold` to `inherit`) and `text-align` (from `center` to `inherit`)

## [2.0.0] - 2020-02-05

### Changed

- Changed to use Tailwind 1.2’s new plugin definition syntax

### Removed

- Removed the `background-position` and `background-repeat` declarations on `button` elements since Preflight doesn’t reset these properties anymore in Tailwind 1.2

## [1.0.2] - 2019-11-13

### Fixed

- Fixed the `background-position` and `background-repeat` resets on `button` elements (they weren’t taking effect due to a conflict with a Preflight rule)

## [1.0.1] - 2019-09-02

### Removed

- Removed `hr`’s margin reset since it is now built into Tailwind

## [1.0.0] - 2019-07-10

Initial release

[unreleased]: https://github.com/benface/tailwindcss-reset/compare/v3.1.1...HEAD
[3.1.1]: https://github.com/benface/tailwindcss-reset/compare/v3.1.0...v3.1.1
[3.1.0]: https://github.com/benface/tailwindcss-reset/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/benface/tailwindcss-reset/compare/v2.1.0...v3.0.0
[2.1.0]: https://github.com/benface/tailwindcss-reset/compare/v2.0.1...v2.1.0
[2.0.1]: https://github.com/benface/tailwindcss-reset/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/benface/tailwindcss-reset/compare/v1.0.2...v2.0.0
[1.0.2]: https://github.com/benface/tailwindcss-reset/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/benface/tailwindcss-reset/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/benface/tailwindcss-reset/releases/tag/v1.0.0
