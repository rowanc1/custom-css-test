# MyST Book Theme Tailwind Quickstart

This repo demonstrates using Tailwind to style a MyST site. There are two different approaches shown here:

1. Pulling class names from MyST Markdown and building the corresponding CSS styles
2. Manually declaring styling in `style/index.css`

Both approaches are useful. (1) is particular helpful in styling elements by their position, such as content that is hard to _directly_ label.

## Usage

1. Run `npm install` in `style`, e.g.

```
env -C ./style -- npm install
```

2. Run `npm run build` in `style`, e.g.

```
env -C ./style -- npm run build
```

3. Run myst start in the top directory, e.g.

```
myst start
```
