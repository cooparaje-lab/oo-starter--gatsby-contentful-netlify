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
      <div className="block min-h-screen pt-10 bg-gray-900">
        <div>{children}</div>
        <footer className="flex flex-col justify-center px-2 py-6 pb-20 font-mono text-center text-gray-100 bg-gray-800">
          © {new Date().getFullYear()}, Realizado en un Paraje Libre
          <div>
            <HiCode className="inline-block mx-1 mb-1 text-lg " />
            <span className="mx-1">&</span>
            <AiOutlineHeart className="inline-block mx-1 mb-1 text-lg " />
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
