/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { HiCode } from "react-icons/hi"

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import tw from "twin.macro"
import styled from "@emotion/styled"
import { AiOutlineHeart } from "react-icons/ai"
import "./darkTheme.css"

const Layout = ({ children }) => {
  return (
    <>
      <App>
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Realizado con{" "}
          <div>
            <HiCode className="inline-block mx-1 mb-1 text-lg " />
            <span className="mx-1">&</span>
            <AiOutlineHeart className="inline-block mx-1 mb-1 text-lg " />
          </div>
          por
          <a
            href="https://www.santuan.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 border-b border-gray-600 hover:text-red-600 hover:border-red-600"
          >
            stn9000
          </a>
          en un Paraje Libre <br />
          <b className="inline-block mt-1 text-green-500 megamineria">
            La+Vida+vale+más+que+la+mega-minería
          </b>
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

  body.resources-tables & {
    ${tw`pt-12`}
  }
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

  .mega {
    ${tw`block mt-3 text-teal-900 opacity-75`}
    body.dark & {
      ${tw`text-teal-500 opacity-100 `}
    }
  }
`

export default Layout
