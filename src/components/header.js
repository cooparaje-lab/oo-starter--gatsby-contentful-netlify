import styled from "@emotion/styled"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import tw from "twin.macro"
import Logos from "../assets/logo-coparaje.svg"
//import ThemeToggler from "../components/themeToggler"
import "./header.css"
import { RiSendPlaneFill } from "react-icons/ri"
const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles className="bg-green-500">
    <InnerWrapper>
      <Logo className="isologo ">
        <Logos className="w-8 duration-700 " />
        <Link className="inline-block ml-3 text-base " to="/">
          {siteTitle}
        </Link>
      </Logo>
      <Nav>
        <Link partiallyActive={true} activeClassName="active" to="/espacios">
          Espacios
        </Link>
        <Link partiallyActive={true} activeClassName="active" to="/recursos">
          Recursos
        </Link>
        <Link partiallyActive={true} activeClassName="active" to="/buscar">
          Buscador
        </Link>
        <Link partiallyActive={true} activeClassName="active" to="/etiquetas">
          Etiquetas
        </Link>
        <Link
          partiallyActive={true}
          activeClassName="active "
          className="license"
          to="/licencia"
        >
          Licencia
        </Link>
      </Nav>

      <Link
        partiallyActive={true}
        activeClassName="opacity-0"
        to="/sumar"
        className="relative inline-flex transition-opacity duration-700 transform -translate-x-12 rounded-md shadow-sm md:-translate-x-0"
      >
        <span className="inline-flex items-center px-3 py-1 font-mono text-base font-bold leading-6 text-yellow-800 transition duration-150 ease-in-out bg-yellow-500 border border-yellow-400 rounded-md hover:text-yellow-700 focus:border-yellow-300">
          <RiSendPlaneFill className="mr-2 text-xl text-yellow-800" />
          Sumar recurso
        </span>
        <span className="absolute top-0 right-0 flex w-3 h-3 -mt-1 -mr-1">
          <span className="absolute inline-flex w-full h-full bg-green-300 rounded-full opacity-75 animate-ping"></span>
          <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full"></span>
        </span>
      </Link>
    </InnerWrapper>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const InnerWrapper = styled.div`
  ${tw`flex items-center justify-between w-full px-3 py-2 m-auto `}
`

const Nav = styled.nav`
  ${tw`flex justify-start pl-6 mx-3 border-l border-gray-500 md:ml-40 `}
  flex: 1;

  a {
    ${tw`hidden mx-2 font-mono text-base font-bold lg:mx-2 lg:text-base md:inline-block`}
    &:hover {
      ${tw`text-blue-500`}
    }
    &.active {
      ${tw`text-blue-500`}
    }
    body.dark &.active {
      ${tw`text-blue-600`}
    }

    body.resources-tables & {
      ${tw`ml-3 text-base`}
    }
  }

  .license {
    ${tw`md:hidden`}
  }
`

const Logo = styled.div`
  ${tw`flex items-center font-sans text-xl font-bold md:absolute `}
`

export default Header
