import styled from "@emotion/styled"
import { graphql } from "gatsby"
import React from "react"
//import Fade from "react-reveal/Fade"
//import Img from "gatsby-image"
import { Helmet } from "react-helmet"
//import { kebabCase } from "lodash"
import tw from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"

const RecursosTablasPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Espacios" />
      <Helmet>
        <body className="resources-tables" />
      </Helmet>
      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/shracdfhPNgfhblRW?backgroundColor=yellow&viewControls=on"
        frameborder="0"
        onmousewheel=""
        title="Cooparaje - Airtable"
        width="100%"
        className="h-screen mt-0 bg-transparent"
        height="100%"
      ></iframe>
      <Container>
        <h3 className="hidden pt-24 font-mono font-bold text-center text-gray-500 uppercase opacity-50 ">
          Última actualización {data.site.buildTime}
        </h3>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      buildTime(locale: "es", formatString: "dddd Do - MMMM YYYY")
    }
  }
`

const Container = styled.div`
  ${tw`hidden w-full min-h-screen m-auto bg-gray-100`}
  h1 {
    ${tw`mb-6 font-mono text-2xl text-left`}

    body.dark & {
      ${tw`text-indigo-200 `}
    }
  }
  .article {
    ${tw`pt-6`}
  }
  body.dark & {
    ${tw`bg-gray-900 `}
  }
`

export default RecursosTablasPage
