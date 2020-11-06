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
  <Headroom disableInlineStyles>
    <InnerWrapper>
      <Logo>
        <Logos className="w-10" />
        <Link className="inline-block mt-1 ml-3" to="/">
          {siteTitle}
        </Link>
      </Logo>
      <Nav>
        <Link activeClassName="active" to="/buscar/">
          Buscador
        </Link>
        <Link activeClassName="active" to="/recursos/">
          Recursos
        </Link>
        <Link activeClassName="active" to="/espacios/">
          Espacios
        </Link>
        <Link activeClassName="active" to="/etiquetas/">
          Etiquetas
        </Link>
        <Link activeClassName="active" to="/licencia/">
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
  ${tw`flex items-center justify-between w-full px-3 py-5 m-auto `}

  body.resources-tables & {
    ${tw`py-1`}
  }
`

const Logo = styled.div`
  ${tw`absolute flex items-center font-sans text-xl font-bold `}
`

const Nav = styled.nav`
  ${tw`flex justify-end pr-6 mx-3 `}
  flex: 1;

  body.resources-tables & {
    ${tw`ml-4`}
  }

  a {
    ${tw`hidden mx-2 font-mono text-base font-bold lg:mx-4 lg:text-lg md:inline-block`}
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
`

export default Header
