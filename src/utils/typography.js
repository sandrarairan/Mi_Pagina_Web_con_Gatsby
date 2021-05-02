// src/utils/typography.js
import Typography from "typography"
import grandViewTheme from "typography-theme-grand-view"

const typography = new Typography(grandViewTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles()
  }

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
