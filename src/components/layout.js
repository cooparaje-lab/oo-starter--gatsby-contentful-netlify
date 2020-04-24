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
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </App>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const App = styled.div`
  ${tw`block min-h-screen pt-5 mt-8`}
`

const Main = styled.main`
  a {
    ${tw`pb-1 text-blue-500`}
  }
`

const Footer = styled.footer`
  ${tw`py-6 text-center`}
`

export default Layout
