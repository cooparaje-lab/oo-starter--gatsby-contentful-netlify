import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import Header from "../components/header"
import Offcanvas from "../components/offcanvas"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <TransitionProvider location={location}>
        <Offcanvas />
        <Header siteTitle={data.site.siteMetadata.title} />
        <TransitionViews>{children}</TransitionViews>
      </TransitionProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
