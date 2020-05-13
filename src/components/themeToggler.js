import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class ThemeTogglerComponent extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label
            className="switch top-right"
            for="theme-toggle"
            aria-hidden="true"
          >
            <input
              type="checkbox"
              aria-labelledby="theme-toggle"
              id="theme-toggle"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            <span class="slider"></span>
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default ThemeTogglerComponent
