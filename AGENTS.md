# sidebar-menu-2-compostrap (sidebar-menu-custom)

A visual extension of `sidebar-menu-compostrap`: the links of the menu as pills, like the menu of the package `compostrap` (`sidebar-menu/_pills.scss` there). CSS only, loaded after the base menu.

## Layout

- `src/scss/components/_list.scss`: the pills; it reads the sizes of the base menu from `sidebar-menu-compostrap/src/scss/utils/variables`, so it needs a version of the base menu that has them.
- `src/scss/themes/_theme.scss`: the CSS variables `--sm-pill-*`.
- `dist/sidebar-custom.css` is versioned; `npm run build` writes it. `index.html` is the demo.

## How it works

- Links are pills inset from the sidebar edges. The current page on any level is a pill of the page background color (`--ds-body-bg` of the dashboard skeleton, else `--bs-tertiary-bg`), a hovered link a slightly weaker pill; a group holding the current page is not filled, so the menu never shows two selections.
- The gap between links is only above each link (no margin below), so no margins collapse: with collapsing margins a closing submenu (height 0, still shown) kept two margins and jumped by one of them at the end of its animation. The gap between a link and its open submenu is the top padding of the submenu, which the menu script slides to 0 with the height.
- The 1px line of the base menu on the left of an open submenu (`.list-hidden::before`) is turned off (`content: none`); the pills mark the submenu enough.
- The markup of the base menu stays as it is; nothing here needs another class.

## Commands

- `npm run dev`: the demo.
- `npm run build`: the CSS into `dist/`.
