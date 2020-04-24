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
import { TiHeartFullOutline } from "react-icons/ti"

const Layout = ({ children }) => {
  return (
    <>
      <App>
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Realizado con{" "}
          <TiHeartFullOutline className="inline-block mb-1 mr-1 text-lg text-red-600" />
          por
          <a
            href="https://www.santuan.com.ar/"
            className="ml-1 border-b border-gray-600 hover:text-red-600 hover:border-red-600"
          >
            santuan
          </a>
        </Footer>
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

const Main = styled.main`
  a {
    ${tw`pb-1 text-blue-500`}
  }
`

const Footer = styled.footer`
  ${tw`py-6 text-center`}
`

export default Layout
