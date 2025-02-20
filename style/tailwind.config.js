const mystTheme = require('@myst-theme/styles');

module.exports = {
  darkMode: 'class',
  content: [
	  // Include styles defined in the myst-theme package
	  ...mystTheme.content,
	  // Parse styles from our markup
	  "../content/**/*.md"
  ],
  theme: {
    extend: mystTheme.themeExtensions,
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: mystTheme.safeList,
};

