import React from "react"
//import Fade from "react-reveal/Fade"
//import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
//import { graphql } from "gatsby"
import SEO from "../components/seo"

const RecursosGalleryPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Espacios" />
      <Helmet>
        <body className="resources-tables" />
      </Helmet>
      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/shrhNw28qyVys52RK?backgroundColor=yellow&viewControls=on"
        frameborder="0"
        onmousewheel=""
        title="Cooparaje - Airtable"
        width="100%"
        className="h-screen mt-0 bg-transparent"
        height="100%"
      ></iframe>
    </Layout>
  )
}

export default RecursosGalleryPage
