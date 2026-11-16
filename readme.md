## Sidebar menu custom

Menu links as pills: a visual extension of the sidebar menu.

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

The demo uses `theme-switcher-compostrap` with Font Awesome icons:

```javascript
import 'theme-switcher-compostrap/theme-switcher.css';
import { ThemeSwitcher } from 'theme-switcher-compostrap';

new ThemeSwitcher({
	lightIcon: 'fa-solid fa-sun',
	darkIcon: 'fa-solid fa-moon',
}).initialize();
```

## Key Features

Compared to the standard menu, this custom version provides:

- **Pills:** links are pills inset from the sidebar edges, with a small gap between them.
- **Current page:** the current page on any level is in a pill of the page background color (`--ds-body-bg` of the dashboard skeleton, else `--bs-tertiary-bg`); a group holding it is not filled.
- **Hover:** a hovered link gets a slightly weaker pill.
- **CSS variables:** `--sm-pill-border-radius`, `--sm-pill-icon-color`, `--sm-pill-link-bg` and `--sm-pill-hover-bg`.

## Themes

Full support for Bootstrap **Light** and **Dark** themes out of the box.

```html
<html lang="en" data-bs-theme="light">
```

This package is only a visual extension of `sidebar-menu-compostrap`. It does not replace the base menu theme logic.

The base sidebar menu still controls link and arrow colors. This custom package adds the pills only.
Use `theme-switcher-compostrap` when you want to switch the global Bootstrap theme from the UI.

## Demo

- [Live demo](https://compostrap.github.io/sidebar-menu-custom)
