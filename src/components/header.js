import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import ThemeToggler from "../components/themeToggler"
import Logos from "../assets/logo-coparaje.svg"
import "./header.css"
import tw from "twin.macro"
import styled from "@emotion/styled"

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
        <Link activeClassName="active" to="/recursos/">
          Recursos
        </Link>
        <Link activeClassName="active" to="/espacios/">
          Espacios
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
  ${tw`absolute flex items-center font-mono text-xl font-bold tracking-wider uppercase`}
`

const Nav = styled.nav`
  ${tw`flex justify-center pl-3 mx-3 `}
  flex: 1;

  body.resources-tables & {
    ${tw`ml-4`}
  }

  a {
    ${tw`hidden mx-4 font-mono text-lg font-bold md:inline-block`}
    &:hover {
      ${tw`text-gray-500`} !important;
    }
    &.active {
      ${tw`text-indigo-500`}
    }
    body.dark &.active {
      ${tw`text-indigo-600`} !important
    }

    body.resources-tables & {
      ${tw`ml-3 text-base`}
    }
  }
`

export default Header
