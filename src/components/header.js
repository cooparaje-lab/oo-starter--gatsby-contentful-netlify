import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import ThemeToggler from "../components/ThemeToggler"

import "./header.css"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { GiOverInfinity } from "react-icons/gi"
const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles>
    <InnerWrapper>
      <Logo>
        <GiOverInfinity className="inline-block mr-3 text-4xl text-indigo-500" />
        <Link className="inline-block mt-1" to="/">
          {siteTitle}
        </Link>
      </Logo>
      <Nav>
        <Link activeClassName="active" to="/recursos/">
          Recursos
        </Link>
        <Link activeClassName="active" to="/proyectos/">
          Proyectos
        </Link>
        <Link activeClassName="active" to="/blog/">
          Blog
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
  ${tw`flex items-center justify-between max-w-6xl px-3 py-5 m-auto `}
`

const Logo = styled.div`
  ${tw`font-mono text-xl font-bold tracking-wider uppercase`}
`

const Nav = styled.nav`
  ${tw`flex justify-start pl-3 ml-12 border-l border-gray-500`}
  flex: 1;

  a {
    ${tw`hidden ml-8 font-mono text-xl md:inline-block`}
    &.active {
      ${tw`text-indigo-500`}
    }
  }
`

export default Header
