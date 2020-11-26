import styled from "@emotion/styled"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import tw from "twin.macro"
import Logos from "../assets/logo-coparaje.svg"
//import ThemeToggler from "../components/themeToggler"
import "./header.css"
import { RiSendPlaneFill } from "react-icons/ri";
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
        <Link partiallyActive={true} activeClassName="active" to="/buscar">
          Buscador
        </Link>
        <Link partiallyActive={true} activeClassName="active" to="/recursos">
          Recursos
        </Link>
        <Link partiallyActive={true} activeClassName="active" to="/espacios">
          Espacios
        </Link>
        <Link partiallyActive={true} activeClassName="active" to="/etiquetas">
          Etiquetas
        </Link>
        <Link partiallyActive={true} activeClassName="active " className="license" to="/licencia">
          Licencia
        </Link>
      </Nav>
      <Link partiallyActive={true} activeClassName="active " className="items-center justify-center hidden px-3 py-1 text-base font-bold transform bg-yellow-500 border border-transparent rounded-md shadow-sm md:translate-x-0 -translate-x-11 hover:bg-yellow-60" to="/sumar">
      <RiSendPlaneFill className="mr-2 text-xl text-yellow-800"/>
          Sumar recurso
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
      ${tw`text-gray-500`}
    }
    &.active {
      ${tw`text-indigo-500`}
    }
    body.dark &.active {
      ${tw`text-indigo-600`}
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
