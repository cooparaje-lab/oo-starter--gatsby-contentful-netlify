/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import tw from "tailwind.macro"
import styled from "@emotion/styled"

const Layout = ({ children }) => {
  return (
    <>
      <App>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </App>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const App = styled.div`
  ${tw`block min-h-screen mt-16`}
`

export default Layout
