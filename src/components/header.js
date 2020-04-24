import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"

import "./header.css"
import tw from "tailwind.macro"
import styled from "@emotion/styled"

const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles>
    <InnerWrapper>
      <Logo>
        <Link to="/">{siteTitle}</Link>
      </Logo>
      <Nav>
        <Link activeClassName="active" to="/blog/">
          Blog
        </Link>

        <Link activeClassName="active" to="/proyectos/">
          Proyectos
        </Link>
      </Nav>
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
  ${tw`flex items-center justify-between max-w-6xl py-3 m-auto `}
`

const Logo = styled.div`
  ${tw`font-mono text-xl font-bold tracking-wider uppercase`}
`

const Nav = styled.nav`
  a {
    ${tw`ml-4 font-mono text-xl`}
    &.active {
      ${tw`text-blue-500`}
    }
  }
`

export default Header
