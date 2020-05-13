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
import "./darkTheme.css"

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
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 border-b border-gray-600 hover:text-red-600 hover:border-red-600"
          >
            santuan
          </a>
          en un Paraje Libre
          <b className="megamineria">La Vida vale más que la mega-minería</b>
        </Footer>
      </App>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const App = styled.div`
  ${tw`block min-h-screen pt-16`}
`

const Main = styled.main`
  ${tw`px-0`}

  a {
    ${tw`pb-1 text-indigo-500`}
  }
`

const Footer = styled.footer`
  ${tw`py-6 font-mono text-center`}
  body.dark & {
    ${tw`text-indigo-100`}
  }

  .megamineria {
    ${tw`block mt-3 text-teal-900 opacity-75`}
    body.dark & {
      ${tw`text-teal-500 opacity-100 `}
    }
  }
`

export default Layout
