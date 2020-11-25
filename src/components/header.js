import styled from "@emotion/styled"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import tw from "twin.macro"
import Logos from "../assets/logo-coparaje.svg"
import ThemeToggler from "../components/themeToggler"
import "./header.css"

const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles className="bg-green-500">
    <InnerWrapper>
      <Logo className="isologo">
        <Logos className="w-8" />
        <Link className="inline-block ml-3 text-base " to="/">
          {siteTitle}
        </Link>
      </Logo>
      <Nav>
        <Link partiallyActive={true} activeClassName="active" to="/buscar/">
          Buscador
        </Link>
        <Link partiallyActive={true} activeClassName="active" to="/recursos/">
          Recursos
        </Link>
        <Link partiallyActive={true} activeClassName="active" to="/espacios/">
          Espacios
        </Link>
        <Link partiallyActive={true} activeClassName="active" to="/etiquetas/">
          Etiquetas
        </Link>
        <Link partiallyActive={true} activeClassName="active " className="license" to="/licencia/">
          Licencia
        </Link>
      </Nav>
      <ThemeToggler />
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
  ${tw`absolute flex items-center font-sans text-xl font-bold `}
 
`

export default Header
