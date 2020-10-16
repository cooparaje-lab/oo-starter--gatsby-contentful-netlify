import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
//import { kebabCase } from "lodash"
import tw from "twin.macro"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

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

const AirTables = styled.div`
  ${tw`flex flex-wrap justify-center max-w-6xl pt-12 m-auto`}
  body.dark & {
    ${tw`text-indigo-200`}
  }

  .item {
    ${tw`w-full max-w-md p-5 mx-3 border border-gray-500`}
    flex: 1
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

export default RecursosGalleryPage
