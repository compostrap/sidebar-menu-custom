## Sidebar menu custom
An enhanced, modern visual extension for the sidebar menu with advanced styling capabilities.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/compostrap/sidebar-menu-custom/blob/master/license)
[![npm version](https://badge.fury.io/js/sidebar-menu-2-compostrap.svg)](https://badge.fury.io/js/sidebar-menu-2-compostrap)
[![Build status](https://github.com/compostrap/sidebar-menu-custom/actions/workflows/build.yml/badge.svg)](https://github.com/compostrap/sidebar-menu-custom/actions/workflows/build.yml)

## Installation
```bash
npm install sidebar-menu-2-compostrap
```

## Usage
Load the base sidebar menu styles first, then the custom extension styles:

```javascript
import 'sidebar-menu-compostrap/sidebar-menu.css';
import 'sidebar-menu-2-compostrap/sidebar-custom.css';
```

## Key Features
Compared to the standard menu, this custom version provides:
- **Modern Visuals:** Subtle background tints for first-level links and smooth transitions.
- **Improved Layout:** Precise pixel-perfect alignment for rotating arrows in submenus.
- **Theme Optimized:** Specifically tuned background opacities for both light and dark modes.
- **CSS Variables:** Unified styling through global variables (e.g., `--sm-modern-border-radius`).

## Themes
Full support for Bootstrap **Light** and **Dark** themes out of the box.

```html
<html lang="en" data-bs-theme="light">
```

This package is only a visual extension of `sidebar-menu-compostrap`. It does not replace the base menu theme logic.

The base sidebar menu still controls link and arrow colors. This custom package adds subtle first-level backgrounds, Bootstrap primary icon highlighting, border styling, and layout refinements.

## Demo
- [Live demo](https://compostrap.github.io/sidebar-menu-custom)
