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
import { AiOutlineHeart } from "react-icons/ai"
import "./darkTheme.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="block min-h-screen pt-12 bg-gray-900">
        <div>{children}</div>
        <div className="py-6 pb-20 font-mono text-center text-gray-100 bg-gray-800">
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
            santuan
          </a>
          en un Paraje Libre
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
