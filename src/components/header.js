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
    <div className="flex items-center justify-start w-full max-w-full px-3 pt-2 pb-3 mx-auto duration-1000 md:justify-center inner-wrapper">
      <div className="flex items-center font-sans text-xl font-bold isologo ">
        
        <Link
          className="inline-flex items-center justify-center ml-3 font-serif text-lg font-bold duration-700 md:text-2xl opacity-80 hover:opacity-100"
          to="/"
        >
          <Logos className="mr-2 duration-700 transform -rotate-90 w-9 " />
          <span className="sr-only">{siteTitle}</span>
        </Link>
      </div>
      <nav className="flex items-center justify-end w-full pl-6 mx-3 border-l border-gray-800">
        <Link partiallyActive={true} activeClassName="active" to="/espacios">
          Espacios
        </Link>
        <Link partiallyActive={true} activeClassName="active" to="/recursos">
          Recursos
        </Link>
        <Link partiallyActive={true} activeClassName="active" to="/etiquetas">
          Etiquetas
        </Link>
        <Link partiallyActive={true} activeClassName="active" to="/buscar">
          Buscar
        </Link>
      </nav>

      <Link
        partiallyActive={true}
        activeClassName="opacity-0"
        to="/sumar"
        className="relative top-0 inline-flex transition-opacity duration-700 transform -translate-x-16 rounded-md shadow-sm right-1 md:-translate-x-0"
      >
        <span className="btn yellow !px-2 !py-2 !text-sm">
          <BiSend className="mr-2 text-xl text-yellow-800 transform -rotate-90" />
          <span className="inline-block">Sumar</span>
        </span>
        <span className="absolute top-0 right-0 flex w-3 h-3 -mt-1 -mr-1">
          <span className="absolute inline-flex w-full h-full bg-indigo-300 rounded-full opacity-75 animate-ping"></span>
          <span className="relative inline-flex w-3 h-3 bg-indigo-500 rounded-full"></span>
        </span>
      </Link>
      <Link
        partiallyActive={true}
        activeClassName="opacity-100"
        to="/sumar"
        className="absolute inline-flex transition-opacity duration-700 transform -translate-x-16 rounded-md shadow-sm opacity-0 top-2 right-4 md:-translate-x-0"
      >
        <span className="btn green !px-2 !py-2 !text-sm">
          <BiSend className="mr-2 text-xl text-green-800 transform rotate-90" />
          <span className="inline-block">Sumar</span>
        </span>
        <span className="absolute top-0 right-0 flex w-3 h-3 -mt-1 -mr-1">
          <span className="absolute inline-flex w-full h-full bg-green-100 rounded-full opacity-75 animate-ping"></span>
          <span className="relative inline-flex w-3 h-3 bg-green-200 rounded-full"></span>
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
