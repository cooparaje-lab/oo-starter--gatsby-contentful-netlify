import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import Logos from "../assets/logo-coparaje.svg"
//import ThemeToggler from "../components/themeToggler"
import "./header.css"
import { BiSend } from "react-icons/bi"
const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles className="bg-green-500">
    <div className="flex items-center justify-start w-full px-3 py-2 mx-auto md:justify-center ">
      <div className="flex items-center font-sans text-xl font-bold isologo md:absolute left-2 ">
        <Logos className="duration-700 w-9 " />
        <Link className="inline-block ml-3 font-serif text-lg font-bold duration-700 opacity-80 hover:opacity-100" to="/">
          {siteTitle}
        </Link>
      </div>
      <nav className="flex justify-center pl-6 mx-3 border-l border-gray-800">
        <Link partiallyActive={true} activeClassName="active" to="/espacios">
          Espacios
        </Link>
        <Link partiallyActive={true} activeClassName="active" to="/recursos">
          Recursos
        </Link>
        <Link partiallyActive={true} activeClassName="active" to="/etiquetas">
          Etiquetas
        </Link>
      </nav>

      <Link
        partiallyActive={true}
        activeClassName="opacity-0"
        to="/sumar"
        className="fixed inline-flex transition-opacity duration-700 transform -translate-x-16 rounded-md shadow-sm top-2 md:top-1 right-1 md:-translate-x-0"
      >
        <span className="inline-flex items-center px-2 py-1 font-mono text-base font-bold leading-6 text-yellow-800 transition duration-150 ease-in-out bg-yellow-500 border border-yellow-400 rounded-md hover:text-yellow-700 focus:border-yellow-300">
          <BiSend className="mr-2 text-xl text-yellow-800" />
          <span className="inline-block">Sumar</span>
        </span>
        <span className="absolute top-0 right-0 flex w-3 h-3 -mt-1 -mr-1">
          <span className="absolute inline-flex w-full h-full bg-green-300 rounded-full opacity-75 animate-ping"></span>
          <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full"></span>
        </span>
      </Link>
    </div>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
